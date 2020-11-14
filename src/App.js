import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import Portfolio from './pages/portfolio/portfolio';
import NoMatch from './pages/noMatch/noMatch';

import './css/my_style.css';
import './css/styles.css';

function App() {
    return (
        <Router>
            <Header />
            <div className="container p-4 flex-fill bg-content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
