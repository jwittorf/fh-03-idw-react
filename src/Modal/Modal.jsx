import React from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends React.Component {
    constructor() {
        super();
    }

    render() {
        let id = this.props.id,
            title = this.props.title,
            body = this.props.body;
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
                            {body}
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