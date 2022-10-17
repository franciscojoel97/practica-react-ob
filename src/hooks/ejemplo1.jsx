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

    return (
        <div>
      
        </div>
    )
}

export default Ejemplo1
