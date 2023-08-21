import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const filters = [
  { label: "Decking", filter: ".cat-1" },
  { label: "Pergolas", filter: ".cat-2" },
  { label: "Kitchen & Bathroom", filter: ".cat-3" },
];

const projects = [
  {
    image: require("./../../images/gallery/portrait/pic1.jpg"),
    width: "col-md-3",
    filter: "cat-1",
  },
  {
    image: require("./../../images/gallery/portrait/pic2.jpg"),
    width: "col-md-3",
    filter: "cat-2",
  },
  {
    image: require("./../../images/gallery/portrait/pic3.jpg"),
    width: "col-md-3",
    filter: "cat-1",
  },
  {
    image: require("./../../images/gallery/portrait/pic4.jpg"),
    width: "col-md-3",
    filter: "cat-3",
  },
  {
    image: require("./../../images/gallery/portrait/pic5.jpg"),
    width: "col-md-3",
    filter: "cat-2",
  },
  {
    image: require("./../../images/gallery/portrait/pic6.jpg"),
    width: "col-md-3",
    filter: "cat-2",
  },
  {
    image: require("./../../images/gallery/portrait/pic7.jpg"),
    width: "col-md-3",
    filter: "cat-1",
  },
  {
    image: require("./../../images/gallery/portrait/pic8.jpg"),
    width: "col-md-6",
    filter: "cat-3",
  },
  {
    image: require("./../../images/gallery/portrait/pic9.jpg"),
    width: "col-md-3",
    filter: "cat-2",
  },
  {
    image: require("./../../images/gallery/portrait/pic10.jpg"),
    width: "col-md-3",
    filter: "cat-1",
  },
];


const OurProject = () => {
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    };

    loadScript("./assets/js/masonary.js");
  }, []);

  return (
    <>
      <div className="section-full mobile-page-padding p-t80 p-b30 square_shape2 ">
        <div className="container">
          {/* TITLE START */}
          <div className="section-head">
            <div className="mt-separator-outer separator-left">
              <div className="mt-separator">
                <h2 className="text-uppercase sep-line-one ">Gallery</h2>
              </div>
            </div>
          </div>
          {/* TITLE END */}
          <div className="section-content">
            <div className="portfolio-wrap row mfp-gallery product-stamp clearfix">
              {/* COLUMNS 1 */}
              <div className="stamp col-md-3 col-sm-6 m-b30">
                <div className="bg-gray p-a30">
                  <div className="filter-wrap">
                    <ul className="filter-navigation masonry-filter text-uppercase">
                      <li className="active">
                        <NavLink to={"#"} data-filter="*" data-hover="All">
                          All
                        </NavLink>
                      </li>
                      {filters.map((item, index) => (
                        <li key={index}>
                          <NavLink
                            to={"#"}
                            data-filter={item.filter}
                            data-hover={item.label}
                          >
                            {item.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* COLUMNS 2 */}
              {projects.map((item, index) => (
                <div
                  key={index}
                  className={`${item.filter} masonry-item ${item.width} col-sm-6 m-b30`}
                >
                  <div className="mt-box">
                    <div className="mt-thum-bx">
                      <img src={item.image.default} alt="" />
                    </div>
                    <NavLink to="/project-detail"></NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hilite-title text-left p-l50 text-uppercase hilite-dark">
          <strong>Gallery</strong>
        </div>
      </div>
    </>
  );
};

export default OurProject;
