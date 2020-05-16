import React, { Fragment, useState } from 'react';
import { withRedux } from '~/lib/redux';
import { useDispatch } from 'react-redux';

const ProductForm = (
    {
        id = undefined,
        name = undefined,
        image = undefined,
        price = undefined
    }
) => {
    const [ qty, setQty ] = useState(1);
    const dispatch = useDispatch();

    const addQty = () => {
        setQty(qty + 1)
    }
    const substractQty = () => {
        if (qty>1){
            setQty(qty - 1)
        }
    }
    const submitForm = (e) => {
        e.preventDefault()
        dispatch({
            'type': 'ADD_TO_CART',
            'payloads': {
                'product_id' : e.target.product_id.value,
                'product_name' : e.target.product_name.value,
                'product_image' : e.target.product_image.value,
                'product_price' : e.target.product_price.value,
                'product_qty' : e.target.product_qty.value
            }
        })
    }

    return (
        <Fragment>
            <div className="product-form">
                <form onSubmit={(e)=>{submitForm(e)}}>
                    <input type="hidden" name="product_id" value={id} />
                    <input type="hidden" name="product_name" value={name} />
                    <input type="hidden" name="product_image" value={image.url} />
                    <input type="hidden" name="product_price" value={price.final_price.value} />
                    <div className="fields qty">
                        <label>
                            Jumlah
                        </label>
                        <div className="qty-wrapper">
                            <button type="button" onClick={()=>{substractQty()}}>-</button>
                            <input type="text" name="product_qty" value={qty} onChange={(e)=>{setQty(e.target.value)}}/>
                            <button type="button" onClick={()=>{addQty()}} >+</button>
                        </div>
                    </div>
                    <div className="fields action">
                        <div className="addtocart">
                            <button type="submit">Tambahkan Ke Keranjang</button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

ProductForm.getInitialProps = ({ reduxStore }) => {
    const { dispatch } = reduxStore
    dispatch({
        type: 'ADD_TO_CART',
        payloads: typeof window === 'object'
    })
    return{}
}


export default withRedux(ProductForm);