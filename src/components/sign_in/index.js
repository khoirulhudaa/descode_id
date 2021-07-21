import React from 'react';
import './index.css';
import {Logo} from '../../assets';
import {Or, Google, Sakura2} from '../../assets/';
import {Link} from 'react-router-dom';


export default function Signin() {
    return (
        <div className="wrap_auth">
            <div className="banner_auth">
                <img src={Sakura2} data-aos="fade-up" className="sakura" alt="banner_image" />
            </div>
            <div className="form_auth2">
                <div className="wrap_form_auth2">
                    <div>
                        <img src={Logo} className="logo_descode" alt="logo_desoce" />
                        <h2>Sign in to <span className="desc">descode</span></h2>
                    </div>
                    <div className="form">
                    <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary btn_auth"><span className="sign_text">Sign in</span></button>
                            </form>
                    </div>
                    <div className="login_google">
                        <img src={Or} alt="or" />
                        <button className="btn btn-primary btn_google">
                            <span className="span_icon">
                                <img src={Google} alt="google_icon" />
                            </span>
                            <span className="span_text">
                                Login with google
                            </span>
                        </button>
                    </div>
                    <div className="account">
                        <small>Don't have an account? <Link to="/sign_up"><a className="signUp">Sign up</a></Link></small>
                    </div>
                </div>
            </div>
        </div>
    )
}  