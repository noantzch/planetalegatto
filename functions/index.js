  const functions = require("firebase-functions");
  const { initializeApp } = require("firebase/app");
  const { getFirestore } = require("firebase/firestore");
  const mercadopago = require("mercadopago");
  const { doc, setDoc, getDocs, collection } = require('firebase/firestore');
  const nodemailer = require('nodemailer');
  const MP_PUBLIC_KEY = functions.config().mp.public_key;
  const MP_ACCESS_TOKEN = functions.config().mp.access_token;
  const NODEMAILER_USER = functions.config().nodemailer.user;
  const NODEMAILER_PASS = functions.config().nodemailer.pass;
  

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

mercadopago.configure({
  access_token: MP_ACCESS_TOKEN
});


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: NODEMAILER_USER,
    pass: NODEMAILER_PASS
  },
});

let alumnos = [];

const obtenerAlumnos = async () => {
  const querySnapshot = await getDocs(collection(db, 'alumnos'));
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  alumnos = data;
};
obtenerAlumnos();
let correoEnviado = false;

exports.createItem = functions.https.onRequest(async (request, response) => {
  // Permitir solicitudes desde cualquier dominio
  response.set("Access-Control-Allow-Origin", "*");

  // Permitir solicitudes con los siguientes métodos HTTP
  response.set("Access-Control-Allow-Methods", "GET, POST");

  // Permitir el envío de las siguientes cabeceras en las solicitudes
  response.set("Access-Control-Allow-Headers", "Content-Type");

  if (request.method === "OPTIONS") {
    response.status(204).send("");
  } else if (request.method === "POST") {
    const curso = await request.body.curso;
    const URL = "https://planetalegatto-git-mp-noantzch.vercel.app/";

    try {
      const preference = await {
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
          success: `${URL}`,
          failure: `${URL}`,
        },
        notification_url: `https://us-central1-legatto-562eb.cloudfunctions.net/notify`,
      };

      const mpResponse = await mercadopago.preferences.create(preference);

      response.status(200).send({ url: mpResponse.body.init_point });
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    response.status(400).json({ message: "Method not allowed" });
  }
});


exports.notify = functions.https.onRequest(async (request, response) => {
  // Permitir solicitudes desde cualquier dominio
  response.set("Access-Control-Allow-Origin", "*");

  // Permitir solicitudes con los siguientes métodos HTTP
  response.set("Access-Control-Allow-Methods", "GET, POST");

  // Permitir el envío de las siguientes cabeceras en las solicitudes
  response.set("Access-Control-Allow-Headers", "Content-Type");

  if (request.method === "OPTIONS") {
    response.status(204).send("");
  } else {
    const { query } = request;
    const topic = query.topic || query.type;

    try {
      if (topic === "payment") {
        const paymentId = query.id || query["data.id"];
        const payment = await mercadopago.payment.findById(Number(paymentId));
        const paymentStatus = payment.body.status;

        let apellidoEncontrado = "";
        let nombreEncontrado = "";
        const alumnoEncontrado = alumnos.find(
          (alumno) => alumno.dni === payment.body.description
        );
        if (alumnoEncontrado) {
          apellidoEncontrado = alumnoEncontrado.apellido;
          nombreEncontrado = alumnoEncontrado.nombre;
        }

        if (paymentStatus === "approved" && !correoEnviado) {
          const mailOptions = {
            from: "noantzch@gmail.com",
            to: "noantzch@gmail.com",
            subject: `Pago Recibido de ${nombreEncontrado} ${apellidoEncontrado}`,
            text: `Comprobante de pago # ${payment.body.order.id} \n\n El alumno/a ${nombreEncontrado} ${apellidoEncontrado} con DNI: ${payment.body.description} ha pagado $${payment.body.transaction_amount} pesos en la fecha: "${payment.body.date_approved}". Se ha pagado desde el mail: ${payment.body.payer.email}`,
          };

          const date = payment.body.date_approved.substring(0, 10);
          await setDoc(doc(db, "comprobantesCursos", payment.body.order.id), {
            alumnoDNI: payment.body.description,
            monto: payment.body.transaction_amount,
            payerEmail: payment.body.payer.email,
            fecha: date,
          });

          await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
              response.status(500).json({ message: "Error sending email" });
            } else {
              console.log("Correo electrónico enviado: " + info.response);
              correoEnviado = true; // Marcar el correo electrónico como enviado
              response.status(200).json({ message: "Email sent" });
            }
          });
        } else {
          response
            .status(200)
            .json({ message: "Payment not approved or email already sent" });
        }
      } else {
        response.status(400).json({ message: "Invalid topic" });
      }
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: "Internal Server Error" });
    }
  }
});


