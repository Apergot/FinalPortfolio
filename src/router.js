import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import './App.css';

//Page imports
import Home from './pages/Home';
import About from './pages/About';

const Routes = () => {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
        </Router>
    )
}

export default Routes;
