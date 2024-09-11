import React from "react";
import sideImg from "./img/image 21.png";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { BsBuilding } from "react-icons/bs";
import btn from "./img/btn.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HomeDoc = () => {
  return (
    <div className="home-doc pb-5">
      <div className="container">
        <div className="section-flex ">
          <div className="section-header">
            <h5>OUR DOCTERS</h5>
            <h2>Top Telemedicine Doctors</h2>
          </div>
          <div className="section-btn">
            <select name="country" id="country">
              <option value="select">View All Hospitals</option>
              <option value="bd">BD</option>
            </select>
          </div>
        </div>

        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
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
          className="home-doc-content"
        >
          <SwiperSlide>
            <div className="home-fea-content-box">
              <div className="home-fea-content-box-img">
                <img src={sideImg} alt={sideImg} />
              </div>
              <div className="home-fea-content-box-text">
                <h3>Tummy Tuck</h3>
                <ul>
                  <li>
                    <BsBuilding />
                    Indraprastha Apollo Hospital
                  </li>
                  <li>
                    <CiLocationOn />
                    Delhi, India
                  </li>
                  <li>
                    <HiOutlineCurrencyDollar /> USD 32 for video consultation
                  </li>
                </ul>
                <a href="#" className="btn-w-i">
                  Book Your Consult <img src={btn} alt="img" />
                </a>
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
                <ul>
                  <li>
                    <BsBuilding />
                    Indraprastha Apollo Hospital
                  </li>
                  <li>
                    <CiLocationOn />
                    Delhi, India
                  </li>
                  <li>
                    <HiOutlineCurrencyDollar /> USD 32 for video consultation
                  </li>
                </ul>
                <a href="#" className="btn-w-i">
                  Book Your Consult <img src={btn} alt="img" />
                </a>
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
                <ul>
                  <li>
                    <BsBuilding />
                    Indraprastha Apollo Hospital
                  </li>
                  <li>
                    <CiLocationOn />
                    Delhi, India
                  </li>
                  <li>
                    <HiOutlineCurrencyDollar /> USD 32 for video consultation
                  </li>
                </ul>
                <a href="#" className="btn-w-i">
                  Book Your Consult <img src={btn} alt="img" />
                </a>
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
                <ul>
                  <li>
                    <BsBuilding />
                    Indraprastha Apollo Hospital
                  </li>
                  <li>
                    <CiLocationOn />
                    Delhi, India
                  </li>
                  <li>
                    <HiOutlineCurrencyDollar /> USD 32 for video consultation
                  </li>
                </ul>
                <a href="#" className="btn-w-i">
                  Book Your Consult <img src={btn} alt="img" />
                </a>
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
                <ul>
                  <li>
                    <BsBuilding />
                    Indraprastha Apollo Hospital
                  </li>
                  <li>
                    <CiLocationOn />
                    Delhi, India
                  </li>
                  <li>
                    <HiOutlineCurrencyDollar /> USD 32 for video consultation
                  </li>
                </ul>
                <a href="#" className="btn-w-i">
                  Book Your Consult <img src={btn} alt="img" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeDoc;
