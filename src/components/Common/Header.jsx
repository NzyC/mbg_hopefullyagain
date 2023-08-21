import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../Common/Navigation';

import bnr from './../../images/background/bg-5.png';

const Header = () => {
  const [logo, setLogo] = useState(require('./../../images/logo-light.png'));
  const [isSearchActive, setSearchActive] = useState(false);
  const [isQuoteActive, setQuoteActive] = useState(false);

  const handleQuoteToggle = () => {
    setQuoteActive(!isQuoteActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      const stickyheader = document.querySelector('.sticky-header ');

      if (offset >= 100) {
        stickyheader.classList.add('is-fixed');
        stickyheader.classList.add('color-fill');
      } else {
        stickyheader.classList.remove('is-fixed');
        stickyheader.classList.remove('color-fill');
      }
    };

    window.addEventListener('scroll', handleScroll);

    window.updateTopMostParent = (logopath) => {
      setLogo(logopath);
    };
  }, []);

  return (
    <>
      <header className="site-header header-style-1">
        <div className="top-bar bg-gray">
          <div className="container">
            <div className="row">
              <div className="mt-topbar-left clearfix">
                <ul className="list-unstyled e-p-bx pull-right">
                  <a href='mailto:monumentalbuilding@outlook.com.au'><i className="fa fa-envelope" />monumentalbuilding@outlook.com.au</a>
                  <a href='tel:+61 423 331 001'><i className="fa fa-phone" />+61 423 331 001</a>
                </ul>
              </div>
              <div className="mt-topbar-right clearfix">
                <div className="appint-btn"><NavLink to={"/contactus"} className="site-button">Contact Us Today</NavLink></div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-header main-bar-wraper">
          <div className="main-bar bg-white">
            <div className="container">
              <div className="logo-header">
                <div className="logo-header-inner logo-header-one">
                  <NavLink to={"../"}>
                    <img src={logo} alt="Shapen" />
                  </NavLink>
                </div>
              </div>
              {/* NAV Toggle Button */}
              <button data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggle collapsed">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              {/* ETRA Nav */}
              <div className="extra-nav">
                <div className="extra-cell">
                  <NavLink to={"#"} className="contact-slide-show" onClick={handleQuoteToggle}><i className="fa fa-angle-left arrow-animation" /></NavLink>
                </div>
              </div>
              {/* ETRA Nav */}
              {/* Contact Nav */}
              <div className={`contact-slide-hide ${isQuoteActive ? '' : 'hidden'}`} style={{ backgroundImage: `url(${bnr})`, right: isQuoteActive ? '0px' : '-500px' }}>
                <div className="contact-nav">
                  <NavLink to={"#"} className="contact_close" onClick={handleQuoteToggle}>×</NavLink>
                  <div className="contact-nav-form p-a30">
                    <div className="contact-info   m-b30">
                      <div className="mt-icon-box-wraper center p-b30">
                        <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-phone" /></div>
                        <div className="icon-content">
                          <h5 className="m-t0 font-weight-500">Phone number</h5>
                          <p>+61 423 331 001</p>
                        </div>
                      </div>
                      <div className="mt-icon-box-wraper center p-b30">
                        <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-envelope" /></div>
                        <div className="icon-content">
                          <h5 className="m-t0 font-weight-500">Email address</h5>
                          <p>monumentalbuilding@outlook.com.au</p>
                        </div>
                      </div>
                    </div>
                    <div className="full-social-bg">
                      <ul>
                        <li><NavLink to={"https://www.facebook.com/MonumentalBG"} className="facebook"><i className="fa fa-facebook" /></NavLink></li>
                        <li><NavLink to={"mailto:monumentalbuilding@outlook.com.au"} className="google"><i className="fa fa-google" /></NavLink></li>
                        <li><NavLink to={"https://www.instagram.com/monumental_building/?hl=en"} className="instagram"><i className="fa fa-instagram" /></NavLink></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* SITE Search */}
              {/* MAIN Vav */}
              <Navigation />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
