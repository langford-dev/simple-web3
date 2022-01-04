const simpleWeb3 = require('simple-web3')
const abi = {}

async function run() {
    await simpleWeb3.connect()
    await simpleWeb3.getMethod(abi, 'methodName')
    await simpleWeb3.getAllAccounts()
    await simpleWeb3.getAccount()
}

run()