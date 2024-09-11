import React from "react";
import rimg from "./img/rimg1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HomeReview = () => {
  return (
    <div className="home-review pb-5 ">
      <div className="container">
        <div className="section-header text-center">
          <h5>Testimonials</h5>
          <h2>Satisfied Patients Reviews</h2>
        </div>
        <Swiper loop={true} className="home-review-content">
          <SwiperSlide>
            <div className="home-review-box">
              <p>
                "I've never felt more cared for than I did at Tripoheal. The
                healthcare providers were compassionate, and they took the time
                to listen to my needs. The atmosphere was welcoming
              </p>

              <div className="review-profile">
                <div className="review-profile-img">
                  <img src={rimg} alt="review" />
                </div>
                <div className="review-profile-text">
                  <h3>Md Ashif</h3>
                  <small>New Delhi, India</small>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-review-box">
              <p>
                "I've never felt more cared for than I did at Tripoheal. The
                healthcare providers were compassionate, and they took the time
                to listen to my needs. The atmosphere was welcoming
              </p>

              <div className="review-profile">
                <div className="review-profile-img">
                  <img src={rimg} alt="review" />
                </div>
                <div className="review-profile-text">
                  <h3>Md Ashif</h3>
                  <small>New Delhi, India</small>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-review-box">
              <p>
                "I've never felt more cared for than I did at Tripoheal. The
                healthcare providers were compassionate, and they took the time
                to listen to my needs. The atmosphere was welcoming
              </p>

              <div className="review-profile">
                <div className="review-profile-img">
                  <img src={rimg} alt="review" />
                </div>
                <div className="review-profile-text">
                  <h3>Md Ashif</h3>
                  <small>New Delhi, India</small>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-review-box">
              <p>
                "I've never felt more cared for than I did at Tripoheal. The
                healthcare providers were compassionate, and they took the time
                to listen to my needs. The atmosphere was welcoming
              </p>

              <div className="review-profile">
                <div className="review-profile-img">
                  <img src={rimg} alt="review" />
                </div>
                <div className="review-profile-text">
                  <h3>Md Ashif</h3>
                  <small>New Delhi, India</small>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-review-box">
              <p>
                "I've never felt more cared for than I did at Tripoheal. The
                healthcare providers were compassionate, and they took the time
                to listen to my needs. The atmosphere was welcoming
              </p>

              <div className="review-profile">
                <div className="review-profile-img">
                  <img src={rimg} alt="review" />
                </div>
                <div className="review-profile-text">
                  <h3>Md Ashif</h3>
                  <small>New Delhi, India</small>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-review-box">
              <p>
                "I've never felt more cared for than I did at Tripoheal. The
                healthcare providers were compassionate, and they took the time
                to listen to my needs. The atmosphere was welcoming
              </p>

              <div className="review-profile">
                <div className="review-profile-img">
                  <img src={rimg} alt="review" />
                </div>
                <div className="review-profile-text">
                  <h3>Md Ashif</h3>
                  <small>New Delhi, India</small>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeReview;
