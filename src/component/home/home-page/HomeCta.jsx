import React from "react";
import phone from "./img/Frame 592.png";
import cal from "./img/Frame 592(1).png";

const HomeCta = () => {
  return (
    <div className="home-cta my-5">
      <div className="container">
        <div className="home-cta-content">
          <h3>Get personalized assistance for your treatment</h3>
          <div className="home-cta-content-contact">
            <div className="home-cta-content-contact-box">
              <div className="home-cta-content-contact-box-img">
                <img src={phone} alt="img" />
              </div>
              <div className="home-cta-content-contact-box-text">
                <button>Call us on</button>
                <a href="#">+91-9958087437</a>
              </div>
            </div>

            <div className="home-cta-content-contact-box">
              <div className="home-cta-content-contact-box-img">
                <img src={cal} alt="img" />
              </div>
              <div className="home-cta-content-contact-box-text">
                <button>Book an Appointment</button>
                <a href="#">Book Here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCta;
