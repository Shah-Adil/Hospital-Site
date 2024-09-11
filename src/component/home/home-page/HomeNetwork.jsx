import React from "react";
import hos from "./img/hos.png";
import btn from "./img/btn.png";
import { ImLocation2 } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HomeNetwork = () => {
  return (
    <div className="home-network">
      <div className="container">
        <div className="section-header text-center">
          <h5>Top Hospital</h5>
          <h2>Our Network of Hospital</h2>
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
              spaceBetween: 30,
            },
          }}
          className="home-network-content mb-5"
        >
          <SwiperSlide>
            <div className="home-network-box">
              <div className="home-network-box-img">
                <img src={hos} alt="img" />
              </div>
              <div className="home-network-box-text">
                <h3>Indraprastha Apollo Hospital</h3>
                <div className="home-network-loc">
                  <ImLocation2 />
                  <h6>New Delhi, India</h6>
                </div>
                <a href="#" className="btn-w-i">
                  Explore Hospital In India <img src={btn} alt="img" />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-network-box">
              <div className="home-network-box-img">
                <img src={hos} alt="img" />
              </div>
              <div className="home-network-box-text">
                <h3>Indraprastha Apollo Hospital</h3>
                <div className="home-network-loc">
                  <ImLocation2 />
                  <h6>New Delhi, India</h6>
                </div>
                <a href="#" className="btn-w-i">
                  Explore Hospital In India <img src={btn} alt="img" />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-network-box">
              <div className="home-network-box-img">
                <img src={hos} alt="img" />
              </div>
              <div className="home-network-box-text">
                <h3>Indraprastha Apollo Hospital</h3>
                <div className="home-network-loc">
                  <ImLocation2 />
                  <h6>New Delhi, India</h6>
                </div>
                <a href="#" className="btn-w-i">
                  Explore Hospital In India <img src={btn} alt="img" />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-network-box">
              <div className="home-network-box-img">
                <img src={hos} alt="img" />
              </div>
              <div className="home-network-box-text">
                <h3>Indraprastha Apollo Hospital</h3>
                <div className="home-network-loc">
                  <ImLocation2 />
                  <h6>New Delhi, India</h6>
                </div>
                <a href="#" className="btn-w-i">
                  Explore Hospital In India <img src={btn} alt="img" />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-network-box">
              <div className="home-network-box-img">
                <img src={hos} alt="img" />
              </div>
              <div className="home-network-box-text">
                <h3>Indraprastha Apollo Hospital</h3>
                <div className="home-network-loc">
                  <ImLocation2 />
                  <h6>New Delhi, India</h6>
                </div>
                <a href="#" className="btn-w-i">
                  Explore Hospital In India <img src={btn} alt="img" />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-network-box">
              <div className="home-network-box-img">
                <img src={hos} alt="img" />
              </div>
              <div className="home-network-box-text">
                <h3>Indraprastha Apollo Hospital</h3>
                <div className="home-network-loc">
                  <ImLocation2 />
                  <h6>New Delhi, India</h6>
                </div>
                <a href="#" className="btn-w-i">
                  Explore Hospital In India <img src={btn} alt="img" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <a className="view-all-btn" href="#">
          View All Hospitals
        </a>
      </div>
    </div>
  );
};

export default HomeNetwork;
