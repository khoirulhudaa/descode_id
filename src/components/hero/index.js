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
    Edit,
    Circle_hero,
    El1,
    El2,
    El3, 
    El4
} from '../../assets';

export default function Hero() {
    return (
        <section className="hero">
            <img data-aos="fade-up" className="netbeans" src={Box} alt="images" />
            <img data-aos="fade-up" className="soffyan" src={Soffyan} alt="images1" />
            <img data-aos="fade-up" className="sinit" src={Sinit} alt="images2" />
            <img data-aos="fade-up" className="kerucut" src={Kerucut} alt="images3" />
            <img data-aos="fade-up" className="kapsul" src={Capsul} alt="images4" />
            <img data-aos="fade-up" className="huda" src={Huda} alt="images5" />
            <img data-aos="fade-up" className="tabung" src={Tabung} alt="images6" />
            <img data-aos="fade-up" className="circle" src={Circle} alt="images7" />
            <img data-aos="fade-up" className="ryan" src={Ryan} alt="images8" />
            <img data-aos="fade-up" className="el1" src={El1} alt="images9" />
            <img data-aos="fade-up" className="el2" src={El2} alt="images10" />
            <img data-aos="fade-up" className="el3" src={El3} alt="images11" />
            <img data-aos="fade-up" className="el4" src={El4} alt="images12" />

            <div className="wrapCircle">
                <img src={Circle_hero} alt="circle_hero" />
            </div>
            
            <h1 data-aos="fade-up"><span style={{'color': '#0984E3'}} data-aos="fade-up" className="desc"><img src={Edit} data-aos="fade-up" className="edit" alt="edit" /><span data-aos="fade-up" className="descode">Descode.id</span></span> providing inovation for designers and programmers</h1>
            <p data-aos="fade-up">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quos, sed nobis dolor possimus tempora.</p>
            <button data-aos="fade-up" className="btnSectionHero">Explore Descode Now</button>
        </section>
    )
}