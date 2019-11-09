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

class Select extends React.Component {
    constructor() {
        super();
    }

    render() {
        let label = this.props.label,
            id = this.props.id,
            name = this.props.name,
            options = this.props.options,
            optionsHtml = [];

        console.log(options);
        for (const index in options) {
            let value = options[index];
            console.log(index);
            console.log(value);
            optionsHtml.push(<option value={index}>{value}</option>)
        }
        return (
            <div>
                <p class="form-group">
                    <label for={id}>{label}</label>
                    <select name={name} class="form-control" id={id}>
                        {optionsHtml}
                    </select>
                </p>
            </div>
        );
    }
}

export default class ProductCreate extends React.Component {
    constructor() {
        super();
        this.state = {
            formType: {
                options: {
                    simple: 'Simple',
                    bundle: 'Bundle'
                }
            }
        }
    }

    submitHandler = (event) => {
        alert("Form submitted");
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <Select label="Type" id="formType" name="type" options={this.state.formType.options}/>
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
                    <InputText label="Price" id="formPrice"/>
                    <InputText label="SKU" id="formSku"/>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}