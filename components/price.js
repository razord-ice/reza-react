import React from 'react'

export default function Price({priceRange}) {
    const regularPrice = priceRange.minimum_price.regular_price;
    const finalPrice = priceRange.minimum_price.final_price;
    return (
        <div className="price">
            {finalPrice.value != regularPrice.value ? (
                <div className="regular-price">
                    <s>
                        {regularPrice.currency} {regularPrice.value}
                    </s>
                </div>
            ) : null}
            <div className="final-price">
                {finalPrice.currency} {finalPrice.value}
            </div>
        </div>
    );
}