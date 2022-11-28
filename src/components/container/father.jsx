import React from 'react'
import Child from '../pure/child';

const Father = () => {

    function showMessage(text) {
        alert(`Message received: ${text}`)
    }

    return (
        <div>
            <Child name='Francisco' send={showMessage}></Child>
        </div>
    )
}

export default Father;
