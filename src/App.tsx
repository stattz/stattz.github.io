import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/Home';
import Header from './pages/Header';
import Docs from './pages/Docs';
import { Web3ReactProvider } from '@web3-react/core';
import { ExternalProvider, Web3Provider } from '@ethersproject/providers';
import { ConnectedStateProvider } from './components/wallet/ConnectedStateProvider';
import NFTs from './pages/NFTs';
import NFT from './pages/NFT';

function getLibrary(provider: ExternalProvider) {
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000
    return library
}

export default function App() {
    return (
        <Router>
            <Web3ReactProvider getLibrary={getLibrary}>
                <ConnectedStateProvider>
                    <div>
                        <Header />
                        <div>
                            <Switch>
                                <Route path="/" exact>
                                    <Home />
                                </Route>
                                <Route path="/nfts" exact>
                                    <NFTs />
                                </Route>
                                <Route path="/nfts/:tokenId">
                                    <NFT />
                                </Route>
                                <Route path="/docs">
                                    <Docs />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </ConnectedStateProvider>
            </Web3ReactProvider>
        </Router>
    );
}