import React from 'react';
import ReactDOM from 'react-dom';
import ImageApiGrid from "../Api/ImageApiGrid";

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: this.props.body,
        };
    }

    render() {
        let id = this.props.id,
            title = this.props.title;
        return (
            <div id={id} class="modal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="h5 modal-title">{title}</h2>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="modal-body">
                            <ImageApiGrid query={this.props.query}/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}