import React from 'react';
import ReactDOM from 'react-dom'

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let category = this.props.category;
        return (
            <div>
                <p>About</p>
            </div>
        );
    }
}