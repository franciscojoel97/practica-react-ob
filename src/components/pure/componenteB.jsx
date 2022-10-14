import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ComponenteB = ({ contact }) => {
  return (
    <div>
      <h2>Nombre: {contact.nombre} </h2>
      <h2>Apellido: {contact.apellido} </h2>
      <h3>Correo: {contact.email}</h3>
      <h4> {contact.conectado ? 'Contacto en línea':'Contacto no disponible'} </h4>
    </div>
  )
}

ComponenteB.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ComponenteB
