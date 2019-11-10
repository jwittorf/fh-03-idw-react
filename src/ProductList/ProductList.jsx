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

    changeProduct = () => {
        alert("Button clicked");
        this.setState({
            products: {
                0: {
                    name: 'Intel Core i7dasdas-9700K',
                    img_src: 'https://placehold.it/250',
                    img_alt: 'Placeholder 250x250px',
                    price: 414,
                    category: 'CPU',
                },
                1: {
                    name: 'Some othesADASDASr CPU',
                    img_src: 'https://placehold.it/500',
                    img_alt: 'Placeholder 500x500px',
                    price: 500.99,
                    category: 'GFX',
                }
            }
        });
    };

    changeName = (event) => {
        this.setState({
            products: {
                0: {
                    name: event.target.value,
                    img_src: 'https://placehold.it/250',
                    img_alt: 'Placeholder 250x250px',
                    price: 414,
                    category: 'CPU',
                },
                1: {
                    name: 'Some other CPU',
                    img_src: 'https://placehold.it/500',
                    img_alt: 'Placeholder 500x500px',
                    price: 500.99,
                    category: 'GFX',
                }
            }
        });
    };

    render() {
        let products = this.state.products;
        if (this.props.products != null){ // if exists
            products = this.props.products;
        }
        let productsHtml = [];
        for (const index in products) {
            let product = products[index];
            productsHtml.push(<ProductListItem data={product} methods={this.props.methods} />);
        }
        return (
            <div>
                <h2>Available products</h2>
                <div class="list-group product-list">
                    <input type="text" onChange={this.changeName} />
                    <button type="button" onClick={this.changeProduct}>Change product</button>
                    {productsHtml}
                </div>
            </div>
        );
    }
}