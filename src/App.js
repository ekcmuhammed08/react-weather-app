import './App.css';
import Container from './Components/Container';
import { WeatherProvider } from './Context/WeatherContext';

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherProvider>
        <Container/>
      </WeatherProvider>
    </div>
  );
}

export default App;
