import React from "react";
import OtherTopBanner from "../OtherTopBanner";
import FindForm from "./../FindForm";
import docImg from "../../img/doc111.png";
import verified from "../../img/verified.png";
import { FaRegBuilding } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { PiShoppingBagOpenBold } from "react-icons/pi";

const DoctorList1 = () => {
  return (
    <div>
      <OtherTopBanner display="none" />
      <div className="container">
        <div className="section-header text-center">
          <h5>OUR DOCTERS</h5>
          <h2>Find Top Telemedicine Doctors</h2>
        </div>
      </div>
      <FindForm />

      <div className="doctor-list-1 my-5">
        <div className="container">
          <div className="doctor-list-1-content">
            <div className="doctor-list-content-box">
              <div className="doctor-list-content-box-card">
                <div className="doctor-list-content-box-card-img">
                  <img src={docImg} alt="img" />
                </div>
                <div className="doctor-list-content-box-card-text">
                  <h3>
                    DR. Vijaya Rajkumari <img src={verified} alt="img" />
                  </h3>
                  <small>Nephrologist</small>
                  <ul className="doctor-degree">
                    <li> MBBS</li>
                    <li> MBBS</li>
                    <li> MBBS</li>
                    <li> MBBS</li>
                  </ul>
                  <ul className="doc-details">
                    <li>
                      <FaRegBuilding />
                      <span>Indraprastha Apollo Hospital</span>
                    </li>
                    <li>
                      <CiLocationOn /> <span>Delhi, India</span>
                    </li>
                    <li>
                      <HiOutlineCurrencyDollar />
                      <span>USD 32 for video consultation</span>
                    </li>
                    <li>
                      <PiShoppingBagOpenBold />
                      <span>45+ years Experience</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="doctor-list-btn">
                <a href="#"> Book Your Consult</a>
                <a href="#">View Profile</a>
              </div>
            </div>
            <div className="doctor-list-content-box">
              <div className="doctor-list-content-box-card">
                <div className="doctor-list-content-box-card-img">
                  <img src={docImg} alt="img" />
                </div>
                <div className="doctor-list-content-box-card-text">
                  <h3>
                    DR. Vijaya Rajkumari <img src={verified} alt="img" />
                  </h3>
                  <small>Nephrologist</small>
                  <ul className="doctor-degree">
                    <li> MBBS</li>
                    <li> MBBS</li>
                    <li> MBBS</li>
                    <li> MBBS</li>
                  </ul>
                  <ul className="doc-details">
                    <li>
                      <FaRegBuilding />
                      <span>Indraprastha Apollo Hospital</span>
                    </li>
                    <li>
                      <CiLocationOn /> <span>Delhi, India</span>
                    </li>
                    <li>
                      <HiOutlineCurrencyDollar />
                      <span>USD 32 for video consultation</span>
                    </li>
                    <li>
                      <PiShoppingBagOpenBold />
                      <span>45+ years Experience</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="doctor-list-btn">
                <a href="#"> Book Your Consult</a>
                <a href="#">View Profile</a>
              </div>
            </div>
            <div className="doctor-list-content-box">
              <div className="doctor-list-content-box-card">
                <div className="doctor-list-content-box-card-img">
                  <img src={docImg} alt="img" />
                </div>
                <div className="doctor-list-content-box-card-text">
                  <h3>
                    DR. Vijaya Rajkumari <img src={verified} alt="img" />
                  </h3>
                  <small>Nephrologist</small>
                  <ul className="doctor-degree">
                    <li> MBBS</li>
                    <li> MBBS</li>
                    <li> MBBS</li>
                    <li> MBBS</li>
                  </ul>
                  <ul className="doc-details">
                    <li>
                      <FaRegBuilding />
                      <span>Indraprastha Apollo Hospital</span>
                    </li>
                    <li>
                      <CiLocationOn /> <span>Delhi, India</span>
                    </li>
                    <li>
                      <HiOutlineCurrencyDollar />
                      <span>USD 32 for video consultation</span>
                    </li>
                    <li>
                      <PiShoppingBagOpenBold />
                      <span>45+ years Experience</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="doctor-list-btn">
                <a href="#"> Book Your Consult</a>
                <a href="#">View Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorList1;
