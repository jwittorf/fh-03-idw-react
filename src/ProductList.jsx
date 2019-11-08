import React from 'react';
import ReactDOM from 'react-dom';
import ProductListItem from "./ProductListItem";

export default class ProductList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h2>Available products</h2>
                <div class="list-group product-list">
                    <ProductListItem/>
                </div>
            </div>
        );
    }
}