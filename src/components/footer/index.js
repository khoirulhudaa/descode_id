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
        <div className="listSosmed">
            <img src={In} className="linkendin" alt="linkendin" />
            <img src={Fb} className="facebook" alt="facebook" />
            <img src={Email} className="gmail" alt="gmail" />
            <img src={Github} className="github" alt="github" />
            <img src={Ig} className="instagram" alt="instagram" />
        </div>
        <small>Descode.id @copycopyright 2021.All Right Reserved</small>
    </section>
    )
}