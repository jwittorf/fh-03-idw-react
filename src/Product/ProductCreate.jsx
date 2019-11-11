import React from 'react';
import ReactDOM from 'react-dom';
import InputText from "../Form/InputText";
import InputTextarea from "../Form/InputTextarea";
import Select from "../Form/Select";
import ProductList from "../ProductList/ProductList";
import $ from "jquery";
import "popper.js";
import "bootstrap";

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
                    console.log(result);
                    $(replace).attr({
                        src: result[index].url,
                        alt: query,
                    });
                });

                let $id = $("#" + this.props.id);
                $id.next().removeAttr("disabled");
                $id.next().on("click", function () {
                    console.log(index);
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
                    console.log(index);
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

export default class ProductCreate extends React.Component {
    constructor(props) {
        super(props);
        this.reference = React.createRef();
        this.state = {
            // for conditional information about bundle and configuration
            type: null,
            category: null
        };
    }

    submitHandler = (event) => {
        event.preventDefault();
        if (!this.reference.current.files[0]) {
            // TODO: test this
            // no image uploaded
        }
    };

    formInputChangeHandler = (event) => {
        let name = event.target.name,
            val = event.target.value;
        this.setState({[name]: val});
        if (name === 'type' && val === 'bundle') {
            // alert("BUNDLE");
        }
    };

    render() {
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
        let additionalInformation = (this.state.type === 'bundle') ? <ProductList/> : (this.state.type === 'simple') ? categoriesHtml : null;
        return (
            <form onSubmit={this.submitHandler}>
                <Select label={formConfig.formType.label} id={formConfig.formType.id} name={formConfig.formType.name}
                        options={formConfig.formType.options} selected={formConfig.formType.selected}
                        onChangeHandler={this.formInputChangeHandler}/>
                <Select label={formConfig.formCategory.label} id={formConfig.formCategory.id} name={formConfig.formCategory.name}
                        options={formConfig.formCategory.options} selected={formConfig.formCategory.selected}
                        onChangeHandler={this.formInputChangeHandler}/>
                <InputText label="Name" id="formName" name="name" onBlurHandler={this.formInputChangeHandler}/>
                <div class="media">
                    <img id="formImagePreview" src="https://www.motorolasolutions.com/content/dam/msi/images/products/accessories/image_not_available_lg.jpg"
                         class="align-self-start mr-3 img-fluid img-thumbnail w-25" alt="Placeholder"/>
                    <div class="media-body">
                        <div class="form-group">
                            <label for="formImageAddonLabel">Image:</label>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="formImage" ref={this.reference}/>
                                <label class="custom-file-label" for="formImage">Choose file from your computer</label>
                            </div>
                        </div>
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
                               onChangeHandler={this.formInputChangeHandler}/>
                <InputText label="Price" id="formPrice" name="price" onChangeHandler={this.formInputChangeHandler}/>
                <InputText label="SKU" id="formSku" name="sku" onChangeHandler={this.formInputChangeHandler}/>
                {additionalInformation}
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        );
    }
}