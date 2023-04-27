import React, { useState } from 'react';

function FormularioContacto() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [questionType, setQuestionType] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hola soy ${name}, tengo ${age} años, estoy interesado en ${questionType}, tengo la siguiente duda: ${question}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/+543875915583?text=${encodedMessage}`;
    window.open(whatsappLink);
  };

  return (
    <form onSubmit={handleSubmit} className='formularioContainer'>
      <h2>¡Escríbenos!</h2>
      <div className='formTextos'>

      <label>
        Nombre: <br></br>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Edad:<br></br>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <label>
        Tengo dudas sobre:<br></br>
        <select value={questionType} onChange={(e) => setQuestionType(e.target.value)}>
          <option value="">--Selecciona una opción--</option>
          <option value="Estimulación Temprana">Estimulación Temprana</option>
          <option value="Clases de Instrumento">Clases de Instrumento</option>
          <option value="Talleres Grupales">Talleres Grupales</option>
          <option value="Clases para Adultos">Clases para Adultos</option>
          <option value="Otros">Otros</option>
        </select>
      </label>
      <label>
        Escribe aquí tu duda:<br></br>
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </label>
      <button type="submit" className='btn btn-primary btn-primario'>Enviar</button>
      </div>
    </form>
  );
}
export default FormularioContacto