import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';

import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Gallery from './pages/Gallery';

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div id="app">
                <Switch>
                    <Route exact path="/">
                        <Header isInHome={true} />
                    </Route>
                    <Route>
                        <Header isInHome={false} />
                    </Route>
                </Switch>

                <main>
                    <Switch>
                        <Route path="/gallery" component={Gallery} />
                        <Route exact path="/" component={Home} />
                        <Route component={NotFound} />
                    </Switch>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
