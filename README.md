# Simple web3

No need to install Web3.js.


### Usage:


```
const simpleWeb3 = require('simple-web3')
const abi = {...}
// A smart contract ABI is only required when fetching methods from your smart contract

async function simpleApp() {
    await simpleWeb3.connect()
    await simpleWeb3.getMethod(abi, 'methodName')
    await simpleWeb3.getAllAccounts()
    await simpleWeb3.getAccount()
}

simpleApp()
``` 

Note: All library methods should be async
