import logo from '../images/logo.gif';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="DystopianPunks V2" />
        <p style={{lineHeight: "calc(12px + 2vmin)"}}>
        Welcome to a tech-filled dystopian future <br/> where only <b>2077 Punks</b> survived. <br/><br/>       
        <b style={{color: '#E54286'}}>Web under maintenance!</b>
        </p>
      </header>
    </div>
  );
}

export default App;
