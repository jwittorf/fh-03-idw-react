import React from 'react';
import ReactDOM from 'react-dom';
import InputText from "../Form/InputText";
import InputTextarea from "../Form/InputTextarea";
import Select from "../Form/Select";
import ProductList from "../ProductList/ProductList";


export default class ProductCreate extends React.Component {
    constructor() {
        super();
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
            let additionalAttributesHtml = [];
            let category = formConfig.formCategory.options[index];
            additionalAttributesHtml.push(<h2>{category.label}</h2>);
            for (const kndex in category.attributes) {
                let additionalAttribute = category.attributes[kndex];
                let id = index + "-" + kndex;
                id.toLowerCase();
                additionalAttributesHtml.push(<InputText label={additionalAttribute} id={id}/>);
                console.log(additionalAttribute);
            }
            categoriesHtml.push(additionalAttributesHtml);
        }
        let additionalInformation = (this.state.type === 'bundle') ? <ProductList/> : categoriesHtml;
        return (
            <form onSubmit={this.submitHandler}>
                <Select label={formConfig.formType.label} id={formConfig.formType.id} name={formConfig.formType.name}
                        options={formConfig.formType.options} selected={formConfig.formType.selected}
                        onChangeHandler={this.formInputChangeHandler}/>
                <Select label={formConfig.formCategory.label} id={formConfig.formCategory.id} name={formConfig.formCategory.name}
                        options={formConfig.formCategory.options} selected={formConfig.formCategory.selected}
                        onChangeHandler={this.formInputChangeHandler}/>
                <InputText label="Name" id="formName" name="name" onChangeHandler={this.formInputChangeHandler}/>
                <label for="formImageAddonLabel">Image:</label>
                <div class="input-group mb-3">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="formImage" ref={this.reference}/>
                        <label class="custom-file-label" for="formImage">Choose file from your computer</label>
                    </div>
                    <div class="input-group-append">
                        <span class="input-group-text" id="formImageAddonApi">Get images from API</span>
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