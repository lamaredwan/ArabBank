import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './App';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
//import * as serviceWorker from './serviceWorker';
const routing = (
  <Router>
    <div>
    <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/app">Main page</NavLink>
            </li>
        </ul>
      
      <Switch>
         <Route exact path="/" Component={Home} />
         <Route exact path="/about" Component={About} />
         <Route exact path="/contact" Component={Contact} />
         <Route exact path="/app" Component={Main} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))