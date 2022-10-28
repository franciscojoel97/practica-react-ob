/**
 * ? Ejemplo Hooks:
 * -> useState()
 * -> useContext()
*/
import React, {useState, useContext} from 'react'

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor 
 * que recibe desde el padre
*/

const miContexto = React.createContext(null);

const Componente1 = () => {

  const state = useContext(miContexto);

  return (
    <div>
      <h1>El token es: {state.token}</h1>
      <Componente2></Componente2>
    </div>
  )
}

const Componente2 = () => {

  const state = useContext(miContexto);

  return (
    <div>
      <h2>La sesion es: {state.sesion}</h2>
    </div>
  )
}

export default function MiComponenteConContexto() {
  return (
    <div>
      
    </div>
  )
}






