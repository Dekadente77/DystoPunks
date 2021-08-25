import React from "react"
import '../styles/Global.css';
import {Button} from '@material-ui/core';

const styleClaim = {
    backgroundColor: '#27D3CB',
    color: '#12173D',
    fontSize: 'calc(12px + 2vmin)',
    fontFamily: 'm5x7',
    boxShadow: 'none',
    borderRadius: '0px',

    '&:hover': {
        backgroundColor: '#27D3CB',
        color: '#ffffff',
        boxShadow: 'none',
    }
  };

const styleBuy = {
    backgroundColor: '#B483EF',
    color: '#12173D',
    fontSize: 'calc(12px + 2vmin)',
    fontFamily: 'm5x7',
    boxShadow: 'none',
    borderRadius: '0px',

    '&:hover': {
        backgroundColor: '#B483EF',
        color: '#ffffff',
        boxShadow: 'none',
    }
  };


function SocialButtons() {
  return (
    <div className="App">
        <form noValidate autoComplete="off">
            <Button style={styleClaim} variant="contained" size="large" href="https://opensea.io/collection/dystopunks-v2" target="_blank" rel="noopener noreferrer"><b>Buy at OpenSea</b></Button>&nbsp;
            <Button style={styleBuy} variant="contained" size="large" href="https://discord.gg/7kZvXxutTM" target="_blank" rel="noopener noreferrer"><b>Discord</b></Button>
        </form> <br/><br/>
    </div>
  );
}

export default SocialButtons;