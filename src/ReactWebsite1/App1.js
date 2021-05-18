import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Navbar from './Navbar';
import Footer from './Footer';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';

const App1= ()=>{

    return(
        <>
        <Navbar/>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/services' component={Services} />
            <Redirect to='/' />
</Switch>
<Footer/>
        </>
    )
};

export default App1;