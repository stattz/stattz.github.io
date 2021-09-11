import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'

export default function Connect() {
    const { activate, active, deactivate } = useWeb3React<Web3Provider>()

    const injectedConnector = new InjectedConnector({
        supportedChainIds: [
            1, // Mainnet
            3, // Ropsten
            4, // Rinkeby
        ],
    })

    const onActivate = () => {
        activate(injectedConnector)
    }

    const onDeactivate = () => {
        deactivate()
    }

    return active ? 
            <button onClick={onDeactivate}>Disconnect</button> : 
            <button onClick={onActivate}>Connect MetaMask</button>
}