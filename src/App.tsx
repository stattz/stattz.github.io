import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/Home';
import Header from './pages/Header';
import About from './pages/About';

import { Web3ReactProvider } from '@web3-react/core';
import { ExternalProvider, Web3Provider } from '@ethersproject/providers';

function getLibrary(provider: ExternalProvider) {
    return new Web3Provider(provider)
}

export default function App() {
    return (
        <Router>
            <Web3ReactProvider getLibrary={getLibrary}>
                <div>
                    <Header />
                    <div>
                        <Switch>
                            <Route path="/">
                                <Home />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Web3ReactProvider>
        </Router>
    );
}