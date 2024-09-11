import React from "react";
import sideImg from "./img/image 21.png";
import { ImLocation2 } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HomeFeatured = () => {
  return (
    <div className="HomeFeatured pb-5">
      <div className="container">
        <div className="section-flex ">
          <div className="section-header">
            <h5>Our Products</h5>
            <h2>Featured Packages</h2>
          </div>
          <div className="section-btn">
            <select name="country" id="country">
              <option value="select">Select Country</option>
              <option value="bd">BD</option>
            </select>
          </div>
        </div>

        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          className="home-fea-content"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1.25,
              spaceBetween: 20,
            },
            993: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <div className="home-fea-content-box">
              <div className="home-fea-content-box-img">
                <img src={sideImg} alt={sideImg} />
              </div>
              <div className="home-fea-content-box-text">
                <h3>Tummy Tuck</h3>
                <div className="price-start-end">
                  <div className="price-box">
                    <h6>Start from</h6>
                    <h4>USD 4540</h4>
                  </div>
                  <div className="price-box">
                    <h6>Start from</h6>
                    <h4>USD 4540</h4>
                  </div>
                </div>
                <div className="price-location">
                  <ImLocation2 />
                  <h5>Fortis Hospital, Shalimar Bagh, Delhi, India</h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-fea-content-box">
              <div className="home-fea-content-box-img">
                <img src={sideImg} alt={sideImg} />
              </div>
              <div className="home-fea-content-box-text">
                <h3>Tummy Tuck</h3>
                <div className="price-start-end">
                  <div className="price-box">
                    <h6>Start from</h6>
                    <h4>USD 4540</h4>
                  </div>
                  <div className="price-box">
                    <h6>Start from</h6>
                    <h4>USD 4540</h4>
                  </div>
                </div>
                <div className="price-location">
                  <ImLocation2 />
                  <h5>Fortis Hospital, Shalimar Bagh, Delhi, India</h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-fea-content-box">
              <div className="home-fea-content-box-img">
                <img src={sideImg} alt={sideImg} />
              </div>
              <div className="home-fea-content-box-text">
                <h3>Tummy Tuck</h3>
                <div className="price-start-end">
                  <div className="price-box">
                    <h6>Start from</h6>
                    <h4>USD 4540</h4>
                  </div>
                  <div className="price-box">
                    <h6>Start from</h6>
                    <h4>USD 4540</h4>
                  </div>
                </div>
                <div className="price-location">
                  <ImLocation2 />
                  <h5>Fortis Hospital, Shalimar Bagh, Delhi, India</h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-fea-content-box">
              <div className="home-fea-content-box-img">
                <img src={sideImg} alt={sideImg} />
              </div>
              <div className="home-fea-content-box-text">
                <h3>Tummy Tuck</h3>
                <div className="price-start-end">
                  <div className="price-box">
                    <h6>Start from</h6>
                    <h4>USD 4540</h4>
                  </div>
                  <div className="price-box">
                    <h6>Start from</h6>
                    <h4>USD 4540</h4>
                  </div>
                </div>
                <div className="price-location">
                  <ImLocation2 />
                  <h5>Fortis Hospital, Shalimar Bagh, Delhi, India</h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeFeatured;
