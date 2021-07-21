import React  from 'react';
import './index.css';
import {
    Figma,
    Reacts,
    Free,
    Bg1,
    Bg2,
    Bg3,
    Bg5, 
    Bg6, 
    Bg7,
    Download_icon
    // Flutter,
} from '../../assets/';
import { Interested, Footer } from '../../components/';
import {Link} from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function List_resources() {

    const [condition, setCondition] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            setCondition(true)
        }, 2000)
    }, [])

    return (
        <div className="list_resources">
            <div className="menu_kategori">
                    <ul>
                        <li>Web design</li>
                        <li>Mobile</li>
                        <li>Ilustration</li>
                    </ul>
            </div>
                {
                    condition ? (
                    <div className="wrap_card_resources">
                    <div data-aos="fade-up" className="card_resources">
                        <div className="card_head_resources">
                            <Link to="/detail_product">
                                <img src={Download_icon} className="download_icon" alt="download_icon" />
                            </Link>
                            <img src={Bg5} alt="img_resources" className="img_resources" />
                        </div>
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
                    <div data-aos="fade-up" className="card_resources">
                            <div className="card_head_resources">
                            <Link to="/detail_product">
                                <img src={Download_icon} className="download_icon" alt="download_icon" />
                            </Link>
                                <img src={Bg6} alt="img_resources" className="img_resources" />
                            </div>
                        <div className="card_body_resources">
                            <div className="list_desc">
                            <h2  className="title_card">Design app healt</h2>
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
                    <div data-aos="fade-up" className="card_resources">
                            <div className="card_head_resources">
                            <Link to="/detail_product">
                                <img src={Download_icon} className="download_icon" alt="download_icon" />
                            </Link>
                                <img src={Bg7} alt="img_resources" className="img_resources" />
                            </div>  
                        <div className="card_body_resources">
                            <div className="list_desc">
                            <h2  className="title_card">Design app healt</h2>
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
                    <div data-aos="fade-up" className="card_resources">
                            <div className="card_head_resources">
                            <Link to="/detail_product">
                                <img src={Download_icon} className="download_icon" alt="download_icon" />
                            </Link>
                                <img src={Bg1} alt="img_resources" className="img_resources" />
                            </div>
                        <div className="card_body_resources">
                            <div className="list_desc">
                            <h2  className="title_card">Design app healt</h2>
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
                    <div data-aos="fade-up" className="card_resources">
                        <div className="card_head_resources">
                            <Link to="/detail_product">
                                <img src={Download_icon} className="download_icon" alt="download_icon" />
                            </Link>
                            <img src={Bg2} alt="img_resources" className="img_resources" />
                        </div>
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
                    <div data-aos="fade-up" className="card_resources">
                        <div className="card_head_resources">
                            <Link to="/detail_product">
                                <img src={Download_icon} className="download_icon" alt="download_icon" />
                            </Link>
                            <img src={Bg2} alt="img_resources" className="img_resources" />
                        </div>
                        <div className="card_body_resources">
                            <div className="list_desc">
                            <h2  className="title_card">Design app healt</h2>
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
                    <div data-aos="fade-up" className="card_resources">
                        <div className="card_head_resources">
                            <Link to="/detail_product">
                                <img src={Download_icon} className="download_icon" alt="download_icon" />
                            </Link>
                            <img src={Bg3} alt="img_resources" className="img_resources" />
                        </div>
                        <div className="card_body_resources">
                            <div className="list_desc">
                            <h2  className="title_card">Design app healt</h2>
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
                    <div data-aos="fade-up" className="card_resources">
                        <div className="card_head_resources">
                            <Link to="/detail_product">
                                <img src={Download_icon} className="download_icon" alt="download_icon" />
                            </Link>
                            <img src={Bg1} alt="img_resources" className="img_resources" />
                        </div>
                        <div className="card_body_resources">
                            <div className="list_desc">
                            <h2  className="title_card">Design app healt</h2>
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
                    <div data-aos="fade-up" className="card_resources">
                        <div className="card_head_resources">
                            <Link to="/detail_product">
                                <img src={Download_icon} className="download_icon" alt="download_icon" />
                            </Link>
                            <img src={Bg1} alt="img_resources" className="img_resources" />
                        </div>
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
                    <div data-aos="fade-up" className="card_resources">
                        <div className="card_head_resources">
                            <Link to="/detail_product">
                                <img src={Download_icon} className="download_icon" alt="download_icon" />
                            </Link>
                            <img src={Bg2} alt="img_resources" className="img_resources" />
                        </div>
                        <div className="card_body_resources">
                            <div className="list_desc">
                            <h2  className="title_card">Design app healt</h2>
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
                    <div data-aos="fade-up" className="card_resources">
                        <div className="card_head_resources">
                            <Link to="/detail_product">
                                <img src={Download_icon} className="download_icon" alt="download_icon" />
                            </Link>
                            <img src={Bg3} alt="img_resources" className="img_resources" />
                        </div>
                        <div className="card_body_resources">
                            <div className="list_desc">
                            <h2  className="title_card">Design app healt</h2>
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
                    <div data-aos="fade-up" className="card_resources">
                        <div className="card_head_resources">
                            <Link to="/detail_product">
                                <img src={Download_icon} className="download_icon" alt="download_icon" />
                            </Link>
                            <img src={Bg1} alt="img_resources" className="img_resources" />
                        </div>
                        <div className="card_body_resources">
                            <div className="list_desc">
                            <h2  className="title_card">Design app healt</h2>
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
                    ):
                    <SkeletonTheme style={{overflow: 'hidden'}} color="grey" highlightColor="grey">
                        <Skeleton className="skeleton" count={12} style={{margin: '10px'}} duration={2} width={320} height={200} />
                    </SkeletonTheme>
                }
            <div className="load_more">
                <button data-aos="fade-up" className="btn_load_more">Load more</button>
            </div>
            <Interested />
            <Footer />
        </div>
    )
}