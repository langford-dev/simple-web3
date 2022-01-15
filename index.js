import Web3 from "web3"

const connect = async () => {

    try {

        if (window.ethereum) {

            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        }

        else if (window.web3) window.web3 = new Web3(window.web3.currentProvider)

        else {

            alert("Your browser doesn't support ethereum 😔, Install the MetaMask extension")
            return {
                status: false,
                error: "Your browser doesn't support ethereum 😔, Install the MetaMask extension"
            }
        }

        return { status: true, message: 'Successfully connected to web3 🎉' }
    }

    catch (error) {
        return { status: false, error: error.message }
    }
}

const getBlochainData = async (abi) => {

    try {

        if (!abi || typeof abi != 'object') {

            return {
                status: false,
                error: 'Invalid ABI provided'
            }
        }

        const connection = await connect()

        if (!connection.status) {

            return {
                status: false,
                error: connection.error
            }
        }

        const networkId = await window.web3.eth.net.getId()
        const networkInfo = abi.default.networks[networkId]

        if (networkInfo) {

            const payload = await new window.web3.eth.Contract(abi.default.abi, networkInfo.address)
            return payload
        }

        else return {
            status: false, error: "Could not get network ID from ABI"
        }

    } catch (error) {
        console.log(error.message)
        return { status: false, error: error.message }
    }

}

const getAccount = async () => {

    try {

        const connection = await connect()

        if (!connection.status) {

            return {
                status: false, message: connection.error
            }
        }

        const accounts = await window.web3.eth.getAccounts()
        return accounts[0]

    } catch (error) {

        console.log(error.message)
        return { status: false, error: error.message }
    }
}

const getAllAccounts = async () => {

    try {

        const connection = await connect()

        if (!connection.status) {

            return {
                status: false, message: connection.error
            }
        }

        const accounts = await window.web3.eth.getAccounts()

        return accounts

    } catch (error) {

        console.log(error.message)
        return { status: false, error: error.message }
    }
}

const getMethods = async (abi) => {

    try {

        const data = await getBlochainData(abi)

        if (!data.status) {

            return {
                status: false,
                error: data.error
            }
        }

        const methods = await data.payload.methods
        return methods

    } catch (error) {

        console.log(error.message)
        return { status: false, error: error.message }
    }
}

export { getBlochainData, connect, getAccount, getAllAccounts, getMethods }
