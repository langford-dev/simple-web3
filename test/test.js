const simpleWeb3 = require('simple-web3')

const abi = {}

async function simpleApp() {

    await simpleWeb3.connect()

    await simpleWeb3.getAllAccounts()

    await simpleWeb3.getAccount()

    await simpleWeb3.getMethod(abi, 'methodName')
}

simpleApp()