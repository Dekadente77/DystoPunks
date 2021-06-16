import React from "react"
import '../styles/Global.css';
import '../styles/Metamask.css'
import {Button, TextField, Fab} from '@material-ui/core';
import detectEthereumProvider from '@metamask/detect-provider';
const Web3 = require('web3');

// TEST
 const OPENSEA_WEB = "https://testnets.opensea.io/assets/0x677b29ED6C4Fad2FCF8C043fe4827AbE80DD75B0/";
 const NFT_CONTRACT_ADDRESS = "0x677b29ED6C4Fad2FCF8C043fe4827AbE80DD75B0"; //test

// MAINNET
//const OPENSEA_WEB = "https://opensea.io/assets/0x677b29ED6C4Fad2FCF8C043fe4827AbE80DD75B0/";
//const NFT_CONTRACT_ADDRESS = "0x677b29ED6C4Fad2FCF8C043fe4827AbE80DD75B0";

const NFT_ABI =[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "baseTokenURI",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "baseContractURI",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "MAX_SPUNKS",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_NumberOfPunks",
				"type": "uint256"
			}
		],
		"name": "authClaim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "calculatePrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimTestPunk",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "numTestPunks",
				"type": "uint256"
			}
		],
		"name": "getTestPunk",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "hasSaleStarted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "isAuthClaim",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pauseSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "numTestPunks",
				"type": "uint256"
			}
		],
		"name": "reserveGiveaway",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "tokensOfOwner",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawAll",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
];

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

const styleClaim = {
    backgroundColor: '#78FAE6',
    color: '#12173D',
    fontSize: 'calc(12px + 2vmin)',
    fontFamily: 'm5x7',
    boxShadow: 'none',
    borderRadius: '0px',
    margin: '0 10px 0 0',
  
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
  
  const inputProps = {
    min: 1,
    max: 20
  };

class ClaimButtons extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      currentAccount: null,
      totalSupply: 0,
      isSendingTransaction: false,
      purchaseNumber: "1",
      hasSaleStarted: false,
      isMainnet: true,
      unitPrice: 0,
      ownedPunks: [],
      statusString: null,
      defaultValue: 1,
      isAuthClaim: 0,
    }
    this.textInput = {value: 1};
    this.updateInput = this.updateInput.bind(this);
  
  }

  async handleClick() {
    await this.buyPunk(NFT_CONTRACT_ADDRESS, NFT_ABI,this.textInput.value);
  }

  async handleClaim() {
    await this.claimPunk(NFT_CONTRACT_ADDRESS, NFT_ABI,this.textInput.value);
  }


  async componentDidMount() {
    
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

    this.web3 = new Web3(this.ethereum);

    if (this.web3 === null) {
      console.log('web 3 not found');
      return;
    }
    this.nftContract = new this.web3.eth.Contract(
      NFT_ABI,
      NFT_CONTRACT_ADDRESS,
      { gasLimit: "1000000" }
    );


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
    this.updateInitialStates();

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


  buyPunk = (contractAddress, contractABI, numPurchase) => {

   

    const account = this.state.currentAccount;

    if (account === null) {
      console.log('no account detected');
      return;
    }
    numPurchase=parseInt(numPurchase);
    if (numPurchase > 20 || numPurchase < 1) {
      return;
    }

    this.setState({
      isSendingTransaction: true,
    });

    this.nftContract.methods.calculatePrice().call().then((unitPrice) => {
      const encodedAdoptFunction = this.nftContract.methods.getTestPunk(numPurchase).encodeABI();

      const transactionOptions = {
        from: account,
        to: contractAddress,
        data: encodedAdoptFunction,
        value: unitPrice*numPurchase,
      };
      this.web3.eth.sendTransaction(transactionOptions, (err, transactionId) => {
        if  (err) {
          console.log('Payment failed', err)
          this.setState({
            isSendingTransaction: false,
            statusString: "Payment failed!"
          });
        } else {
          console.log('Payment successful', transactionId)
          this.setState({
            isSendingTransaction: false,
            statusString: "Payment successful! Please check Metamask for details and refresh when its done."
          });
        }
      });
    });
  }

  claimPunk = (contractAddress, contractABI) => {

   

    const account = this.state.currentAccount;

    if (account === null) {
      console.log('no account detected');
      return;
    }
 

    this.setState({
      isSendingTransaction: true,
    });

    this.nftContract.methods.calculatePrice().call().then((unitPrice) => {
      const encodedAdoptFunction = this.nftContract.methods.claimTestPunk().encodeABI();

      const transactionOptions = {
        from: account,
        to: contractAddress,
        data: encodedAdoptFunction,
        value: 0,
      };
      this.web3.eth.sendTransaction(transactionOptions, (err, transactionId) => {
        if  (err) {
          console.log('Payment failed', err)
          this.setState({
            isSendingTransaction: false,
            statusString: "Transaction failed!"
          });
        } else {
          console.log('Payment successful', transactionId)
          this.setState({
            isSendingTransaction: false,
            statusString: "Claim successful! Please check Metamask for details and refresh when its done."
          });
        }
      });
    });
  }


  updateInitialStates = () => {
    this.updateTotalSupply();
    this.updateHasSaleStarted();
    this.updateUnitPrice();
    this.updateOwnedPunks();
    this.updateIsAuthClaim();
  }

  updateTotalSupply = () => {
    console.log("called totalSupply");
    this.nftContract.methods.totalSupply().call().then((totalSupply) => {
      this.setState({
        totalSupply: totalSupply,
      });
    });
  }

  updateHasSaleStarted = () => {
    this.nftContract.methods.hasSaleStarted().call().then((hasSaleStarted) => {
      this.setState({
        hasSaleStarted: hasSaleStarted
      });
    });
  }

  updateIsAuthClaim = () => {
    this.nftContract.methods.isAuthClaim(this.state.currentAccount).call().then((isAuthClaim) => {
      this.setState({
        isAuthClaim: isAuthClaim
      });
    });
  }

  updateUnitPrice = () => {
    this.nftContract.methods.calculatePrice().call().then((unitPrice) => {
      this.setState({
        unitPrice: this.web3.utils.fromWei(unitPrice, "ether")
      });
    });
  }

  updateOwnedPunks = () => {
    if (this.state.currentAccount) {
      this.nftContract.methods.tokensOfOwner(this.state.currentAccount).call().then((ownedPunks) => {
        this.setState({
          ownedPunks: ownedPunks
        });
      });
    }
  }

  updateInput(evt){
    this.textInput={value: evt.target.value};   
  }

  render() { 
    return (
      <div>
        <div className="sticky-cta">
           <div className='metamask'>
               {this.state.isAuthClaim ? (
                       <Fab style={style} variant="extended">
                             <b>{this.state.currentAccount.substring(0, 6)}...{this.state.currentAccount.substring(this.state.currentAccount.length -4)}</b>
                       </Fab>
                 ) :
                       <Fab style={style} variant="extended" onClick={() => this.connect()}>
                           <b>Connect metamask</b>
                       </Fab>

                 }
             </div>
        </div>
        <div className="App">
          <form noValidate autoComplete="off">
              <p>{this.state.statusString}</p>
              {this.state.isAuthClaim > 0 &&
              
                 <Button style={styleClaim} variant="contained" size="large" onClick={() => this.handleClaim()}><b>Claim Free Punks</b></Button>
  
              }
              <Button style={styleBuy} variant="contained" size="large" onClick={() => this.handleClick()}><b>Buy DystoPunks</b></Button>&nbsp;
              <TextField style={{maxWidth: "100px"}} label="MAX 20" variant="filled" onChange={this.updateInput} defaultValue={this.state.defaultValue}  margin="dense" size="small" requiered="true" type="number" inputProps={inputProps}/>
              <p style={{marginBottom: "20px"}}><b style={{color: '#E54286'}}>{this.state.totalSupply}/2077</b> SOLD | Current Price: <b style={{color: '#E54286'}}>{this.state.unitPrice}</b> <b>ETH</b></p>
          </form>
        </div>
      </div>
     
    );
  }
 
}

export default ClaimButtons;