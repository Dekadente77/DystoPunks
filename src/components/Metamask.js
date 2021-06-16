import React from "react"
import '../styles/Metamask.css'
import {Fab} from '@material-ui/core';
import detectEthereumProvider from '@metamask/detect-provider';

const style = {
  backgroundColor: '#8CFF9B',
  color: '#12173D',
  fontSize: 'calc(12px + 2vmin)',
  fontFamily: 'm5x7',
  boxShadow: 'none',
  borderRadius: '0px',

  '&:hover': {
      backgroundColor: '#8CFF9B',
      color: '#ffffff',
      boxShadow: 'none',
  }
}; 

class Metamask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentAccount: null,
      isMainnet: true,
    }

  }

  





  render() {
    return (
        <div>
         
        </div>
    );
  }
}

export default Metamask;
