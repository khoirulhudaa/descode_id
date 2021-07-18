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
    Didin,
    Fauzi
} from '../../assets/';

export default function Partners() {
    return (
        <section className="partners">
        <h2>Our partners</h2>
        <div className="listPartners">
            <img src={Amazon} alt="" />
            <img src={Equant} alt="" />
            <img src={Albingia} alt="" />
            <img src={Muk} alt="" />
            <img src={Instabug} alt="" />
            <img src={Instabug2} alt="" />
            <img src={Discord} alt="" />
            <img src={Tinder} alt="" />
            <img src={Moneybird} alt="" />
        </div>
        <img src={Didin} className="didin" alt="didin"/>
        <img src={Fauzi} className="fauzi" alt="fauzi"/>
    </section>
    )
}