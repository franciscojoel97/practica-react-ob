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

  const estadoInicial = {
    token: '11121997',
    sesion: 1
  }

  //Creacion del estado de este componente
  const [sessionData, setSessionData] = useState(estadoInicial);

  function actualizarSesion() {
    setSessionData(
      {
        token: 'JWT11121997',
        sesion: sessionData.sesion + 1
      }
    )
  }

  return (
    <miContexto.Provider value={sessionData}>
      {/* Todo lo que esta aqui dentro puede leer datos de sessionData */}
      {/* Ademas, si se actualiza, los componentes de aquí, tambien se actualizan */}
      <h1>Ejemplo de useState() y useContext()</h1>
      <Componente1></Componente1>
      <button onClick={actualizarSesion}>Actualizar Sesion</button>
    </miContexto.Provider>
  )
}






