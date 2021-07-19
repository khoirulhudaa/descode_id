import React from 'react';
import './index.css';
import {
    In,
    Ig,
    Fb,
    Email,
    Github,
} from '../../assets/'

export default function Footer() {
    return (
        <section className="footer">                    
        <div data-aos="zoom-in" className="listSosmed">
            <img src={In} data-aos="fade-down" className="linkendin" alt="linkendin" />
            <img src={Fb} data-aos="fade-down" className="facebook" alt="facebook" />
            <img src={Email} data-aos="fade-down" className="gmail" alt="gmail" />
            <img src={Github} data-aos="fade-down" className="github" alt="github" />
            <img src={Ig} data-aos="fade-down" className="instagram" alt="instagram" />
        </div>
        <small>Descode.id @copycopyright 2021.All Right Reserved</small>
    </section>
    )
}