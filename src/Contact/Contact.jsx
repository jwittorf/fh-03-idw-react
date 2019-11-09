import React from 'react';
import ReactDOM from 'react-dom'

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let category = this.props.category;
        return (
            <div>
                <p>Contact</p>
            </div>
        );
    }
}