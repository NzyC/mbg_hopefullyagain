import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../src/components/Pages/Home';
import About from '../..//src/components/Pages/About'
import Services from '../..//src/components/Pages/Services';
import ContactUs from '../..//src/components/Pages/ContactUs';
import ProjectMasonary from '../..//src/components/Pages/ProjectMasonary';
import ProjectClassic1 from '../..//src/components/Pages/ProjectClassic1';
import ListGroup from '../..//src/components/Pages/ListGroup';

class Components extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="page-wraper">
                        <Routes>
                            <Route path="/"  element={<Home/>} />
                            <Route path='/about' element={<About/>} />
                            <Route path='/services' element={<Services/>} />
                            <Route path='/contactus' element={<ContactUs/>} />
                            <Route path='/partners' element={<ProjectClassic1/>} />
                            <Route path='/gallery' element={<ProjectMasonary/>} />
                            <Route path='/reviews' element={<ListGroup/>} />
                        </Routes>
                </div>
            </BrowserRouter>
        );
    };
};

export default Components;