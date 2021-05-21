import React from 'react';
import Menu from './Menu';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { Route, Redirect, Router} from 'react-router-dom'

const Body = () => {
    return (
        <div>
            <switch>
                <Route path="/home" exact component={Home}/>
                <Route path="/menu" exact component={Menu}/>
                <Route path="/contact" exact component={Contact}/>
                <Route path ="/about" exact component ={About}/>
                <Redirect from = "/" to ="/home"/>
            </switch>
           
            
        </div>
    );
}

export default Body;
