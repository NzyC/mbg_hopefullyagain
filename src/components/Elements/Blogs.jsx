import React from 'react';
import { NavLink } from 'react-router-dom';

const blogs = [
    {
        image: require('./../../images/our-partners/strong.png'),
        title: 'Simpson Strong-Tie',
    },
    {
        image: require('./../../images/our-partners/ekodeck.png'),
        title: 'ECKODECK',
    },
    {
        image: require('./../../images/our-partners/tayco.png'),
        title: 'TAYCO ALUMINIUM',
    },
    {
        image: require('./../../images/our-partners/clickdeck.png'),
        title: 'CLICKDECK',
    },
    {
        image: require('./../../images/our-partners/safestyle.png'),
        title: 'SafeStyle',
    },
    {
        image: require('./../../images/our-partners/N01.png'),
        title: 'NO1 ROOFING & BUILDING SUPPLIES',
    },
    {
        image: require('./../../images/our-partners/premier.png'),
        title: 'Premier Tapes & Packaging',
    },
    {
        image: require('./../../images/our-partners/Mitre_Logo.png'),
        title: 'TRADIFY',
    },
];

const bnr1 = require('./../../images/background/bg-site.png');

function Blogs() {
    return (
        <>
            <div
                className="section-full mobile-page-padding p-t80 p-b30 bg-dark bg-repeat square_shape2 bg-moving"
                style={{ backgroundImage: `url(${bnr1})` }}
            >
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head">
                        <div className="mt-separator-outer separator-center">
                            <div className="mt-separator">
                                <h2 className="text-white text-uppercase sep-line-one ">
                                    <span className="font-weight-300 text-primary">Our</span> Partners
                                </h2>
                            </div>
                        </div>
                    </div>
                    {/* TITLE END */}
                    {/* IMAGE CAROUSEL START */}
                    <div className="section-content">
                        <div className="row">
                            {blogs.map((item, index) => (
                                <div className="col-md-4 col-sm-6" key={index}>
                                    <div className="mt-box blog-post latest-blog-3 date-style-1 bg-white m-b30">
                                        <div className="mt-post-media mt-img-overlay7">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="mt-post-info p-a30">
                                            <div className="post-overlay-position">
                                                <div className="mt-post-title">
                                                    <h4 className="post-title m-b0">{item.title}</h4>
                                                </div>
                                                <div className="readmore-line">
                                                    <span>
                                                        <NavLink to="/partners" className="site-button-link" data-hover="Read More">
                                                            Read More <i className="fa fa-angle-right arrow-animation" />
                                                        </NavLink>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="hilite-title text-right p-r50 text-uppercase hilite-dark">
                    <strong>Partners</strong>
                </div>
            </div>
        </>
    );
}

export default Blogs;
