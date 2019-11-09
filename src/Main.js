import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Inventory from "./Inventory";
import ProductList from "./ProductList/ProductList";
import ProductCreate from "./Product/ProductCreate";

function Main() {
    return (
        <div class="container">
            <Inventory/>
            <div class="row">
                <div class="col-md-4 order-2 min-vh-100">
                    <div id="sidebar" class="sticky-top flex-grow-1">
                        <ProductList/>
                    </div>
                </div>

                <div class="col-md-8">
                    <h2>Create product</h2>
                    <ProductCreate/>
                </div>
            </div>
        </div>
    );
}

export default Main;