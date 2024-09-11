import React from "react";
import reviewImg from "./img/img20.png";
import { AiFillPlayCircle } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HomeReviewSat = () => {
  return (
    <div className="home-review-sat">
      <div className="container">
        <div className="section-header text-center">
          <h5>Video Testimonials</h5>
          <h2>Satisfied Patients Reviews</h2>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            993: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          loop={true}
          className="home-review-sat-content mb-5"
        >
          <SwiperSlide>
            <div className="home-review-sat-box">
              <div className="home-review-sat-img">
                <img src={reviewImg} alt="img" />
                <AiFillPlayCircle />
              </div>
              <div className="home-review-sat-text">
                <h4>Md Ashif</h4>
                <small>New Delhi, India</small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-review-sat-box">
              <div className="home-review-sat-img">
                <img src={reviewImg} alt="img" />
                <AiFillPlayCircle />
              </div>
              <div className="home-review-sat-text">
                <h4>Md Ashif</h4>
                <small>New Delhi, India</small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-review-sat-box">
              <div className="home-review-sat-img">
                <img src={reviewImg} alt="img" />
                <AiFillPlayCircle />
              </div>
              <div className="home-review-sat-text">
                <h4>Md Ashif</h4>
                <small>New Delhi, India</small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-review-sat-box">
              <div className="home-review-sat-img">
                <img src={reviewImg} alt="img" />
                <AiFillPlayCircle />
              </div>
              <div className="home-review-sat-text">
                <h4>Md Ashif</h4>
                <small>New Delhi, India</small>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-review-sat-box">
              <div className="home-review-sat-img">
                <img src={reviewImg} alt="img" />
                <AiFillPlayCircle />
              </div>
              <div className="home-review-sat-text">
                <h4>Md Ashif</h4>
                <small>New Delhi, India</small>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <a className="view-all-btn" href="#">
          View All Testimonials
        </a>
      </div>
    </div>
  );
};

export default HomeReviewSat;
