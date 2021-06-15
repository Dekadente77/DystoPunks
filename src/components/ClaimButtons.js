import React from "react"
import '../styles/Global.css';
import {Button, TextField} from '@material-ui/core';

const styleClaim = {
    backgroundColor: '#78FAE6',
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
  

function ClaimButtons() {
  return (
    <div className="App">
        <form noValidate autoComplete="off">
            <Button style={styleClaim} variant="contained" size="large"><b>Claim Free Punks</b></Button>&nbsp;
            <Button style={styleBuy} variant="contained" size="large"><b>Buy DystoPunks</b></Button>&nbsp;
            <TextField style={{maxWidth: "100px"}} label="MAX 20" variant="filled" margin="dense" size="small" requiered="true" type="number" ImputProps={{ inputProps: { min: 0, max: 10 } }}/>
            <p style={{marginBottom: "20px"}}><b style={{color: '#E54286'}}>0/2077</b> SOLD</p>
        </form>
    </div>
  );
}

export default ClaimButtons;