import React, { useEffect } from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import OurProject from '../Elements/OurProject';

function ProjectMasonary() {
    useEffect(() => {
        function loadScript(src) {
            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            });
        }

        loadScript('./assets/js/masonary.js');
    }, []);

    return (
        <>
            <Header />
            <div className="page-content">
                <OurProject />
            </div>
            <Footer />
        </>
    );
}

export default ProjectMasonary;
