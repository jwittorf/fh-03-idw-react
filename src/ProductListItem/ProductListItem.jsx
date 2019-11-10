import React from 'react';
import ReactDOM from 'react-dom';

export default class ProductListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };
    }

    render() {
        let data = this.state.data;
        let price = data.price.toFixed(2);
        price = price.replace(".", ",");
        if(!data.img_src) {
            data.img_src = 'https://www.motorolasolutions.com/content/dam/msi/images/products/accessories/image_not_available_lg.jpg';
            data.img_alt = "No image available";
        }
        return (
            <div class="list-group-item product-list-item">
                <div class="product-list-item-header">
                    <div class="badge badge-dark">{data.category}</div>
                </div>
                <div class="product-list-item-body mt-1">
                    <div class="media">
                        <img src={data.img_src} alt={data.img_alt} class="align-self-start mr-3 img-fluid img-thumbnail w-25"/>
                        <div class="media-body">
                            <h3 class="h5 mt-0">{data.name}</h3>
                            <p><small>SKU: {data.sku}</small></p>
                            <div class="row">
                                <div class="col-6">
                                    <button class="btn btn-secondary btn-sm product-list-item-body-btn-details" type="button">Details</button>
                                </div>
                                <div class="col-6">
                                    <div class="product-list-item-body-price text-right">{price}&nbsp;&euro;
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
        );
    }
}