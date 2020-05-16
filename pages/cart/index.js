import React, { Fragment, useState } from 'react';
import { withRedux } from '~/lib/redux';
import { connect, useSelector } from 'react-redux';
import { compose } from "redux";
import { withApollo } from '~/lib/apollo';
import Layout from '~components/layout';
import Link from 'next/link';

const pageConfig = {
    title: "Cart"
}
const CartPage = ({data = undefined}) => {
    const { items, qty } = useSelector((state) => state);
    let cart_content;

    if (Object.keys(items).length === 0) {
        cart_content = (
            <>
                Keranjang Kosong!!!
            </>
        );
    } else {
        const cart_list = Object.keys(items).map((key) => {
            let item = items[key];
            console.log(item);
            return (
                <tr key={key}>
                    <td className="img"><img src={item.image.url} alt={name}  /></td>
                    <td>
                        <div className="item-name">
                            <span className="item-name-name">
                                <Link href="/products/[slug]" as={`/products/${item.url_key}`}>
                                    {item.name}
                                </Link>
                            </span>
                            <span className="sku">SKU: {item.sku}</span>
                        </div>
                    </td>
                    <td className="qty">
                        {item.qty}
                    </td>
                    <td className="price">{item.price.regular_price.currency} {parseInt(item.price.final_price.value) * parseInt(item.qty)}</td>
                </tr>
            );
        });

        cart_content = (
            <table className="table-cart">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Qty</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{cart_list}</tbody>
            </table>
        ) 
    }

    return (
        <Fragment>
            <Layout pageConfig={pageConfig}>
                <h1 className="page-title">Keranjang</h1>
                {cart_content}
            </Layout>
        </Fragment>
    );
};

export default compose(withApollo, withRedux)(CartPage);