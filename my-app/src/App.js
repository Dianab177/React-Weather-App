import './App.css';
import Weather from "./Componentes/Weather";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
       <div><h1>{props.temperature}</h1></div>
       <div>
       <Weather city='londres' />
       </div>
      </header>
    </div>
  );
}

export default App;
