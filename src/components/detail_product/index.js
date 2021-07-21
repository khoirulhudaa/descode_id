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
        <div data-aos="fade-up" className="wrap_detail_product">
            <div data-aos="fade-up" className="box_detail_product">
                <div data-aos="fade-up" className="wrap_box_detail_top">
                    <div data-aos="fade-up" className="detail_images">
                        <div data-aos="fade-up" className="image_main">
                            <img src={Bg2} alt="img_main" />
                        </div>
                        <div data-aos="fade-up" className="list_images">
                            <div data-aos="fade-up" className="images">
                                <img src={Bg3} alt="images" />
                            </div>
                            <div data-aos="fade-up" className="images">
                                <img src={Bg3} alt="images" />
                            </div>
                            <div data-aos="fade-up" className="images">
                                <img src={Bg3} alt="images" />
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="detail_content">
                        <h2>Onboarding screens for mobile App</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Molestias facere velit amet nihil repellendus in.
                        </p>
                        <div>
                            <div className="mb-1 mt-1">
                                <span className="free">
                                    Free
                                </span>
                                <span className="category">
                                    Web design
                                </span>
                            </div>
                            {/* <img src={Free} data-aos="fade-up" className="status" alt="status" />
                            <img src={Web_design} data-aos="fade-up" className="status2" alt="status2" /> */}
                            <br />
                            <small data-aos="fade-up" className="price"><s>$15</s></small>
                            <br />
                            <small data-aos="fade-up" className="discount">$0</small>
                        </div>
                        <div>
                            <button data-aos="fade-up" className="btn btn-primary btn_download">
                                <img src={Download_icon} alt="download_icon" />
                                Download with free
                            </button>
                        </div>
                        <div data-aos="fade-up" className="wrap_analytics">
                            <div data-aos="fade-up" className="viewers">
                                <img src={Eye} alt="viewers" />
                                <br />
                                <br />
                                <span><span className="num_viewers">3.323</span> viewers</span>
                            </div>
                            <div data-aos="fade-up" className="downloads">
                                <img src={Download_icon} alt="download" />
                                <br />
                                <br />
                                <span><span className="num_viewers">3.323</span> viewers</span>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="contributor">
                            <h3>Contributor</h3>
                            <div data-aos="fade-up" className="list_contributor">
                            <div data-aos="fade-up" className="wrap_contributor">
                                <div data-aos="fade-up" className="image_contributor"><img src={Face1} alt="face_image" /></div>
                                <div data-aos="fade-up" className="bio_contributor">
                                    <h4>Ibnu soffyan tshauri</h4>
                                    <small>UI/UX Designer</small>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="wrap_contributor">
                                <div data-aos="fade-up" className="image_contributor"><img src={Face1} alt="face_image" /></div>
                                <div data-aos="fade-up" className="bio_contributor">
                                    <h4>Ryan aprianto</h4>
                                    <small>Mobile developer</small>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="wrap_box_detail_bottom">
                    <div data-aos="fade-up" className="wrap_descode_line">
                        <img src={Descode_line} alt="descode_line" data-aos="fade-up" className="descode_line" />
                        <h4>Thank you</h4>
                        <button data-aos="fade-up" className="btn btn-primary btn_hire_me">
                            <img src={Message} alt="pesan_icon" />
                            Hire me
                        </button>
                    </div>
                    <div data-aos="fade-up" className="wrap_resources_similiar">
                        <h4>Similiar to</h4>
                        <div data-aos="fade-up" className="list_resources_similiar">
                        <div data-aos="fade-up" className="card_resources">
                                <div data-aos="fade-up" className="card_head_resources">
                                    <Link to="/detail_product">
                                        <img src={Download_icon} className="download_icon" alt="download_icon" />
                                    </Link>
                                    <img src={Bg2} alt="img_resources" data-aos="fade-up" className="img_resources" />
                                </div>
                                <div data-aos="fade-up" className="card_body_resources">
                                    <div data-aos="fade-up" className="list_desc">
                                        <h2 data-aos="fade-up" className="title_card">Design app healt</h2>
                                        <span data-aos="fade-up" className="status">
                                            <img src={Free} alt="status" />
                                        </span>
                                    </div>
                                    <div data-aos="fade-up" className="list_tools">
                                        <span>
                                            <img src={Figma} alt="tools" />
                                        </span>
                                        <span>
                                            <img src={Reacts} alt="tools" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        <div data-aos="fade-up" className="card_resources">
                                <div data-aos="fade-up" className="card_head_resources">
                                    <Link to="/detail_product">
                                        <img src={Download_icon} className="download_icon" alt="download_icon" />
                                    </Link>
                                    <img src={Bg3} alt="img_resources" data-aos="fade-up" className="img_resources" />
                                </div>
                                <div data-aos="fade-up" className="card_body_resources">
                                    <div data-aos="fade-up" className="list_desc">
                                        <h2 data-aos="fade-up" className="title_card">Design app healt</h2>
                                        <span data-aos="fade-up" className="status">
                                            <img src={Free} alt="status" />
                                        </span>
                                    </div>
                                    <div data-aos="fade-up" className="list_tools">
                                        <span>
                                            <img src={Figma} alt="tools" />
                                        </span>
                                        <span>
                                            <img src={Reacts} alt="tools" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        <div data-aos="fade-up" className="card_resources">
                                <div data-aos="fade-up" className="card_head_resources">
                                <Link to="/detail_product">
                                    <img src={Download_icon} className="download_icon" alt="download_icon" />
                                </Link>
                                    <img src={Bg2} alt="img_resources" data-aos="fade-up" className="img_resources" />
                                </div>
                                <div data-aos="fade-up" className="card_body_resources">
                                    <div data-aos="fade-up" className="list_desc">
                                        <h2 data-aos="fade-up" className="title_card">Design app healt</h2>
                                        <span data-aos="fade-up" className="status">
                                            <img src={Free} alt="status" />
                                        </span>
                                    </div>
                                    <div data-aos="fade-up" className="list_tools">
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