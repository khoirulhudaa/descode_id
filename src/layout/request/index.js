import React from 'react';
import { Navbar, Banner_request, Form, Interested, Footer } from '../../components/';

export default function Request() {
    return (
        <React.Fragment>
            <Navbar active1="nav-link" active2="nav-link" active3="nav-link active" />
            <Banner_request />
            <Form />
            <Interested />
            <Footer />
        </React.Fragment>
    )
}