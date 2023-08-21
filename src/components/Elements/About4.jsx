import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
  require('./../../images/gallery/portrait/pic4.jpg'),
  require('./../../images/gallery/portrait/pic5.jpg'),
  require('./../../images/gallery/portrait/pic6.jpg'),
  require('./../../images/gallery/portrait/pic7.jpg'),
  require('./../../images/gallery/portrait/pic1.jpg'),
];

const bnr1 = require('./../../images/background/line.png');

function About4() {
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

  const options = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 30,
    nav: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    items: 1,
    dots: true,
  };

  return (
    <>
      <div className="section-full p-t80 p-b80 bg-white inner-page-padding">
        <div className="container">
          <div className="section-content ">
            <div className="row">
              <div className="col-lg-5 col-md-5 ">
                <div className="m-about ">
                  <OwlCarousel
                    className="owl-carousel about-us-carousel"
                    {...options}
                  >
                    {images.map((item, index) => (
                      <div className="item" key={index}>
                        <div className="ow-img">
                          <NavLink to="/about">
                            <img src={item} alt="" />
                          </NavLink>
                        </div>
                      </div>
                    ))}
                  </OwlCarousel>
                </div>
              </div>
              <div className="col-lg-7 col-md-7">
                <div className="m-about-containt text-black p-t80">
                  <div
                    className="m-about-years bg-moving"
                    style={{ backgroundImage: `url(${bnr1})` }}
                  >
                    <span className="text-primary large-title">5</span>
                    <span className="large-title-info">Years of Experience</span>
                  </div>
                  <h3 className="m-t0">
                    <span className="font-weight-100">Crafting Dreams,</span> Your Vision, Our Expertise
                  </h3>
                  <p>
                    <strong>
                      We are a passionate and experienced team looking to
                      transform our clients' visions into a reality. We cover
                      high-end outdoor entertaining areas, both commercial and
                      residential.
                    </strong>
                  </p>
                  <p>
                    As well as, all aspects of new build carpentry following
                    into existing home renovations, extensions, addition and
                    alterations to provide a start-to-finish process where we
                    will take care of everything!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About4;
