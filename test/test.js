const simpleWeb3 = require('simple-web3')
const abi = {}

async function run() {
    console.log(await simpleWeb3.getMethod(abi, 'variableName'))
}

run()