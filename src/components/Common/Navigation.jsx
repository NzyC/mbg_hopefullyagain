import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
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
      <div className={props.bgcolor !== '' ? `header-nav navbar-collapse collapse ${props.bgcolor}` : 'header-nav navbar-collapse collapse'}>
        <ul className="nav navbar-nav">
          <li>
            <NavLink to={"../"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About us</NavLink>
          </li>
          <li>
            <NavLink to={"/services"}>Services</NavLink>
          </li>
          <li>
            <NavLink to={"../gallery"}>Gallery</NavLink>
          </li>
          <li>
            <NavLink to={"../reviews"}>Reviews</NavLink>
          </li>
          <li>
            <NavLink to={"../partners"}>Partners</NavLink>
          </li>
          <li className="submenu-direction">
            <NavLink to={"../contactus"}>Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
