import { useWeb3React } from "@web3-react/core"
import { useEffect, useState, FC } from "react"
import { Injected } from "../services/connectors"

interface ConnectedStateProviderProps {
    children : JSX.Element;
}

export const ConnectedStateProvider : FC<ConnectedStateProviderProps> = props => {
    const { active, activate } = useWeb3React()
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        Injected
            .isAuthorized()
            .then((isAuthorized) => {
                if (!loaded && isAuthorized && !active) {
                    activate(Injected)
                }
                setLoaded(true)
            })
            .catch(() => {
                setLoaded(true)
            })
    }, [loaded, activate, active])

    if (loaded) {
        return props.children
    }

    return <></>
}
