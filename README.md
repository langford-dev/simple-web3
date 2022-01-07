# Simple web3

This package makes it **easy** to connect to web3 through the MetaMask extension and interact with your smart contract on the blockchain.

No need to install Web3.js. It already comes with web3.js preinstalled.


## NPM installation

```npm i simple-web3```

## Yarn installation

```yarn add simple-web3```


## Importing simple-web3

``` javascript

    const simpleWeb3 = require('simple-web3')
    
    // ES6
    import { connect, getAllAccounts, getAccount, getMethods  } from 'simple-web3'

```


## Usage

```javascript

import { connect, getAllAccounts, getAccount  } from 'simple-web3'

const ABI = {...}

async function main() {

    await connect() // connect to web3 through MetaMask

    let accounts = await getAllAccounts() // get all wallet addresses

    let account = await getAccount() // get first wallet address
}

main()

```


### Note:

- All methods called should be Async.

- A smart contract ABI is only **required** when **interacting** with your **smart contract**


## Get smart contract methods ES6

``` javascript

import { getMethods  } from 'simple-web3'

const ABI = {...}

async function main() {

    const methods = await getMethods(ABI)

    await methods.methodName().call()
}

// methodName is the name of your method or function in the smart contract

```

<a href="hhttps://www.buymeacoffee.com/langford.dev" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"><a>


