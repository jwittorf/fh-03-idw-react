import React from 'react';
import ProductSearch from "./ProductSearch";
import ProductListItem from "../ProductListItem/ProductListItem";
import ProductList from "../ProductList/ProductList";
import {productDB} from "../ProductList/ProductListDB";

class InputText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let label = this.props.label,
            id = this.props.id,
            value = this.props.value,
            onChange = this.props.onChange;
        return (
            <div>
                <p class="form-group">
                    <label for={id}>{label}</label>
                    <input type="text" class="form-control" id={id} value={value} onChange={onChange} />
                </p>
            </div>
        );
    }

}


export default class ProductCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemSearch: 'Some other CPU',
            results: {},
            selectedItems: {},
            cProduct: new Product,
        };
    }

    render() {
        let methods = {
            "onClick": function() {
                this.setState({selected: !this.state.selected});
                this.props.callbackState(this.props.data);
            },
            "callbackState": (pair, selected) => {
                let index = pair["key"];
                let item = pair["value"];
                let object = {index: item};
                let selectedItems = Object.assign({}, this.state.selectedItems);
                if (!selected) {
                    console.log("item is not in array");
                    selectedItems[index] = item;
                } else {
                    console.log("item was in array");
                    delete selectedItems[index];
                }
                console.log(selectedItems);
                this.state.cProduct.contains = selectedItems;
                this.setState({
                    selectedItems: selectedItems
                });
            }
        };
        let names =  [];
        Object.keys(this.state.selectedItems).forEach( (item) => {
                console.log(item);
                names.push(item.name);
        });


        return (
            <div>
                <form onSubmit={this.handleSubmit} handleChange={this.handleChange} post={this.state.post} handleSubmit={this.handleSubmit}>
                    <p>Type: <select name="type">
                        <option>Simple</option>
                        <option>Bundle</option>
                    </select></p>
                    <p>Category: <select name="category">
                        <option>CPU</option>
                    </select></p>
                    <InputText label="Name" id="formName" onChange={this.handleName} value={this.state.cProduct.name}/>
                    <p>Image:</p>
                    <div class="input-group mb-3">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile02" onChange={this.handleImgUrl} value={this.state.cProduct.img_url}/>
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
                        <textarea class="form-control" rows="5" id="description" onChange={this.handleDescription} value={this.state.cProduct.description}/>
                    </div>
                    <InputText label="Price" id="formName" onChange={this.handlePrice} value={this.state.cProduct.price}/>
                    <InputText label="SKU" id="formName" onChange={this.handleSKU} value={this.state.cProduct.SKU}/>
                    <InputText type="text" label="Items" onChange={this.handleChange} value={this.state.itemSearch} id="formName" />
                    <input id="show-selected-item-names" value={
                        names.map((index) => {
                            return(
                                index
                            )
                        })
                    }></input>
                    <ProductList class="minimal-list" displayStyle="minimal" products={this.state.selectedItems} methods={methods}/>
                    <ProductSearch search={this.state.itemSearch} onChange={this.handleChange} methods={methods} />
                </form>
            </div>
        );
    }

    createProduct(){
        let product ={
            name: this.state.cProduct.name,
            img_src: this.state.cProduct.img_src,
            img_alt: this.state.cProduct.img_alt,
            price: this.state.cProduct.price,
            category: this.state.cProduct.category,
            SKU: this.state.cProduct.SKU,
            description: this.state.cProduct.description,
        };
        productDB[Object.keys(productDB).length+1] = product;
    }

    componentDidMount() {
    }

    handleChange = (event) => {
        this.setState({itemSearch: event.target.value});
    }

    handleSubmit = (event) => {
        let newProduct = Object.assign({}, this.state.cProduct);
        newProduct.contains = this.state.selectedItems;
        this.setState({cProduct: newProduct});
        alert(this.state.value);
        event.preventDefault();
    }

    handleName = (event) => {
        let newProduct = Object.assign({}, this.state.cProduct);
        newProduct.name = event.target.value;
        this.setState({cProduct: newProduct});
    }
    handlePrice = (event) => {
        let newProduct = Object.assign({}, this.state.cProduct);
        newProduct.price = event.target.value;
        this.setState({cProduct: newProduct});
    }
    handleImgUrl = (event) => {
        let newProduct = Object.assign({}, this.state.cProduct);
        newProduct.img_url = event.target.value;
        newProduct.img_alt = 'Placeholder 500x500px';
        this.setState({cProduct: newProduct});
    }
    handleCategory = (event) => {
        let newProduct = Object.assign({}, this.state.cProduct);
        newProduct.category = event.target.value;
        this.setState({cProduct: newProduct});
    }
    handleSKU = (event) => {
        let newProduct = Object.assign({}, this.state.cProduct);
        newProduct.SKU = event.target.value;
        this.setState({cProduct: newProduct});
    }
    handleDescription = (event) => {
        let newProduct = Object.assign({}, this.state.cProduct);
        newProduct.description = event.target.value;
        this.setState({cProduct: newProduct});
    }
    handleContains = (event) => {
        let newProduct = Object.assign({}, this.state.cProduct);
        newProduct.contains = event.target.value;
        this.setState({cProduct: newProduct});
    }

}

class Product{
    name;
    img_src;
    img_alt;
    price;
    category;
    SKU;
    contains;
}