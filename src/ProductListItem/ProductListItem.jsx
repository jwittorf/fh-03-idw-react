import React from 'react';
import ReactDOM from 'react-dom';

class ProductListItemCategory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let category = this.props.category;
        return (this.props.displayStyle === "minimal") ? null : (
                <div class="product-list-item-header">
                    <div class="badge badge-dark">{category}</div>
                </div>
            );
    }
}

class ProductListItemImage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let src = this.props.src,
            alt = this.props.alt;
        return (this.props.displayStyle === "minimal") ? null : (<img src={src} alt={alt} class="align-self-start mr-3 img-fluid img-thumbnail w-25"/>);
    }
}

class ProductListItemDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (this.props.displayStyle === "minimal") ? null : (
            <div className="col-6">
                <button className="btn btn-secondary btn-sm product-list-item-body-btn-details"
                        type="button">Details
                </button>
            </div>
        );
    }
}

class ProductListItemPrice extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.data;
        let price = data.price.toFixed(2);
        price = price.replace(".", ",");

        if (this.props.displayStyle === "minimal") {
            return (
                <div className="col-6">
                    <div className="product-list-item-body-price text-right">
                        {price}&nbsp;&euro;
                    </div>
                </div>
            );
        } else {
            return (
                <div className="col-6">
                    <div className="product-list-item-body-price text-right">
                        {price}&nbsp;&euro;
                    </div>
                </div>
            );
        }
    }
}



class ProductListItemFooter extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (this.props.displayStyle === "minimal") ? null : (
            <div className="product-list-item-footer mt-2">
                <div className="btn-group" role="group" aria-label="Actions to manage a product">
                    <button className="btn btn-primary" type="button">Edit</button>
                    <button className="btn btn-success" type="button">Add</button>
                    <button className="btn btn-danger" type="button">Delete</button>
                </div>
            </div>
        );
    }
}

export default class ProductListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
        };
    }

    toggleSelect = () => {
        if (this.props.methods != null) {
            console.log("toggleSelect");
            console.log(this.props.dataIndex);
            this.props.methods["callbackState"]({"key": this.props.dataIndex, "value" :this.props.data}, this.state.selected);
            this.setState({selected: !this.state.selected});
        }
    };

    render() {
        let data = this.props.data;
        let price = data.price.toFixed(2);
        price = price.replace(".", ",");
        if(!data.img_src) {
            data.img_src = 'https://www.motorolasolutions.com/content/dam/msi/images/products/accessories/image_not_available_lg.jpg';
            data.img_alt = "No image available";
        }
        let classConfig = 'list-group-item product-list-item';
        classConfig += (this.state.selected) ? ' active' : ' inactive';
        let displayMode = (this.props.displayStyle);
        return (
            <div class={classConfig} onClick={this.toggleSelect}>
                {/*<div class="product-list-item-header">
                    <div class="badge badge-dark">{data.category}</div>
                </div>*/}
                <ProductListItemCategory category={data.category} displayStyle={this.props.displayStyle} data={this.props.data}/>
                <div class="product-list-item-body mt-1">
                    <div class="media">
                        {/*<img src={data.img_src} alt={data.img_alt} class="align-self-start mr-3 img-fluid img-thumbnail w-25"/>*/}
                        <ProductListItemImage src={data.img_src} alt={data.img_alt} displayStyle={this.props.displayStyle} data={this.props.data} />
                        <div class="media-body">
                            <h3 class="h5 mt-0">{data.name}</h3>
                            <p><small>SKU: {data.sku}</small></p>
                            <div class="row">
                                <ProductListItemDetails displayStyle={this.props.displayStyle} data={this.props.data} />
                                {/*<div class="col-6">
                                    <button class="btn btn-secondary btn-sm product-list-item-body-btn-details" type="button">Details</button>
                                </div>*/}
                                <div class="col-6">
                                    <div class="product-list-item-body-price text-right">{price}&nbsp;&euro;
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProductListItemFooter displayStyle={this.props.displayStyle} data={this.props.data} />
                    {/*<div class="product-list-item-footer mt-2">
                        <div class="btn-group" role="group" aria-label="Actions to manage a product">
                            <button class="btn btn-primary" type="button">Edit</button>
                            <button class="btn btn-success" type="button">Add</button>
                            <button class="btn btn-danger" type="button">Delete</button>
                        </div>
                    </div>*/}
                </div>
            </div>
        );
    }
}