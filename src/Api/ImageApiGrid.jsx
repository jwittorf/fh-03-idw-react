import React from 'react';
import ReactDOM from 'react-dom';

const GoogleImages = require('google-images');
const client = new GoogleImages('011706504980353428457:zgomawhlc9k', 'AIzaSyC-11-nerHKCNJCpFsLTstJtaLDPpci2e0');

export default class ImageApiGrid extends React.Component {
    constructor() {
        super();
    }

    render() {
        client.search("Intel").then(images => {
            console.log(images);
        });
        return (
            <h3>Test</h3>
        )
    }
}