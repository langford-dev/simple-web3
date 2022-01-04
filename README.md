# Simple web3

This package makes it **easy** to connect to web3 and interact with your smart contract on the blockchain

No need to install Web3.js.


## NPM installation

```npm i simple-web3```

## Yarn installation

```yarn add simple-web3```

## Nodejs Usage

```javascript

const simpleWeb3 = require('simple-web3')

const abi = {...}

async function simpleApp() {

    await simpleWeb3.connect()

    await simpleWeb3.getAllAccounts()

    await simpleWeb3.getAccount()

    await simpleWeb3.getMethod(abi, 'methodName')
}

simpleApp()
``` 

## ES6 Usage

```javascript

import { connect, getAllAccounts, getAccount, getMethod } from 'simple-web3'

``` 

### Note:
All methods called should be Async.

A smart contract ABI is only required when fetching methods from your smart contract