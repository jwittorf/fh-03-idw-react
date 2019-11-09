import React from 'react';
import ReactDOM from 'react-dom';
import InputText from "../Form/InputText";
import InputTextarea from "../Form/InputTextarea";
import Select from "../Form/Select";


export default class ProductCreate extends React.Component {
    constructor() {
        super();
        this.state = {
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
            formData: []
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state.formData);
        // alert("Form submitted");

    };

    formInputChangeHandler = (event) => {
        let name = event.target.name,
            val = event.target.value;
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.formData[name] = val;
        // this.setState({formData: {[name]: val}}, function () {
        //     console.log(this.state);
        //     console.log(this.state.formData);
        // });
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <Select label={this.state.formType.label} id={this.state.formType.id} name={this.state.formType.name}
                        options={this.state.formType.options} selected={this.state.formType.selected}
                        onChangeHandler={this.formInputChangeHandler}/>
                <Select label={this.state.formCategory.label} id={this.state.formCategory.id} name={this.state.formCategory.name}
                        options={this.state.formCategory.options} selected={this.state.formCategory.selected}
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