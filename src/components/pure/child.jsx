import React from 'react'

const Child = ({name, send}) => {

    function pressButton() {
        alert(`Default Text`)
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`)
    }

    return (
        <div>
            <p onMouseOver={() => console.log('On Mouse Over')}>Child Component</p>
            <button onClick={() => console.log('Boton 1 pulsado')}>Button 1</button>
            <button onClick={(pressButton) => console.log('Boton 2 pulsado')}>Button 2</button>
            <button onClick={() => pressButtonParams('Hello')}>Button 3</button>
            <input 
                placeholder='Insert a text'
                onFocus={() => console.log('Input focused')}
                onChange={(e) => console.log('Input changed: ', e.target.value)}
                onCopy={() => console.log('Copied text from Input')}
            />
            <button onClick={() => send('Hellod Father')}>
                Send Message
            </button>
        </div>
    )
}

export default Child;
