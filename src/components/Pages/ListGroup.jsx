import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Testimonials from '../Elements/Testimonials';

function ListGroup() {
    return (
        <>
            <Header />
            <div className="page-content">
                <Testimonials />
            </div>
            <Footer />
        </>
    );
}

export default ListGroup;