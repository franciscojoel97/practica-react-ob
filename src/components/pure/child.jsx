import React from 'react'

const Child = ({name}) => {

    function pressButton() {
        alert(`Default Text`)
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`)
    }

    return (
        <div>
            <p>Child Component</p>
            <button onClick={() => console.log('Boton 1 pulsado')}>Boton 1</button>
            <button onClick={() => console.log('Boton 2 pulsado')}>Boton 2</button>
        </div>
    )
}

export default Child;
