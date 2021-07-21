import React from 'react';
import { Logo } from '../../assets';
import './index.css';
import { Link } from 'react-router-dom'


export default function Navbar({active1, active2, active3}) {

    const reload = () => {
        window.location.reload();
    }

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid wrap-navbar">
                    <div>
                        <a className="navbar-brand" href="#">
                            <img src={Logo} onClick={reload} alt="logo-descode" />
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse menu" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link to="/"><a className={active1} aria-current="page">Home</a></Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/resource"><a className={active2}>Resources</a></Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/request"><a className={active3}>Request</a></Link>
                                </li>
                            </ul>
                    <div>
                        <Link to="/sign_in"><button className="btn mr-4" style={{marginRight: 20}} type="submit">Sign in</button></Link>
                        <Link to="/sign_up"><button className="btn btn-primary ml-4" type="submit">Sign up</button></Link>
                    </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}