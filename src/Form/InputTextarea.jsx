import React from "react";
import ReactDOM from 'react-dom';

export default class InputTextarea extends React.Component {
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