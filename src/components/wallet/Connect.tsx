import { useWeb3React } from '@web3-react/core'
import { Injected } from '../../services/connectors';

export default function Connect() {
    const { activate, active, deactivate } = useWeb3React()

    const onActivate = async () => {
        await activate(Injected)
    }

    const onDeactivate = async () => {
        await deactivate()
    }

    return active ?
        <button onClick={onDeactivate}>Disconnect</button> :
        <button onClick={onActivate}>Connect</button>
}