import React from "react"
import '../styles/Global.css';
import {Button, TextField, Fab} from '@material-ui/core';

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

const styleBuy = {
    backgroundColor: '#E54286',
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
          
            <Button style={styleClaim} variant="contained" size="large" href="" target="_blank" rel="noopener noreferrer"><b>Claim 300 $CREDS</b></Button>&nbsp;
            <Button style={styleBuy} variant="contained" size="large" href="" target="_blank" rel="noopener noreferrer"><b>Mint Crates</b></Button>&nbsp;
            <TextField style={{maxWidth: "100px"}} variant="filled" margin="dense" size="small" requiered="true" type="number"/>
        </form>
    </div>
  );
}

export default SocialButtons;