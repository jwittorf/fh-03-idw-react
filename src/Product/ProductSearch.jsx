import React from "react";
import {productDB} from "../ProductList/ProductListDB";
import {searchDB} from "../ProductList/ProductListDB";
import ProductList from "../ProductList/ProductList";

export default class ProductSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: productDB
        }
    }

    render() {
        let products = this.state.products;
        let search = this.props.search;
        let results = {};
        //this logic needs to go to the DB
        results = searchDB(search);
        return (
            <div>
                <h3>List of products matching '{search}'</h3>
                <ProductList products={results} methods={this.props.methods}/>
            </div>
        );
    }
}