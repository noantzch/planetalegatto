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
      <label>
        Nombre:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Edad:
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <label>
        Tengo dudas sobre:
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
        Escribe aquí tu duda:
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}
export default FormularioContacto