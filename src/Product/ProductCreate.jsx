import React from 'react';
import ReactDOM from 'react-dom';

class InputText extends React.Component {
    constructor() {
        super();
    }

    render() {
        let label = this.props.label,
            id = this.props.id,
            name = this.props.name,
            onChangeHandler = this.props.onChangeHandler;
        return (
            <p class="form-group">
                <label for={id}>{label}</label>
                <input type="text" class="form-control" id={id} name={name} onChange={onChangeHandler}/>
            </p>
        );
    }
}

class InputTextarea extends React.Component {
    constructor() {
        super();
    }

    render() {
        let label = this.props.label,
            id = this.props.id,
            name = this.props.name,
            rows = this.props.rows,
            onChangeHandler = this.props.onChangeHandler;
        return (
            <p class="form-group">
                <label for={id}>{label}</label>
                <textarea class="form-control" id={id} name={name} rows={rows} onChange={onChangeHandler}/>
            </p>
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
            selected = this.props.selected,
            onChangeHandler = this.props.onChangeHandler,
            optionsHtml = [];

        for (const index in options) {
            let value = options[index];
            optionsHtml.push(<option value={index}>{value}</option>)
        }

        return (
            <p class="form-group">
                <label for={id}>{label}</label>
                <select name={name} class="form-control" id={id} onChange={onChangeHandler}>
                    <option selected>{selected}</option>
                    {optionsHtml}
                </select>
            </p>
        );
    }
}

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
                <InputTextarea label="Description" id="formDescription" name="description" rows="5"
                               onChangeHandler={this.formInputChangeHandler}/>
                <InputText label="Price" id="formPrice" name="price" onChangeHandler={this.formInputChangeHandler}/>
                <InputText label="SKU" id="formSku" name="sku" onChangeHandler={this.formInputChangeHandler}/>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        );
    }
}