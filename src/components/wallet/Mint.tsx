import { useWeb3React } from "@web3-react/core"

export default function Mint() {
    const { chainId, account } = useWeb3React()

    return (
        <div>
            <div>ChainId: {chainId}</div>
            <div>Account: {account}</div>
        </div>
    )
}