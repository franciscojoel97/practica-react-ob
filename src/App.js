import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import ComponenteA from './components/container/componenteA';
import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/ejemplo2';
import MiComponenteConContexto from './hooks/ejemplo3';
import GreetingStyled from './components/pure/greetingStyled';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <ComponenteA></ComponenteA> */}
        {/* Ejemplo de uso de hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <GreetingStyled name="Francisco"></GreetingStyled> */}
     {/*  </header> */}
    </div>
  );
}

export default App;
