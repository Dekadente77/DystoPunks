import React from "react"
import '../styles/Metamask.css'
import {Fab} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import detectEthereumProvider from '@metamask/detect-provider';



class Metamask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentAccount: null,
      isMainnet: true,
    }

  }

  async componentDidMount() {
    console.log("componentDidMount");
    if (this.ethereum) {
      return;
    }
    this.ethereum = await detectEthereumProvider();
    if (this.ethereum === null || this.ethereum !== window.ethereum ) {
      console.log("ethereum provider not detected");
      this.setState({
        currentAccount: null,
      });
      return;
    }


    this.connect()

    /**********************************************************/
    /* Handle chain (network) and chainChanged (per EIP-1193) */
    /**********************************************************/
    const chainId = await this.ethereum.request({ method: 'eth_chainId' });
    if (chainId !== "0x1") {
      this.setState({isMainnet: false})
    }

    this.ethereum.on('chainChanged', handleChainChanged);

    function handleChainChanged(_chainId) {
      // We recommend reloading the page, unless you must do otherwise
      window.location.reload();
    }

    /***********************************************************/
    /* Handle user accounts and accountsChanged (per EIP-1193) */
    /***********************************************************/
    this.ethereum
      .request({ method: 'eth_accounts' })
      .then((accounts) => this.handleAccountsChanged(accounts))
      .catch((err) => {
        // Some unexpected error.
        // For backwards compatibility reasons, if no accounts are available,
        // eth_accounts will return an empty array.
        console.error(err);
      });

    // Note that this event is emitted on page load.
    // If the array of accounts is non-empty, you're already
    // connected.
    this.ethereum.on('accountsChanged', () => this.handleAccountsChanged);


  }

  handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
      this.setState({
        currentAccount: null,
      });
    } else if (accounts[0] !== this.state.currentAccount) {
      this.setState({
        currentAccount: accounts[0],
      });
    }

  }

  connect = () => {
    console.log(this.ethereum);
    if (this.ethereum === null) {
      alert("no wallet");
      return;
    }
    if (this.state.currentAccount) {
      console.log("account already connected");
      return;
    }
    this.ethereum
    .request({ method: 'eth_requestAccounts' })
    .then((accounts) => this.handleAccountsChanged(accounts))
    .catch((err) => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log('Please connect to MetaMask.');
      } else {
        console.error(err);
      }
    });
  }





  render() {
    return (
        <div className="sticky-cta">
           <div className='metamask'>
               {this.state.currentAccount ? (
                       <Fab variant="extended">
                             <b>{this.state.currentAccount.substring(0, 6)}...{this.state.currentAccount.substring(this.state.currentAccount.length -4)}</b>
                       </Fab>
                 ) :
                       <Fab variant="extended" onClick={() => this.connect()}>
                           <b>Connect metamask</b>
                       </Fab>

                 }
             </div>
        </div>
    );
  }
}

export default Metamask;
