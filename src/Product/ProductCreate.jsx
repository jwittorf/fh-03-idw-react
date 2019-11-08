import React from 'react';
import ReactDOM from 'react-dom';

class InputText extends React.Component {
    constructor() {
        super();
    }

    render() {
        let label = this.props.label,
            id = this.props.id;
        return (
            <div>
                <p class="form-group">
                    <label for={id}>{label}</label>
                    <input type="text" class="form-control" id={id}/>
                </p>
            </div>
        );
    }

}

export default class ProductCreate extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <form>
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
                </form>
            </div>
        );
    }
}