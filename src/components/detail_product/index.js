import React from 'react'
import './index.css';
import {
    Free, 
    Web_design, 
    Descode_line, 
    Face1, 
    Bg2, 
    Bg3, 
    Download_icon, 
    Eye,
    Message,
    Figma, 
    Reacts
} from '../../assets';
import {Link} from 'react-router-dom';


export default function Detail_product() {
    return (
        <div className="wrap_detail_product">
            <div className="box_detail_product">
                <div className="wrap_box_detail_top">
                    <div className="detail_images">
                        <div className="image_main">
                            <img src={Bg2} alt="img_main" />
                        </div>
                        <div className="list_images">
                            <div className="images">
                                <img src={Bg3} alt="images" />
                            </div>
                            <div className="images">
                                <img src={Bg3} alt="images" />
                            </div>
                            <div className="images">
                                <img src={Bg3} alt="images" />
                            </div>
                        </div>
                    </div>
                    <div className="detail_content">
                        <h2>Onboarding screens for mobile App</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Molestias facere velit amet nihil repellendus in.
                        </p>
                        <div>
                            <img src={Free} className="status" alt="status" />
                            <img src={Web_design} className="status2" alt="status2" />
                            <br />
                            <small className="price"><s>$15</s></small>
                            <br />
                            <small className="discount">$0</small>
                        </div>
                        <div>
                            <button className="btn btn-primary btn_download">
                                <img src={Download_icon} alt="download_icon" />
                                Download with free
                            </button>
                        </div>
                        <div className="wrap_analytics">
                            <div className="viewers">
                                <img src={Eye} alt="viewers" />
                                <br />
                                <br />
                                <span><span className="num_viewers">3.323</span> viewers</span>
                            </div>
                            <div className="downloads">
                                <img src={Download_icon} alt="download" />
                                <br />
                                <br />
                                <span><span className="num_viewers">3.323</span> viewers</span>
                            </div>
                        </div>
                        <div className="contributor">
                            <h3>Contributor</h3>
                            <div className="list_contributor">
                            <div className="wrap_contributor">
                                <div className="image_contributor"><img src={Face1} alt="face_image" /></div>
                                <div className="bio_contributor">
                                    <h4>Ibnu soffyan tshauri</h4>
                                    <small>UI/UX Designer</small>
                                </div>
                            </div>
                            <div className="wrap_contributor">
                                <div className="image_contributor"><img src={Face1} alt="face_image" /></div>
                                <div className="bio_contributor">
                                    <h4>Ryan aprianto</h4>
                                    <small>Mobile developer</small>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrap_box_detail_bottom">
                    <div className="wrap_descode_line">
                        <img src={Descode_line} alt="descode_line" className="descode_line" />
                        <h4>Thank you</h4>
                        <button className="btn btn-primary btn_hire_me">
                            <img src={Message} alt="pesan_icon" />
                            Hire me
                        </button>
                    </div>
                    <div className="wrap_resources_similiar">
                        <h4>Similiar to</h4>
                        <div className="list_resources_similiar">
                        <div className="card_resources">
                                <Link to="/detail_product">
                                <div className="card_head_resources">
                                    <img src={Bg2} alt="img_resources" className="img_resources" />
                                </div>
                                </Link>
                                <div className="card_body_resources">
                                    <div className="list_desc">
                                        <h2 className="title_card">Design app healt</h2>
                                        <span className="status">
                                            <img src={Free} alt="status" />
                                        </span>
                                    </div>
                                    <div className="list_tools">
                                        <span>
                                            <img src={Figma} alt="tools" />
                                        </span>
                                        <span>
                                            <img src={Reacts} alt="tools" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        <div className="card_resources">
                                <Link to="/detail_product">
                                <div className="card_head_resources">
                                    <img src={Bg3} alt="img_resources" className="img_resources" />
                                </div>
                                </Link>
                                <div className="card_body_resources">
                                    <div className="list_desc">
                                        <h2 className="title_card">Design app healt</h2>
                                        <span className="status">
                                            <img src={Free} alt="status" />
                                        </span>
                                    </div>
                                    <div className="list_tools">
                                        <span>
                                            <img src={Figma} alt="tools" />
                                        </span>
                                        <span>
                                            <img src={Reacts} alt="tools" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        <div className="card_resources">
                                <Link to="/detail_product">
                                <div className="card_head_resources">
                                    <img src={Bg2} alt="img_resources" className="img_resources" />
                                </div>
                                </Link>
                                <div className="card_body_resources">
                                    <div className="list_desc">
                                        <h2 className="title_card">Design app healt</h2>
                                        <span className="status">
                                            <img src={Free} alt="status" />
                                        </span>
                                    </div>
                                    <div className="list_tools">
                                        <span>
                                            <img src={Figma} alt="tools" />
                                        </span>
                                        <span>
                                            <img src={Reacts} alt="tools" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}