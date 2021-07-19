import React from 'react';
import './index.css';
import {
    Cd1,
    Cd2,
    Cd3,
    Fauzi
} from '../../assets';

export default function Benefits() {
    return (
        <section className="benefits">
        <img src={Fauzi} data-aos="fade-up" className="fauzi" alt="fauzi"/>
        <h3>Benefits</h3>
        <h2>We provide various kind of service for you</h2>
        <div data-aos="fade-up" className="listBenefits">
            <div data-aos="fade-up" className="cardBenefits">
                <div data-aos="fade-up" className="card-head">
                    <img src={Cd1} alt="benefits" />
                </div>
                <div data-aos="fade-up" className="card-body">
                    <h4>Up to date</h4>
                    <p>Nikmati ribuan design popular dari seluruh dunia yang siap digunakan pada projek</p>
                </div>
            </div>
            <div data-aos="fade-up" className="cardBenefits">
                <div data-aos="fade-up" className="card-head">
                    <img src={Cd2} alt="benefits" />
                </div>
                <div data-aos="fade-up" className="card-body">
                    <h4>Up to date</h4>
                    <p>Nikmati ribuan design popular dari seluruh dunia yang siap digunakan pada projek</p>
                </div>
            </div>
            <div data-aos="fade-up" className="cardBenefits">
                <div data-aos="fade-up" className="card-head">
                    <img src={Cd3} alt="benefits" />
                </div>
                <div data-aos="fade-up" className="card-body">
                    <h4>Up to date</h4>
                    <p>Nikmati ribuan design popular dari seluruh dunia yang siap digunakan pada projek</p>
                </div>
            </div>
        </div>
    </section>
    )
}