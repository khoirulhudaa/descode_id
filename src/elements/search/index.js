import React from 'react';
import './index.css';
import {Search} from '../../assets/';

export default function Searchs() {
    return (
        <div className="search"> 
            <div className="icon">
                <img src={Search} alt="search" className="search_icon" />
            </div>
            <div className="input">
                <input type="text" className="input_search" name="search" placeholder="cari disini saja..." />
            </div>
        </div>
    )
}