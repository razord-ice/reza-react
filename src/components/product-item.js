import React, { Fragment } from 'react';
import Link from 'next/link'

const ProductGrid = (
    {
        id = undefined,
        name = undefined,
        image = undefined,
        price = undefined,
        product_url = undefined,
    }
) => {
    return (
        <Fragment>
                <div className="product-item">
                    <div className="product-item-image">
                        <Link href='/products/[slug]'  as={'/products/'+product_url} >
                            <a>
                                <img src={image.url} alt={name}  />
                            </a>
                        </Link>
                    </div>
                    <div className="product-item-info">
                        <div className="product-name">
                            <Link href='/products/[slug]'  as={'/products/'+product_url} >
                                <a>
                                    {name}
                                </a>
                            </Link>
                        </div>
                        <div className="product-price">
                            <span className="old-price">{price.regular_price.currency} {price.regular_price.value}</span>
                            <span className="special-price">{price.final_price.currency} {price.final_price.value}</span>
                        </div>
                    </div>
                </div>
        </Fragment>
    );
};

export default ProductGrid;