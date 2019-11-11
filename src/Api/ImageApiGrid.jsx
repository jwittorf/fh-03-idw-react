import React from 'react';
import ReactDOM from 'react-dom';

const GoogleImages = require('google-images');
const client = new GoogleImages('011706504980353428457:zgomawhlc9k', 'AIzaSyC-11-nerHKCNJCpFsLTstJtaLDPpci2e0');

export default class ImageApiGrid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let result = null;
        if (this.props.query) {
            // TODO: dont query on change, just on leave
            /*
            client.search(this.props.query).then(images => {
                result = images;
                console.log(images);
            });
             */
        }
        return (
            <div>
            <h3>Test {this.props.query}</h3>
                <pre><code>{result}</code></pre>
            </div>
        )
    }
}