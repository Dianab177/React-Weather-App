import './App.css';
import Weather from "./Componentes/Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div><h1>Weather App</h1>
       <Weather />
       </div>
      </header>
    </div>
  );
}

export default App;
