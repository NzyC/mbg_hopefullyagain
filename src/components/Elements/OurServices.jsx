import React, { useEffect } from "react";

const services = [
  {
    count: 1,
    title: "Composite & Timber Decks",
    icon: require("./../../images/icon/hammer-1.png"),
    description:
      "We provide a design, supply and install experience for your outdoor entertaining space. From our on-site initial consultation and sample display and discussion, through to the finished handover.",
  },
  {
    count: 2,
    title: "External Cladding & Facades",
    icon: require("./../../images/icon/trowel.png"),
    description:
      "New build, extension or renovation - We specialise in making the outside of your home stand out from the crowd. Covering all types of cladding including James Hardie, Weathertex and many others. We have the facade for you.",
  },
  {
    count: 3,
    title: "Commericial Decking Services",
    icon: require("./../../images/icon/hammer.png"),
    description:
      "General carpentry works and jobs across both new and existing homes, internal and external. Frame stage through Fixout.",
  },
  {
    count: 4,
    title: "Insulated & Standard Pergolas",
    icon: require("./../../images/icon/architecture.png"),
    description:
      "Whether you’re looking at a timeless Timber feature or a modern, no maintenance alternative - We have the solution and the design to suit your dream.",
  },
  {
    count: 5,
    title: `Kitchen, Bathroom & Laundry Renovations`,
    icon: require("./../../images/icon/renovation.png"),
    description:
      "Whether you’re looking to renovate, extend or complete major changes to your existing home - MBG has you covered from start to finish, providing guidance and an in-depth explanation.",
  },
];

const img1 = require("./../../images/background/bg-6.png");

const OurServices = () => {
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise(function (resolve, reject) {
        const script = document.createElement("script");
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

    loadScript("./assets/js/masonry.js");
  }, []);

  return (
    <>
      <div className="section-full mobile-page-padding p-b50 square_shape2">
        <div className="section-content">
          <div
            className="Service-half-top p-t80 bg-dark bg-moving"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="container">
              {/* TITLE START */}
              <div className="section-head text-white">
                <div className="mt-separator-outer separator-left">
                  <div className="mt-separator">
                    <h2 className="text-white text-uppercase sep-line-one ">
                      <span className="font-weight-300 text-primary">Our</span>{" "}
                      Services
                    </h2>
                  </div>
                </div>
                <h3>Its the little things that make us the best in town</h3>
              </div>
              {/* TITLE END */}
            </div>
          </div>
          <div className="services-half-bottom">
            <div className="container">
              <div className="row">
                {services.map((item, index) => (
                  <div className="col-md-6 col-sm-6" key={index}>
                    <div className="mt-icon-box-wraper m-b30">
                      <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                        <span className="icon-count-number">{item.count}</span>
                        <div className="icon-md inline-icon m-b15 text-primary scale-in-center">
                          <span className="icon-cell">
                            <img src={item.icon} alt="" />
                          </span>
                        </div>
                        <div className="icon-content">
                          <h4 className="m-b10">{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="hilite-title text-left p-l50 text-uppercase hilite-dark">
          <strong>Services</strong>
        </div>
      </div>
    </>
  );
};

export default OurServices;
