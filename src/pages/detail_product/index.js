import React from 'react';
import { Navbar } from '../../components';
import { Detail_product } from '../../layout';

export default function Detail_products() {
    return (
        <React.Fragment>
            <Navbar active1="nav-link" active2="nav-link active" active3="nav-link" />
            <Detail_product />
        </React.Fragment>
    )
}