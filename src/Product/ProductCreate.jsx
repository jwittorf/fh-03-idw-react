import React from 'react';
import ReactDOM from 'react-dom';
import InputText from "../Form/InputText";
import InputTextarea from "../Form/InputTextarea";
import Select from "../Form/Select";


export default class ProductCreate extends React.Component {
    constructor() {
        super();
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    formInputChangeHandler = (event) => {
        let name = event.target.name,
            val = event.target.value;
        this.setState({[name]: val});
    };

    render() {
        let formConfig = {
            formType: {
                label: 'Type',
                id: 'formType',
                name: 'type',
                selected: 'Please select a type.',
                options: {
                    simple: 'Simple',
                    bundle: 'Bundle'
                }
            },
            formCategory: {
                label: 'Category',
                id: 'formCategory',
                name: 'category',
                selected: 'Please select a category.',
                options: {
                    cpu: 'CPU',
                    gfx: 'Graphiccard',
                    motherboard: 'Motherboard'
                }
            },
        };
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
                        <input type="file" class="custom-file-input" id="formImage"/>
                        <label class="custom-file-label" for="formImage">Choose file from your computer</label>
                    </div>
                    <div class="input-group-append">
                        <span class="input-group-text" id="formImageAddonUrl">Import from URL</span>
                    </div>
                    <div class="input-group-append">
                        <span class="input-group-text" id="formImageAddonApi">Get images from API</span>
                    </div>
                </div>
                <InputTextarea label="Description" id="formDescription" name="description" rows="5"
                               onChangeHandler={this.formInputChangeHandler}/>
                <InputText label="Price" id="formPrice" name="price" onChangeHandler={this.formInputChangeHandler}/>
                <InputText label="SKU" id="formSku" name="sku" onChangeHandler={this.formInputChangeHandler}/>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        );
    }
}