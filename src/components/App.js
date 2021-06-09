import logo from '../images/logo.png';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Welcome to a tech-filled dystopian future <br/> where only <b>2077</b> Punks survived.
        </p>
      </header>
    </div>
  );
}

export default App;
