import React from 'react';
import ReactDOM from 'react-dom';
import InputText from "../Form/InputText";
import InputTextarea from "../Form/InputTextarea";
import Select from "../Form/Select";
import ProductList from "../ProductList/ProductList";
import $ from "jquery";
import "popper.js";
import "bootstrap";
import ProductSearch from "./ProductSearch";
import ProductListItem from "../ProductListItem/ProductListItem";
import {addDB, productDB} from "../ProductList/ProductListDB";

const GoogleImages = require('google-images');
const client = new GoogleImages('011706504980353428457:zgomawhlc9k', 'AIzaSyC-11-nerHKCNJCpFsLTstJtaLDPpci2e0');

class ButtonImageApi extends React.Component {
    constructor(props){
        super(props);
    }

    updateformImagePreview = (replace, query) => {
        let result = null, index = 0;
        if (query) {
            if (replace) {
                client.search(query).then(images => {
                    result = images;
                    $(replace).attr({
                        src: result[index].url,
                        alt: query,
                    });
                });

                let $id = $("#" + this.props.id);
                $id.next().removeAttr("disabled");
                $id.next().on("click", function () {
                    if (index < 9) {
                        $(replace).attr({
                            src: result[++index].url
                        });
                        $id.prev().removeAttr("disabled");
                    } else {
                        alert("Sorry, you can't get more images from Google!");
                    }
                });
                $id.prev().on("click", function () {
                    if (index > 0) {
                        $(replace).attr({
                            src: result[--index].url
                        });
                    } else {
                        alert("You're back at the first image, can't go back!");
                    }
                })
            } else {
                alert("Developer, please provide an id to replace the image!");
            }
        } else {
            alert("Please provide a product name!");
        }
    };

    render() {
        let className = this.props.class,
            id = this.props.id,
            query = this.props.query,
            replace = this.props.replace;
        return (
            <button type="button" class={className} id={id} onClick={() => this.updateformImagePreview(replace, query)}>
                Get images from API
            </button>
        );
    }
}

class Product{
    name = "test";
    img_src = "https://placehold.it/500";
    img_alt = 'Placeholder 500x500px';
    price = 200;
    category = "CPU";
    sku = 234232;
    contains;
}

export default class ProductCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemSearch: '',
            results: {},
            selectedItems: {},
            cProduct: new Product(),
            // for conditional information about bundle and configuration
            type: null,
            category: null
        };
    }

    createProduct(){
        let product ={
            name: this.state.cProduct.name,
            img_src: this.state.cProduct.img_src,
            img_alt: this.state.cProduct.img_alt,
            price: this.state.cProduct.price,
            category: this.state.cProduct.category,
            sku: this.state.cProduct.sku,
            description: this.state.cProduct.description,
        };
        productDB[Object.keys(productDB).length+1] = product;
    }

    submitHandler = (event) => {
        event.preventDefault();
    };

    formInputChangeHandler = (event) => {
        let name = event.target.name,
            val = event.target.value;
        this.setState({[name]: val});
        if (name === 'type' && val === 'bundle') {
            // alert("BUNDLE");
        }
    };

    handleChange = (event) => {
        console.log("Change");
        this.setState({itemSearch: event.target.value});
    };

    handleSubmit = (event) => {
        console.log("submitted!");
        console.log(this.state.cProduct);
        addDB(this.state.cProduct);
        this.setState({
            cProduct: new Product()
        });
        event.preventDefault();
    };

    handleName = (event) => {
        let newProduct = Object.assign({}, this.state.cProduct);
        newProduct.name = event.target.value;
        this.setState({cProduct: newProduct});
    };

    handlePrice = (event) => {
        let newProduct = Object.assign({}, this.state.cProduct);
        newProduct.price = event.target.value;
        this.setState({cProduct: newProduct});
    };

    handleImgUrl = (event) => {
        let newProduct = Object.assign({}, this.state.cProduct);
        newProduct.img_url = event.target.value;
        newProduct.img_alt = 'Placeholder 500x500px';
        this.setState({cProduct: newProduct});
    };

    handleCategory = (event) => {
        let newProduct = Object.assign({}, this.state.cProduct);
        newProduct.category = event.target.value;
        this.setState({cProduct: newProduct});
    };

    handleSKU = (event) => {
        let newProduct = Object.assign({}, this.state.cProduct);
        newProduct.sku = event.target.value;
        this.setState({cProduct: newProduct});
    };

    handleDescription = (event) => {
        let newProduct = Object.assign({}, this.state.cProduct);
        newProduct.description = event.target.value;
        this.setState({cProduct: newProduct});
    };

    handleContains = (event) => {
        let newProduct = Object.assign({}, this.state.cProduct);
        newProduct.contains = event.target.value;
        this.setState({cProduct: newProduct});
    };

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

        let formConfig = {
            formType: {
                label: 'Type',
                id: 'formType',
                name: 'type',
                selected: 'Please select a type.',
                options: {
                    simple: {
                        label: 'Simple'
                    },
                    bundle: {
                        label: 'Bundle'
                    },
                }
            },
            formCategory: {
                label: 'Category',
                id: 'formCategory',
                name: 'category',
                selected: 'Please select a category.',
                options: {
                    cpu: {
                        label: 'CPU',
                        attributes: {
                            clockFreq: 'Clock frequency',
                            cores: 'Cores',
                            socket: 'Socket',
                        }
                    },
                    gfx: {
                        label: 'Graphics card',
                        attributes: {
                            chip: 'GFX Chip',
                            storage: 'Storage',
                            slots: 'Used slots'
                        }
                    },
                    motherboard: {
                        label: 'Mainboard',
                        attributes: {
                            factor: 'Form factor',
                            gfx: 'Graphics',
                            socket: 'Socket'
                        }
                    },
                }
            },
        };
        let categoriesHtml = [];
        for (const index in formConfig.formCategory.options) {
            if (index === this.state.category) {
                let additionalAttributesHtml = [];
                let category = formConfig.formCategory.options[index];
                additionalAttributesHtml.push(<h2>{category.label}</h2>);
                for (const kndex in category.attributes) {
                    let additionalAttribute = category.attributes[kndex];
                    let id = index + "-" + kndex;
                    id.toLowerCase();
                    additionalAttributesHtml.push(<InputText label={additionalAttribute} id={id}/>);
                }
                categoriesHtml.push(additionalAttributesHtml);
            }
        }
        let additionalInformation = null;
        if (this.state.type === 'bundle') {
            additionalInformation = (
                <div>
                    <h3>Add simple products to this bundle</h3>
                    <ProductList displayStyle="minimal" products={this.state.selectedItems} methods={methods}/>
                    <InputText type="text" label="Search for product as component" onChange={this.handleChange} value={this.state.itemSearch} id="formName" />
                    <ProductSearch search={this.state.itemSearch} onChange={this.handleChange} methods={methods} />
                </div>
            );
        } else {
            additionalInformation = (this.state.type === 'simple') ? categoriesHtml : null;
        }

        return (
            <form onSubmit={this.handleSubmit} handleChange={this.handleChange} post={this.state.post} handleSubmit={this.handleSubmit}>
                <Select label={formConfig.formType.label} id={formConfig.formType.id} name={formConfig.formType.name}
                        options={formConfig.formType.options} selected={formConfig.formType.selected}
                        onChangeHandler={this.formInputChangeHandler}/>
                <Select label={formConfig.formCategory.label} id={formConfig.formCategory.id} name={formConfig.formCategory.name}
                        options={formConfig.formCategory.options} selected={formConfig.formCategory.selected}
                        onChangeHandler={this.formInputChangeHandler}/>
                <InputText label="Name" id="formName" name="name" onChangeHandler={this.handleName}
                           onBlurHandler={this.formInputChangeHandler} value={this.state.cProduct.name}/>
                <div class="media">
                    <img id="formImagePreview" src="https://www.motorolasolutions.com/content/dam/msi/images/products/accessories/image_not_available_lg.jpg"
                         class="align-self-start mr-3 img-fluid img-thumbnail w-25" alt="Placeholder"/>
                    <div class="media-body">
                        <label for="formImageAddonLabel">Image:</label>
                        <div class="form-group">
                            <div class="btn-group" role="group" aria-label="Handle images from API">
                                <button type="button" class="btn btn-secondary" disabled="disabled">Previous</button>
                                <ButtonImageApi class="btn btn-secondary" id="formImageAddonApi"
                                                replace="#formImagePreview"
                                                query={this.state.name} text="Get image from API"/>
                                <button type="button" class="btn btn-secondary" disabled="disabled">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
                <InputTextarea label="Description" id="formDescription" name="description" rows="5"
                               onChangeHandler={this.handleDescription} value={this.state.cProduct.description}/>
                <InputText label="Price" id="formPrice" name="price" onChangeHandler={this.handlePrice} value={this.state.cProduct.price}/>
                <InputText label="SKU" id="formSku" name="sku" onChangeHandler={this.handleSku} value={this.state.cProduct.sku}/>
                {additionalInformation}
                <hr/>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        );
    }
}