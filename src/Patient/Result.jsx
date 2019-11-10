import React from 'react';

export default class Result extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: {},
        }
    }

    render(){
        let boxId = this.props.id+"-textwrapper";
        let data = this.props.data;
        return (
            <div>
                <div id={boxId}>
                    <h1>person</h1>
                    <p>Title: {data.name.title}</p>
                    <p>Name: {data.name.first} {data.name.last}</p>
                    <p>E-Mail: {data.email}</p>
                    <p>Phone: {data.phone}</p>
                    <p>Mobile: {data.cell}</p>
                </div>
                <button onClick={this.copyJSON}>JSON me!</button>
            </div>
        );
    }

    copyJSON = () => {
        let str = JSON.stringify(this.props.data);
        let cpy = document.createElement('textarea');
        cpy.value = str;
        cpy.setAttribute('readonly', '');
        cpy.style = {position: 'absolute', left: '-9999px'};
        document.body.appendChild(cpy);
        cpy.select();
        cpy.setSelectionRange(0, 99999); /*For mobile devices*/
        document.execCommand('copy');
        document.body.removeChild(cpy);
    }
}