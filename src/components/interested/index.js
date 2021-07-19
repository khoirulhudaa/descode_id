import React from 'react';
import './index.css';
import {
    People_female,
    People_male
} from '../../assets/'

export default function Inrested() {
    return (
        <section className="interested">
        <div data-aos="fade-up" className="boxInterested">
            <img data-aos="fade-up" src={People_female} data-aos="fade-up" className="manLeft" alt="man" />
            <h1 data-aos="fade-up">Interested working with me?</h1>
            <p data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Maxime tempora unde mollitia consequuntur voluptatibus maiores
                sed. Provident, necessitatibus.
            </p>
            <button data-aos="fade-up" className="btnChat">Chat now</button>
            <img src={People_male} data-aos="fade-up" className="manRight" alt="man" />
        </div>
    </section>
    )
}