const express = require("express");

const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");


const mercadopago = require("mercadopago");
const cors = require("cors");
const { doc, setDoc, getDocs, collection } = require('firebase/firestore');





const firebaseConfig = {
  apiKey: "AIzaSyAoyYS6Mj7cgCfepvbGzadET4cekzNhpn0",
  authDomain: "legatto-562eb.firebaseapp.com",
  projectId: "legatto-562eb",
  storageBucket: "legatto-562eb.appspot.com",
  messagingSenderId: "1084445377379",
  appId: "1:1084445377379:web:628a9897ea6d371a2d0956",
  measurementId: "G-CBP6TV6EBH"
};
const appF = initializeApp(firebaseConfig);
const db = getFirestore(appF);
const nodemailer = require('nodemailer');

mercadopago.configure({
  access_token: "TEST-5599472120738203-051417-e422149589f0e203733b7812f0ef2aba-183975774"
});

const app = express();
app.use(cors());
const PORT = 3000;

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'noantzch@gmail.com',
    pass: 'tgnwfognyhnxjoto',
  },
});

let alumnos = [];

const obtenerAlumnos = async () => {
  const querySnapshot = await getDocs(collection(db, 'alumnos'));
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  alumnos = data;
};
obtenerAlumnos();
app.post("/checkout", async (req, res) => {
  if (req.method === "POST") {
    const curso = req.body.curso;
    const URL = "https://7d1f-2803-9800-9403-bbeb-b41c-13c2-7172-750d.ngrok-free.app";

    try {
      const preference = {
        items: [
          {
            id: curso.id,
            title: curso.title,
            unit_price: curso.price,
            quantity: 1,
            description: curso.description,
          },
        ],
        auto_return: "approved",
        back_urls: {
          success: "http://localhost:3001/",
          failure: "http://localhost:3001/"
        },
        notification_url: `${URL}/notify`,
      };

      const response = await mercadopago.preferences.create(preference);

      res.status(200).send({ url: response.body.init_point });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(400).json({ message: "Method not allowed" });
  }
});

let correoEnviado = false;

app.post(`/notify`, async (req, res) => {
  const { query } = req;
  const topic = query.topic || query.type;
  obtenerAlumnos();
  try {
    if (topic === "payment") {
      const paymentId = query.id || query["data.id"];
      let payment = await mercadopago.payment.findById(Number(paymentId));
      let paymentStatus = payment.body.status;

      let apellidoEncontrado = '';
      let nombreEncontrado = ''; 
      const alumnoEncontrado = alumnos.find(alumno => alumno.dni === payment.body.description);
      if (alumnoEncontrado) {
        apellidoEncontrado = alumnoEncontrado.apellido;
        nombreEncontrado = alumnoEncontrado.nombre;
      }
      
      if (paymentStatus === "approved" && !correoEnviado) {
        const mailOptions = {
          from: 'noantzch@gmail.com',
          to: 'noantzch@gmail.com',
          subject: `Pago Recibido de ${nombreEncontrado} ${apellidoEncontrado}`,
          text: `Comprobante de pago # ${payment.body.order.id} \n\n El alumno/a ${nombreEncontrado} ${apellidoEncontrado} con DNI: ${payment.body.description} ha pagado $${payment.body.transaction_amount} pesos en la fecha: "${payment.body.date_approved}". Se ha pagado desde el mail: ${payment.body.payer.email}`,
        };

        const date = payment.body.date_approved.substring(0, 10);
        setDoc(doc(db, "comprobantesCursos", payment.body.order.id), {
          alumnoDNI: payment.body.description,
          monto: payment.body.transaction_amount,
          payerEmail: payment.body.payer.email,
          fecha: date
        });
        
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Correo electrónico enviado: ' + info.response);
            correoEnviado = true; // Marcar el correo electrónico como enviado
          }
        });
      }
    }
  } catch (error) {
    res.send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});
