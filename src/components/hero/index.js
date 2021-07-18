import React from 'react';
import './index.css';
import {
    Box, 
    Soffyan,
    Sinit,
    Kerucut,
    Capsul,
    Huda,
    Tabung,
    Circle,
    Ryan,
    Edit
} from '../../assets';

export default function Hero() {
    return (
        <section className="hero">
            <img className="netbeans" src={Box} alt="images" />
            <img className="soffyan" src={Soffyan} alt="images1" />
            <img className="sinit" src={Sinit} alt="images2" />
            <img className="kerucut" src={Kerucut} alt="images3" />
            <img className="kapsul" src={Capsul} alt="images4" />
            <img className="huda" src={Huda} alt="images5" />
            <img className="tabung" src={Tabung} alt="images6" />
            <img className="circle" src={Circle} alt="images7" />
            <img className="ryan" src={Ryan} alt="images8" />

            <div className="wrapCircle">
                <span className="circleBig circleBig1"></span>
                <span className="circleBig circleBig2"></span>
            </div>
            
            <h1><span style={{'color': '#0984E3'}} className="desc"><img src={Edit} className="edit" alt="edit" /><span className="descode">Descode.id</span></span> providing inovation for designers and programmers</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quos, sed nobis dolor possimus tempora.</p>
            <button className="btnSectionHero">Explore Descode Now</button>
        </section>
    )
}