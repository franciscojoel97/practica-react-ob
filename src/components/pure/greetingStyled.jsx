import React, { useState } from 'react'

//Definiendo estilos en constantes

// ? Estilo para usuario logueado
const loggedStyle = {
    color: 'blue'
}

// ? Estilos para usuario no logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const greetingStyled = (props) => {
    
    //Estado para el componente y control de login del usuario
    const [logged, setLooged]  = useState(false);
    
    return (
        <div style={ logged ? loggedStyle : unloggedStyle}>
            <p>Hola {props.name}</p>
            <button>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    )
}

export default greetingStyled
