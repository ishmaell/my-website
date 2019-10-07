import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

// Pages
import Home from 'pages/Home';
import About from 'pages/About';
import Projects from 'pages/Projects';
import Contact from 'pages/Contact';

export function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/about' component={About} />
                <Route path='/projects' component={Projects} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </Router>
    )
}
 
