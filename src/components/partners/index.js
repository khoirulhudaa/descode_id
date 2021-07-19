import React from 'react';
import './index.css';
import {
    Amazon,
    Equant,
    Albingia,
    Muk,
    Instabug,
    Instabug2,
    Discord,
    Tinder,
    Moneybird,
    Didin
} from '../../assets/';

export default function Partners() {
    return (
        <section className="partners">
        <h2>Our partners</h2>
        <div data-aos="fade-up" className="listPartners">
            <img data-aos="fade-up" src={Amazon} alt="a1" />
            <img data-aos="fade-up" src={Equant} alt="a2" />
            <img data-aos="fade-up" src={Albingia} alt="a3" />
            <img data-aos="fade-up" src={Muk} alt="a4" />
            <img data-aos="fade-up" src={Instabug2} alt="a5" />
            <img data-aos="fade-up" src={Instabug} alt="a6" />
            <img data-aos="fade-up" src={Discord} alt="a7" />
            <img data-aos="fade-up" src={Tinder} alt="a8" />
            <img data-aos="fade-up" src={Moneybird} alt="a9" />
        </div>
        <img src={Didin} data-aos="fade-up" className="didin" alt="didin"/>
    </section>
    )
}