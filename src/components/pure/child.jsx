import React, { useRef } from 'react'

const Child = ({name, send}) => {

    const messageRef = useRef('');

    function pressButton() {
        const text = messageRef.current.value;
        alert(`Text in input ${text}`)
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`)
    }

    return (
        <div style={{background: 'cyan', padding: '30px'}}>
            <p onMouseOver={() => console.log('On Mouse Over')}>Child Component</p>
            <button onClick={() => console.log('Boton 1 pulsado')}>Button 1</button>
            <button onClick={(pressButton) => console.log('Boton 2 pulsado')}>Button 2</button>
            <button onClick={() => pressButtonParams('Hello')}>Button 3</button>
            <input 
                placeholder='Insert a text'
                onFocus={() => console.log('Input focused')}
                onChange={(e) => console.log('Input changed: ', e.target.value)}
                onCopy={() => console.log('Copied text from Input')}
                value='Default text'
                ref={messageRef}
            />
            <button onClick={() => send(messageRef.current.value)}>
                Send Message
            </button>
        </div>
    )
}

export default Child;
