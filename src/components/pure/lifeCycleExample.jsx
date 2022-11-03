/**
 * Ejemplo de componente de tipo clase que dispone de los 
 * métodos de ciclo de vida 
*/

import React, { Component } from "react";
import PropTypes from 'prop-types';

class LifeCycleExample extends Component {
    
    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR: Cuando se instancia el componente');
    }

    componentWillMount() {
        console.log('WILLMOUNT: antes del montaje del componente');
    }

    componentDidMount() {
        console.log('DIDMOUNT: justo antes de acabar el montaje del componente, antes de renderizarlo');
    }

    componentWillReceiveProps(nextProps) {
        console.log('WillReceiveProps: si va a recibir nuevas props');
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Controlar si el componente debe actualizarse o no
         * 
         * return true / false
         */
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: Justo antes de actualizarse');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: Justo despues de actualizarse');
    }

    componentWillUnmount() {
        console.log('WillUnmount: Justo antes de desaparecer');
    }

    
}