import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/Home';
import Header from './pages/Header';
import About from './pages/About';

export default function App() {
    return (
        <Router>
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
        </Router>
    );
}