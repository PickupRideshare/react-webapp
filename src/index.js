import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'


const Header = () => (
  <header>
  <nav
            class="navbar navbar-fixed-top
            navbar-default"
            role="navigation"
            >
            
            <div class="container">


            <div class="navbar-header">
            <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar_collapse">
            </button>
            </div>


            <div
            class="collapse navbar-collapse"
            id="navbar_collapse">
            <ul class="nav navbar-nav navbar-right">
            
            
            
            <li>
            <Link to='/login.js'>Log In</Link>
            </li>
            
            
        
            <li>
            <a >
            Contact Us
            </a>
            </li>
            
            
            <li>
            <Link to='/'>Sign Up</Link>
            </li>
            
            </ul>
            </div>
            </div>
            </nav>
  </header>
)

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'));


registerServiceWorker();
