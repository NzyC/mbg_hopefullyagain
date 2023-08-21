import React from "react";
import { NavLink } from "react-router-dom";

function Callus() {
  return (
    <>
      <div className="section-full mobile-page-padding p-tb80 overlay-wraper bg-cover bg-center">
        <div className="overlay-main bg-primary opacity-07" />
        <div className="container">
          <div className="section-content">
            <div className="call-us-section text-center">
              <h4 className="m-b15">Let's work together</h4>
              <a href="tel:+61 423 331 001">
                <h2 className="call-us-number m-b15 m-b0">(+61) 423 331 001</h2>
              </a>
              <h4 className="call-us-address m-t0 m-b20">Sydney, Australia</h4>
              <NavLink to="/contactus" className="site-button-secondry btn-effect bg-dark">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Callus;
