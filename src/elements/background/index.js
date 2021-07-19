import React from 'react';
import {Bg_gradient} from '../../assets/';
import './index.css';

export default function Background() {
    return (
        <img src={Bg_gradient} className="Bg" lazy="loading" alt="bG" />
    )
}