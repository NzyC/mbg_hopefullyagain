import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import OurServices from '../Elements/OurServices';

function Services() {
    return (
        <>
            <Header />
            <div className="page-content">
                <OurServices />
            </div>
            <Footer />
        </>
    );
}

export default Services;
