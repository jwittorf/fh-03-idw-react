import React from "react";
import ReactDOM from 'react-dom';

export default class Select extends React.Component {
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
            // console.log(options[index]);
            let value = options[index]['label'];
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