import React from 'react';
import './bootstrap.min.css';
import Inventory from "./Inventory";
import ProductList from "./ProductList";

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
                    <form>

                        <p>Type: <select name="type">
                            <option>Simple</option>
                            <option>Bundle</option>
                        </select></p>
                        <p>Category: <select name="category">
                            <option>CPU</option>
                        </select></p>
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" class="form-control" id="name"/>
                        </div>
                        <p>Image:</p>
                        <div class="input-group mb-3">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="inputGroupFile02"/>
                                    <label class="custom-file-label" for="inputGroupFile02">Choose file</label>
                            </div>
                            <div class="input-group-append">
                                <span class="input-group-text" id="">Upload</span>
                            </div>
                            <div class="input-group-append">
                                <span class="input-group-text" id="">API</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="description">Description:</label>
                            <textarea class="form-control" rows="5" id="description"/>
                        </div>
                        <p>Price: <input type="number"/></p>
                        <p>SKU: <input type="text"/> </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Main;