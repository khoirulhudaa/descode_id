import React from 'react';
import './index.css';
import {
    People_female,
    People_male
} from '../../assets/'

export default function Inrested() {
    return (
        <section className="interested">
        <div className="boxInterested">
            <img src={People_female} className="manLeft" alt="man" />
            <h1>Interested working with me?</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Maxime tempora unde mollitia consequuntur voluptatibus maiores
                sed. Provident, necessitatibus.
            </p>
            <button className="btnChat">Chat now</button>
            <img src={People_male} className="manRight" alt="man" />
        </div>
    </section>
    )
}