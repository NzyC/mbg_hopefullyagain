import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import bnr1 from "./../../images/background/bg-5.png";
import pic1 from "../../images/pic1.jpg";
import pic2 from "../../images/pic2.jpg";
import pic3 from "../../images/pic3.jpg";

function Specialization() {
  return (
    <>
      <div
        className="section-full mobile-page-padding bg-white p-t80 p-b30 bg-repeat square_shape1"
        style={{ backgroundImage: `url(${bnr1})` }}
      >
        <div className="container">
          {/* IMAGE CAROUSEL START */}
          <div className="section-content">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 m-b30">
                <div className="image-effect-one hover-shadow">
                  <img src={pic1} alt="" />
                  <div className="figcaption">
                    <h4>Mount Annan</h4>
                    <p>Recently completed Insulated Pergola.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4  col-sm-6 m-b30">
                <div className="image-effect-one hover-shadow">
                  <img src={pic2} alt="" />
                  <div className="figcaption">
                    <h4>Lane Cove</h4>
                    <p>Transformation of Complex Entry.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4  col-sm-6 m-b30">
                <div className="image-effect-one hover-shadow">
                  <img src={pic3} alt="" />
                  <div className="figcaption bg-dark">
                    <h4>Castle Hill</h4>
                    <p>Rebuild/Extension from the ground up.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-6 m-b30">
                <div className="mt-box our-speciallization-content">
                  <h3 className="m-t0">
                    <span className="font-weight-100">Find Us</span> <br />
                    on Instagram.
                  </h3>
                  <p>
                    Check out more of our projects on
                    our Instagram @monumental_building today!
                  </p>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/monumental_building/"
                  >
                    <InstagramIcon
                      style={{
                        fontSize: "32px",
                        background:
                          "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
                        borderRadius: "5px",
                        color: "#fff",
                        cursor: "pointer",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hilite-title text-left p-l50 text-uppercase hilite-dark">
          <strong>Welcome</strong>
        </div>
      </div>
    </>
  );
}

export default Specialization;
