import React from 'react';
import './index.css';
import { Banner } from '../../assets';
import { Search } from '../../elements';

export default function Banner_resources() {
    return (
        <section data-aos="fade-up" className="banner_resources">
            <img src={Banner}alt="banner_resources" />
            <Search />
        </section>
    )
}