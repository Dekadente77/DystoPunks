const Web3 = require('web3');

export const buyPunk = async (contractAddress, contractABI) => {
  console.log('Start mint.js');
  let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  const account = await loadAccount();
  if (account === null) {
    console.log('no account detected');
    return;
  }
  console.log('before contract');
  const nftContract = new web3.eth.Contract(
    contractABI,
    contractAddress,
    { gasLimit: "1000000" }
  );
  const unitPrice = await nftContract.methods.calculatePrice().call();
  const encodedAdoptFunction = nftContract.methods.getTestPunk(1).encodeABI();

  const transactionOptions = {
    from: account,
    to: contractAddress,
    data: encodedAdoptFunction,
    value: unitPrice,
  };
  web3.eth.sendTransaction(transactionOptions, (err, transactionId) => {
    if  (err) {
      console.log('Payment failed', err)
    } else {
      console.log('Payment successful', transactionId)
    }
  })
}

export const loadAccount = async() => {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  return accounts[0];
}

export const getWeb3 = async() => {
  let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

  return web3;
}

export const checkNetwork = async() => {
  let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  const networkType = await web3.eth.net.getNetworkType();

  if (networkType !== "main") {
    alert("Network is not main");
  }
}
