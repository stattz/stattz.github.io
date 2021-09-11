import { Web3Provider } from "@ethersproject/providers"
import { useWeb3React } from "@web3-react/core"

export default function Mint() {
    const { chainId, account } = useWeb3React<Web3Provider>()

    return (
        <div>
            <div>ChainId: {chainId}</div>
            <div>Account: {account}</div>
        </div>
    )
}