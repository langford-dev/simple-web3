# Simple web3

This package makes it **easy** to connect to web3 and interact with your smart contract on the blockchain

No need to install Web3.js.


## NPM installation

```npm i simple-web3```

## Yarn installation

```yarn add simple-web3```


## Importing simple-web3

``` javascript

    const simpleWeb3 = require('simple-web3')
    
    // ES6
    import { getMethods  } from 'simple-web3'

```


## Nodejs Usage

```javascript

import { connect, getAllAccounts, getAccount  } from 'simple-web3'

const ABI = {...}

async function main() {

    await simpleWeb3.connect()

    await simpleWeb3.getAllAccounts()

    await simpleWeb3.getAccount()
}

main()

```


### Note:

- All methods called should be Async.

- A smart contract ABI is only ** required ** when interacting with your smart contract


## Get All Methods ES6

``` javascript

import { getMethods  } from 'simple-web3'

const ABI = {...}

async function main() {

    const methods = await getMethods(ABI)

    await methods.methodName().call()
}

// methodName is the name of your method or function in the smart contract

```