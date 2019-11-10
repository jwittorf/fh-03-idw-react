import React from 'react';
import ReactDOM from 'react-dom';
import ProductListItem from "../ProductListItem/ProductListItem";

export default class ProductList extends React.Component {
    constructor() {
        super();
        this.state = {
            products: {
                0: {
                    name: 'Intel Core i7-9700K',
                    img_src: 'https://placehold.it/250',
                    img_alt: 'Placeholder 250x250px',
                    price: 414,
                    category: 'CPU',
                    sku: 12345,
                },
                1: {
                    name: 'Some other CPU',
                    // img_src: 'https://placehold.it/500',
                    // img_alt: 'Placeholder 500x500px',
                    price: 500.99,
                    category: 'GFX',
                    sku: 6789,
                },
                2: {
                    name: 'Some other CfahaflasdsaPU',
                    img_src: 'https://placehold.it/500',
                    img_alt: 'Placeholder 500x500px',
                    price: 500.99,
                    category: 'GFX',
                    sku: 1337,
                }
            }
        }
    }

    render() {
        let productsHtml = [];
        for (const index in this.state.products) {
            let product = this.state.products[index];
            productsHtml.push(<ProductListItem data={product}/>);
        }
        return (
            <div>
                <h2>Available products</h2>
                {productsHtml.length > 0 ? (<div class="list-group product-list">
                    {productsHtml}
                </div>) : (<p class="alert alert-danger">No products available!</p>)
                }
            </div>
        );
    }
}