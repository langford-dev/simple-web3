const test = require('simple-web3')


async function run() {
    console.log(await test.getAccount())
}

run()