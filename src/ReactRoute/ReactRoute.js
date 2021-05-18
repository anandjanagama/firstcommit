import React from 'react';
import ReactRoute1 from './ReactRoute1';
import ReactRoute2 from './ReactRoute2';
import ReactRoute3 from './ReactRoute3';
import Search from './Search';
import User from './User';
import Menu from './Menu';
import Error from './Error';
import {Route, Switch} from 'react-router-dom';


const ReactRoute = ()=>{
return(
    <>
    <Menu/>
<Switch>
    <Route exact path='/' component={ ReactRoute1} />
    <Route exact path='/second' component={()=><ReactRoute2 name='heybro2' />} />
    <Route exact path='/second/third' render = {()=><ReactRoute3 name='heybro2' />}/>
    <Route exact path='/second/third/user/:name' render={()=> <User/> } />
    <Route exact path='/search' component={Search}/>
    <Route path='/' component={Error}/>
</Switch>
    </>
)


};

export default ReactRoute;