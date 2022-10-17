/**
 * Crear un componente de funcion y acceder a su estado
 * privado a traves de un hook, ademas modificarlo
 * 
 * ***** USO DE useState
 */

import React, { useState } from 'react'

const Ejemplo1 = () => {
    
    //Valor inicial de un contador
    const valorInicial = 0;

    //Datos iniciales de una persona
    const personaInicial = {
        nombre: 'Francisco',
        email: 'francisco@gmail.com'
    }

    /**
     * Valorinicial y personaInicial sean parte del estado del
     * componente para así poder gestionar su cambio y que este
     * se vea reflejado en la vista del componente
    */
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    //Metodo para incrementar el contador
    function incrementarContador() {
        setContador(contador + 1);
    }

    //Metodo para actualizar el estado de la persona
    function actualizarPersona() {
        setPersona(
            {
                nombre: 'Joel',
                email: 'joel@gmail.com'
            }
        )
    }

    return (
        <div>
            <h1>Ejemplo de uso del useState</h1>
            <h3>Contador: {contador}</h3>
            <h2>Datos de la Persona</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            {/* Botones para actualizar el estado */}
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    )
}

export default Ejemplo1
