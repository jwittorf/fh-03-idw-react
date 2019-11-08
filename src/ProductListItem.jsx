import React from 'react';
import ReactDOM from 'react-dom'

export default class ProductListItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
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
        );
    }
}