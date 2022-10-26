/**
 * Ejemplo de uso de: useState(), useRef(), useEffect()
*/

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {
    
    //Dos contadores con estados distintos
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //Creacion de referencia con useRef() para la asociación de una
    //variable con un elemento del DOM
    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1);
    }

    function incrementar2() {
        setContador2(contador2 + 1);
    }

    /**
     * Trabajando con useEffect()
     * 
     * ? Caso 1: Ejecutar SIEMPRE un snippet de código
     * cada ves que haya un cambio en el estado del componente
     * se ejecuta aquello que esté dentro del useEffect()
    */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
        console.log('Mostrando Referencia a elemento del DOM');
        console.log(miRef);
    });

    return (
        <div>
            <h1>EJEMPLO DE USO de useState(), useRef(), useEffect()</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}></h4>

            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    )
}

export default Ejemplo2;
