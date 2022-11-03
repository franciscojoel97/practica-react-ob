/**
 * Ejemplo de uso del metodo
 * de ciclo de vida en componente clase y el hook de ciclo de vida
 * en componente funcional 
*/

import React, { Component, useEffect } from "react";

export class Didmount extends Component {

    componentDidMount() {
        console.log('Comportamiento antes de que el componente sea añadido al DOM');
    }

    render() {
        return (
            <div>   
                <h1>DidMount</h1>
            </div>
        );
    }
}

export const DidmountHook = () => {
    
    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)');
    },[]);
    
    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}