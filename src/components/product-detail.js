import React, { Fragment } from 'react';
import ProductForm from '~/components/product-form';
import ReactHtmlParser from 'react-html-parser';

const ProductDetail = (
    {
        id = undefined,
        name = undefined,
        image = undefined,
        description = undefined,
        product_sku= undefined,
        price = undefined
    }
) => {
    return (
        <Fragment>
            <div className="product-detail">
                <div className="product-detail-image">
                    <img src={image.url} alt={name}  />
                </div>
                <div className="product-detail-info">
                    <div className="product-detail-name">
                        <h2>{name}</h2>
                    </div>
                    <div className="product-detail-sku">
                        <h3>{product_sku}</h3>
                    </div>
                    <div className="product-detail-price">
                        <span className="old-price">{price.regular_price.currency} {price.regular_price.value}</span>
                        <span className="special-price">{price.final_price.currency} {price.final_price.value}</span>
                    </div>
                    <ProductForm
                        id={id}
                        sku={product_sku}
                        name={name}
                        image={image}
                        price={price}
                    />
                </div>
                <div className="product-description">
                    {ReactHtmlParser(description)}    
                </div>
            </div>
        </Fragment>
    );
};

export default ProductDetail;