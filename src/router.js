import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

//Page imports
import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/post';
import NotFound from './pages/notfound';

const Routes = () => {
    return (
        <Router>
            <ScrollToTop>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/blog" component={Blog}/>
                    <Route exact path="/post/:id" render={props => <Post {...props}/>}/>
                    <Route path="/404" component={NotFound}/>
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </div>
            </ScrollToTop>
        </Router>
    )
}

export default Routes;
