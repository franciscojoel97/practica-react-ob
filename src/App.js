import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import ComponenteA from './components/container/componenteA';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TaskListComponent></TaskListComponent> */}
        <ComponenteA></ComponenteA>
      </header>
    </div>
  );
}

export default App;
