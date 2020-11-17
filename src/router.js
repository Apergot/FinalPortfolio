import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

//Page imports
import Home from './pages/Home';
import Blog from './pages/Blog';

const Routes = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/blog" component={Blog}/>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default Routes;
