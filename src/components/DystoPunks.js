import '../styles/Text.css';
import '../styles/Global.css';
import '../styles/Factory.css';
import factory from '../images/factory.png';
import {Container} from '@material-ui/core';

function Text() {
  return (
    <Container fixed style={{maxWidth: "700px"}}>
    <div className="Text">
        <h2><br/>
        <b style={{color: '#E54286'}}>My DystoPunks:</b>
        </h2>
    </div>
    </Container>
  );
}

export default Text;