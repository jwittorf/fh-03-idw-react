import React from 'react';
import './bootstrap.min.css';

function Main() {
    return (
        <div class="container">
            <div class="page-header">
                <h1>Inventory management with ReactJS</h1>
            </div>
            <div class="row">
                <div class="col-md-4 order-2 min-vh-100">
                    <div id="sidebar" class="sticky-top flex-grow-1">
                        <h2>Available products</h2>
                        <div class="list-group product-list">
                            <div class="list-group-item product-list-item">
                                <div class="product-list-item-header">
                                    <div class="badge badge-dark">CPU</div>
                                </div>
                                <div class="product-list-item-body mt-1">
                                    <div class="media"><img src="https://placehold.it/250" alt="Placeholder 250x250px"
                                                            class="align-self-start mr-3 img-fluid img-thumbnail w-25"/>
                                        <div class="media-body">
                                            <h3 class="h5 mt-0">Intel Core i7-9700K</h3>
                                            <div class="row">
                                                <div class="col-6">
                                                    <button class="btn btn-secondary btn-sm product-list-item-body-btn-details" type="button">Details</button>
                                                </div>
                                                <div class="col-6">
                                                    <div class="product-list-item-body-price text-right">414,00&nbsp;&euro;
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-list-item-footer mt-2">
                                        <div class="btn-group" role="group" aria-label="Actions to manage a product">
                                            <button class="btn btn-primary" type="button">Edit</button>
                                            <button class="btn btn-success" type="button">Add</button>
                                            <button class="btn btn-danger" type="button">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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