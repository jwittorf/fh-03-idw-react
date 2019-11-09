import React from "react";
import ReactDOM from 'react-dom';

export default class InputText extends React.Component {
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