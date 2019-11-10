import React from 'react';
import ProductSearch from "./ProductSearch";
import ProductListItem from "../ProductListItem/ProductListItem";
import ProductList from "../ProductList/ProductList";

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
            results: {},
            selectedItems: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        let methods = {
            "onClick": function() {
                this.setState({selected: !this.state.selected});
                this.props.callbackState(this.props.data);
            },
            "callbackState": (item) => {
                console.log(this.state.selectedItems.indexOf(item));
                let selectedItems = [...this.state.selectedItems];
                if ( selectedItems.indexOf(item) == -1) {
                    console.log("item is not in array");
                    selectedItems.push(item);

                } else {
                    console.log("item was in array");
                    selectedItems.splice(selectedItems.indexOf(item), 1);
                }
                console.log(selectedItems);
                this.setState({
                    selectedItems: selectedItems
                });
            }
        };
        let names =  [];
        for (let index in this.state.selectedItems){
            console.log(this.state.selectedItems[index]);
            names.push(this.state.selectedItems[index].name);
        }
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
                    <input id="show-selected-item-names" value={
                        names.map((index) => {
                            return(
                                index
                            )
                        })
                    }></input>
                    <ProductList displayStyle="minimal" products={this.state.selectedItems} methods={methods}/>
                    <ProductSearch search={this.state.itemSearch} onChange={this.handleChange} methods={methods}/>
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