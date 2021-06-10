import '../styles/Text.css';
import '../styles/Global.css';
import {Container} from '@material-ui/core';

function Footer() {
  return (
    <Container fixed style={{maxWidth: "700px"}}>
    <div className="Text">
        <p>
        <h2>Difference of DystoPunks V2</h2>
        <a href="https://opensea.io/collection/dystopianpunks" target="_blank" rel="noopener noreferrer"><b>DystoPunks V1</b></a> was one of the first <a href="https://unofficialpunks.com/" target="_blank" rel="noopener noreferrer"><b>UnofficialPunks</b></a>, they are a 100% handmade experimental project, which turned out to be a success, only 100 exist and yet there is a great community around them.    
        <br/><br/> 
        <b style={{color: '#E54286'}}>DystoPunks V2</b> were created for various reasons; Generate further growth of the dystopian community, enhance the rarity system with many improved and better distributed futuristic tech accessories, develop a <b>Punkverse</b> where the community can interact through their <b>Punks</b>, and of course reward all those who have supported the project since the beginning.  
        <br/><br/> 
        <b style={{color: '#E54286'}}>V2</b> are similar to <b>V1</b> as they maintain the same <b>Cyberpunk</b> concept and the same color palette but several accessories have been added and improved, however the <b>V1</b> will maintain unique aspects that will not exist in <b style={{color: '#E54286'}}>V2</b> such as certain combinations, colorful beards and some traits.  
        </p>
        <p>
        <a href="https://twitter.com/DystopianPunks" target="_blank" rel="noopener noreferrer"><b>Twitter</b></a> | <a href="https://discord.gg/RMPkyYzZga" target="_blank" rel="noopener noreferrer"><b>Discord</b></a><br/>
        <b style={{color: '#E54286'}}>© 2021 DystopianPunks</b><br/><br/>
        This project pays homage to the original <b style={{color: '#E54286'}}>CryptoPunks</b> and is not affiliated with <b style={{color: '#E54286'}}>Larva Labs</b>.<br/><br/>
        </p>
    </div>
    </Container>
  );
}

export default Footer;
