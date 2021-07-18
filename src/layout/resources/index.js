import React from 'react';
import { Navbar, Banner_resources , List_resources} from '../../components/';

export default function Hero_resources() {
    return (
        <React.Fragment>
            <Navbar active1="nav-link" active2="nav-link active" active3="nav-link" />
            <Banner_resources />
            <List_resources />
        </React.Fragment>
    )
}