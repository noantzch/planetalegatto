import React, { useState, useEffect, useRef } from 'react';

function Contador(props) {
  const [contador, setContador] = useState(props.inicial);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        const intervalId = setInterval(() => {
          setContador(contador => contador >= props.limite ? props.limite : contador + 1);
        }, props.intervalo);
        return () => clearInterval(intervalId);
      }
    }, { threshold: 0.5 });
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, [props.intervalo, props.limite, ref]);
  

  return (
    <div ref={ref} className="contador">
      {contador}
    </div>
  );
}

export default function ContadorI() {
  return (
    <div className="contadorContainer">
        <div className='contadorGrupo'>
            <p>Más de </p>
            <div className="contadores">
                <Contador inicial={0} limite={50} intervalo={100} />
            </div>
            <p>alumnos.</p>
        </div>
        <div className='contadorGrupo'>
            <p>Más de </p>
            <div className="contadores">
                <Contador inicial={0} limite={30} intervalo={80}  />
            </div>
            <p>conciertos. </p>
        </div>
    </div>
  );
}
