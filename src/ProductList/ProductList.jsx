import React from 'react';
import ReactDOM from 'react-dom';
import ProductListItem from "../ProductListItem/ProductListItem";
import {productDB} from "./ProductListDB";

export default class ProductList extends React.Component {
    constructor() {
        super();
        this.state = {
            products: productDB
        }
    }

    render() {
        let products = this.state.products;
        if (this.props.products != null) { // if exists
            products = this.props.products;
        }

        let productsHtml = [];
        for (const index in products) {
            let product = products[index];
            productsHtml.push(<ProductListItem dataIndex={index} data={product} methods={this.props.methods}
                                               displayStyle={this.props.displayStyle}/>);
        }
        return (
            <div>
                <h2>Available products</h2>
                {productsHtml.length > 0 ? (<div class="list-group product-list">
                    {productsHtml}
                </div>) : (this.props.displayStyle === 'minimal') ? (<p class="alert alert-warning">No products selected!</p>) : (<p class="alert alert-danger">No products available!</p>)
                }
            </div>
        );
    }
}