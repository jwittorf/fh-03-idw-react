import React from 'react';
import ReactDOM from 'react-dom'

class ProductListItemCategory extends React.Component {
    constructor() {
        super();
    }

    render() {
        let result = () => {return 'CPU'}; // anonymous function
        return (
            <div>
                <div class="product-list-item-header">
                    <div class="badge badge-dark">{result()}</div>
                </div>
            </div>
        );
    }
}

class ProductListItemImage extends React.Component {
    constructor() {
        super();
    }

    render() {
        let data = this.props.data;
        return <img src={data.img_src} alt={data.img_alt} class="align-self-start mr-3 img-fluid img-thumbnail w-25"/>;
    }
}

export default class ProductListItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        let data = this.props.data;
        return (
            <div>
                <div class="list-group-item product-list-item">
                    <ProductListItemCategory/>
                    <div class="product-list-item-body mt-1">
                        <div class="media">
                            <ProductListItemImage data={data}/>
                            <div class="media-body">
                                <h3 class="h5 mt-0">{data.name}</h3>
                                <div class="row">
                                    <div class="col-6">
                                        <button class="btn btn-secondary btn-sm product-list-item-body-btn-details" type="button">Details</button>
                                    </div>
                                    <div class="col-6">
                                        <div class="product-list-item-body-price text-right">414,00&nbsp;&euro;
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product-list-item-footer mt-2">
                            <div class="btn-group" role="group" aria-label="Actions to manage a product">
                                <button class="btn btn-primary" type="button">Edit</button>
                                <button class="btn btn-success" type="button">Add</button>
                                <button class="btn btn-danger" type="button">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}