import logo from '../images/logo.png';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="DystopianPunks V2" />
        <p style={{lineHeight: "calc(12px + 2vmin)"}}>
        Welcome to a tech-filled dystopian future <br/> where only <b>2077 Punks</b> survived. <br/><br/>       
        <b b style={{color: '#E54286'}}>Sold out!</b> You can buy on <a href="https://opensea.io/collection/dystopianpunks-v2" target="_blank" rel="noopener noreferrer"><b>OpenSea</b></a>.
        </p>
      </header>
    </div>
  );
}

export default App;
