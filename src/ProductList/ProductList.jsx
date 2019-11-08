import React from 'react';
import ReactDOM from 'react-dom';
import ProductListItem from "../ProductListItem/ProductListItem";

export default class ProductList extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {
                img_src: 'https://placehold.it/250',
                img_alt: 'Placeholder 250x250px'
            }
        }
    }

    render() {
        return (
            <div>
                <h2>Available products</h2>
                <div class="list-group product-list">
                    <ProductListItem data={this.state.data}/>
                </div>
            </div>
        );
    }
}