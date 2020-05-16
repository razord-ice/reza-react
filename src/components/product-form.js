import React, { Fragment, useState } from 'react';
import { withApollo } from '~/lib/apollo';
import { withRedux } from '~/lib/redux';
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { connect, useSelector, useDispatch } from 'react-redux';
import { compose } from "redux";

const ProductForm = (
    {
        id = undefined,
        name = undefined,
        image = undefined,
        price = undefined,
        sku = undefined
    }
) => {
    const [qty, setQty] = useState(1);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const router = useRouter();

    const plusQty = () => {
        setQty(qty + 1)
    }
    const minQty = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }

    const addCart = () => {
        let fix_qty = typeof items[id] !== "undefined" ? items[id].qty : 0;
        let new_items = {
            ...items,
            [id]: {
                id: id,
                name: name,
                sku: sku,
                url_key: router.query.slug,
                image: image,
                qty: parseInt(qty) + parseInt(fix_qty),
                price: price
            }
        };

        dispatch({
            type: "ADD_CART",
            qty: qty,
            items: new_items
        });
    };

    return (
        <Fragment>
            <div className="product-form">
                <input type="hidden" name="product_id" value={id} />
                <input type="hidden" name="product_name" value={name} />
                <input type="hidden" name="product_image" value={image.url} />
                <input type="hidden" name="product_price" value={price.final_price.value} />
                <div className="fields qty">
                    <label>
                        Jumlah
                    </label>
                    <div className="qty-wrapper">
                        <button type="button" onClick={() => { minQty() }}>-</button>
                        <input type="text" name="product_qty" value={qty} onChange={(e) => { setQty(e.target.value) }} />
                        <button type="button" onClick={() => { plusQty() }} >+</button>
                    </div>
                </div>
                <div className="fields action">
                    <div className="addtocart">
                        <button type="submit" onClick={addCart}>Tambahkan Ke Keranjang</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default compose(withApollo, withRedux)(ProductForm);