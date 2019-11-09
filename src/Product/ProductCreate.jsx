import React from 'react';
import ProductSearch from "./ProductSearch";

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
                    <input type="text" class="form-control" id={id} value={value} onChange={onChange}/>
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
            results: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
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
                    <InputText label="Name" id="formName"/>
                    <p>Image:</p>
                    <div class="input-group mb-3">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile02"/>
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
                        <textarea class="form-control" rows="5" id="description"/>
                    </div>
                    <InputText label="Price" id="formName"/>
                    <InputText label="SKU" id="formName"/>
                    <InputText type="text" label="Items" onChange={this.handleChange} value={this.state.itemSearch} id="formName"/>
                    <ProductSearch search={this.state.itemSearch}/>
                </form>
            </div>
        );
    }

    handleChange(event) {
        this.setState({itemSearch: event.target.value});
    }

    handleSubmit(event) {
        alert(this.state.value);
        event.preventDefault();
    }
}