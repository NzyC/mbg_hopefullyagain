import React from 'react';
import MyIframe from './MyIframe';

const img1 = require('./../../images/left-men.png');
const img2 = require('./../../images/background/bg-4.png');

function OurMission() {
    return (
        <>
            <div className="section-full mobile-page-padding mission-outer-section  p-t80 p-b30 bg-gray bg-no-repeat bg-right-center" style={{ backgroundImage: `url(${img1}), url(${img2})` }}>
                <div className="section-content">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one ">
                                        <span className="font-weight-300 text-primary">Contact</span> Us
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                    </div>
                </div>
                <MyIframe />
                
                <div className="hilite-title text-right p-r50 text-uppercase hilite-dark">
                    <strong>Contact Us</strong>
                </div>
            </div>
        </>
    );
}

export default OurMission;
