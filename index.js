const web3 = require('web3')

module.exports = {
    connect: async function () {
        try {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum)
                await window.ethereum.enable()
            }

            else if (window.web3) window.web3 = new Web3(window.web3.currentProvider)
            else return ("Your browser doesn't  support ethereum! 😔, Install the MetaMask chrome extension")

            return true;
        }

        catch (error) { return error.message }
    },

    getAccount: async function () {
        try {

            await this.connect()

            const web3 = window.web3
            const accounts = await web3.eth.getAccounts()
            return accounts[0]

        } catch (error) { return error.message }
    },

    getAllAccounts: async function () {
        try {

            await this.connect()

            const web3 = window.web3
            const accounts = await web3.eth.getAccounts()
            return accounts

        } catch (error) { return error.message }
    },
}