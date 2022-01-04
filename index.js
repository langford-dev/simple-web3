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

    getBlochainData: async (abi) => {

        try {
            const status = await this.connect()

            if (!status) return [false, null]

            const networkId = await window.web3.eth.net.getId()
            const networkInfo = abi.networks[networkId]

            if (networkInfo) {
                const payload = await new window.web3.eth.Contract(abi.abi, networkInfo.address)
                return [true, payload]
            }

            else return [false, null]

        } catch (error) { return [false, error.message] }
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

    getMethod: async function (abi, name) {
        try {

            const [status, payload] = await this.getBlochainData(abi)

            if (!status) return {
                status: false,
                error: 'Could not connect to web3',
                payload: null
            }

            const formattedMethod = `${name + '()'}`

            const data = await payload.methods.formattedMethod.call()

            if (!status) return {
                status: false,
                error: 'Could not connect to web3',
                payload: null
            }

            return {
                status: true,
                message: 'Connection successful! 🎉',
                payload: data
            }


        } catch (error) {
            return {
                status: false,
                error: error.message,
                payload: null
            }
        }
    },
}