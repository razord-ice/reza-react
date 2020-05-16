import React, { Fragment } from 'react';
import ProductItem from '~/components/product-item';

const ProductGrid = ({data = undefined}) => {
    if(data){
        return(
            <Fragment>
                <div className="product-grid">
                    {data.map((data, i)=>{
                        return(
                            <ProductItem 
                                key={i}
                                id={data.id}
                                name={data.name}
                                image={data.small_image}
                                price={data.price_range.minimum_price}
                                product_url={data.url_key}
                                />
                        );
                    })}
                </div>
            </Fragment>
        );
    }
    else {
        return(
            <Fragment>
                <div className="product-grid">
                    err
                </div>
            </Fragment>
        );
    }
}

export default ProductGrid;