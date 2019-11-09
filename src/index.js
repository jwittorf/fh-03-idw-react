import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";

const router = (
    <div>
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <Route exact path={"/"} component={Main} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </div>
        </Router>
    </div>
)
ReactDOM.render(router, document.getElementById('root')); // set the content from the file in the matching .html file

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
