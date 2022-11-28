import React from 'react'
import Child from '../pure/child';

const Father = () => {

    function showMessage(text) {
        alert(`Message received: ${text}`)
    }

    return (
        <div style={{background: 'tomato', padding: '10px'}}>
            <Child name='Francisco' send={showMessage}></Child>
        </div>
    )
}

export default Father;
