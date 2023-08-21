import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Elements/Switcher';

const Footer = () => {
  const [logo, setLogo] = useState(require('./../../images/logo-light.png'));

  const updateFooterLogo = (updatedLogo) => {
    setLogo(updatedLogo);
  };

  return (
    <>
      <footer className="site-footer footer-large  footer-dark	footer-wide">
        {/* FOOTER BLOCKES START */}
        <div className="footer-top overlay-wraper">
          <div className="overlay-main" />
          <div className="container">
            <div className="row">
              {/* ABOUT COMPANY */}
              <div className="col-lg-5 col-md-6 col-sm-6">
                <div className="widget widget_about">
                  {/*<h4 class="widget-title">About Company</h4>*/}
                  <div className="logo-footer clearfix p-b15">
                    <NavLink to={"./"}>
                      <img src={logo} alt="" />
                    </NavLink>
                  </div>
                  <p className="max-w400">
                    We are a passionate and experienced team looking to
                    transform our clients' visions into a reality. We cover
                    High end outdoor entertaining areas, both commercial and
                    residential. Contact us today!
                  </p>
                  <ul className="social-icons  mt-social-links">
                    <li>
                      <a
                        target="_blank"
                        href={"mailto:monumentalbuilding@outlook.com.au"}
                        className="fa fa-google"
                      />
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href={"https://www.facebook.com/MonumentalBG"}
                        className="fa fa-facebook"
                      />
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href={"https://www.instagram.com/monumental_building/"}
                        className="fa fa-instagram"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              {/* RESENT POST */}
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="widget widget_address_outer">
                  <h4 className="widget-title">Contact Us</h4>
                  <ul className="widget_address">
                    <li>Sydney, NSW</li>
                    <li>monumentalbuilding@outlook.com.au</li>
                    <li>(+61) 423 331 001</li>
                  </ul>
                </div>
              </div>
              {/* USEFUL LINKS */}
              <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                <div className="widget widget_services inline-links">
                  <h4 className="widget-title">Useful links</h4>
                  <ul>
                    <li>
                      <NavLink to={"/about"}>About</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/services"}>Services</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/gallery"}>Gallery</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/contactus"}>Contact Us</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              {/* TAGS */}
            </div>
          </div>
        </div>
        {/* FOOTER COPYRIGHT */}
        <div className="footer-bottom overlay-wraper">
          <div className="overlay-main" />
          <div className="container">
            <div className="row">
              <div className="mt-footer-bot-center">
                <span className="copyrights-text">© 2023 SFTWR Inc.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Switcher updateFooterLogo={updateFooterLogo} />
    </>
  );
};

export default Footer;
