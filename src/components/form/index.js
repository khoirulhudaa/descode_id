import React  from 'react';
import './index.css';
import { Send } from '../../assets/';

export default function Form() {
    return (
        <div className="form_request"> 
            <div className="wrap_form_request">
                <h1>Let's make your best project</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis ipsum eveniet 
                    inventore libero, magni repellat fugit? Repellendus, architecto eum! 
                    magni repellat fugit? Repellendus, architecto eum! 
                </p>
            </div>
            <div className="wrap_form_request">
                <form>
                    <input type="text" name="email" className="email" placeholder="your email..." />
                    <textarea type="text" name="request" className="request" placeholder="your request ?"></textarea>
                    <button className="btn btn-primary btn_send"><span> <img src={Send} style={{color: 'white'}} alt="send" /> send</span></button>
                </form>
            </div>
        </div>
    )
}