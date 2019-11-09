import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import ProductList from "./ProductList/ProductList";

const router = (
    <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link class="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/product/list">Product list only</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <Route exact path="/" component={Main}/>
        <div class="container">
            <Route path="/product/list" component={ProductList}/>
        </div>
    </Router>
);
ReactDOM.render(router, document.getElementById('root')); // set the content from the file in the matching .html file

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
