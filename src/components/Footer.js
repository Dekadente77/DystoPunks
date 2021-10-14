import '../styles/Text.css';
import '../styles/Global.css';
import {Button, Container} from '@material-ui/core';

const styleClaim = {
  backgroundColor: '#27D3CB',
  color: '#12173D',
  fontSize: 'calc(12px + 2vmin)',
  fontFamily: 'm5x7',
  boxShadow: 'none',
  borderRadius: '0px',

  '&:hover': {
      backgroundColor: '#78FAE6',
      color: '#ffffff',
      boxShadow: 'none',
  }
};

function Footer() {
  return (
    <Container fixed style={{maxWidth: "700px"}}>
    <div className="Text">
    <Button style={styleClaim} variant="contained" size="small" href="https://opensea.io/collection/dystopunks" target="_blank" rel="noopener noreferrer"><b>Buy at OpenSea</b></Button>
        <p style={{color: '#FFFFFF'}}>
        <a href="https://discord.gg/DystoPunks" target="_blank" rel="noopener noreferrer"><b>Discord</b></a> | <a href="https://dystopunks.medium.com/" target="_blank" rel="noopener noreferrer"><b>Medium</b></a> | <a href="https://twitter.com/DystoPunks" target="_blank" rel="noopener noreferrer"><b>Twitter</b></a>
        <br/>
        <b style={{color: '#E54286'}}>© 2021 DystoPunks</b><br/><br/>
        Inspired by <b>CyberKongz</b> and <b>CryptoPunks</b>.<br/>
        This project is not affiliated with <b>Larva Labs</b>.<br/><br/>
        </p>
    </div>
    </Container>
  );
}

export default Footer;
