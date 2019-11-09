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
        let results = {}
        //this logic needs to go to the DB
        results = searchDB(search);
        for (let key of Object.keys(products)) {
            let item = products[key];
            if (item.name.toUpperCase().includes(search.toUpperCase())) {
                //results.push({key: item});
                results[key] = item;
            }
        }
        return (
            <div>
                <h1>list of products matching '{search}'</h1>
                <ProductList products={results}/>
            </div>
        );
    }
}