import React from "react";
import OtherTopBanner from "../OtherTopBanner";
import FindForm from "./../FindForm";
import { CiLocationOn } from "react-icons/ci";
import hoscom from "../../img/hoscom.png";
import hosimg from "../../img/hosimg.png";
import { BiBed } from "react-icons/bi";

const HospitalList1 = () => {
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

      <div className="doctor-list-1 my-5 hospital-list-1">
        <div className="container">
          <div className="doctor-list-1-content">
            <div className="doctor-list-content-box">
              <div className="doctor-list-content-box-card">
                <div className="doctor-list-content-box-card-img">
                  <img src={hosimg} alt="img" />
                </div>
                <div className="doctor-list-content-box-card-text">
                  <h3>DR. Vijaya Rajkumari</h3>

                  <ul className="doc-details">
                    <li>
                      <CiLocationOn />
                      <span>
                        Indraprastha Apollo Hospital, NH-19, New Delhi, Delhi
                        110076
                      </span>
                    </li>
                    <li>
                      <BiBed /> <span>No. Of Beds: 10</span>
                    </li>
                  </ul>
                  <div className="hospital-company">
                    <img src={hoscom} alt="img" />
                  </div>
                  <div className="doctor-list-btn">
                    <a href="#"> Book Your Consult</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="doctor-list-content-box">
              <div className="doctor-list-content-box-card">
                <div className="doctor-list-content-box-card-img">
                  <img src={hosimg} alt="img" />
                </div>
                <div className="doctor-list-content-box-card-text">
                  <h3>DR. Vijaya Rajkumari</h3>

                  <ul className="doc-details">
                    <li>
                      <CiLocationOn />
                      <span>
                        Indraprastha Apollo Hospital, NH-19, New Delhi, Delhi
                        110076
                      </span>
                    </li>
                    <li>
                      <BiBed /> <span>No. Of Beds: 10</span>
                    </li>
                  </ul>
                  <div className="hospital-company">
                    <img src={hoscom} alt="img" />
                  </div>
                  <div className="doctor-list-btn">
                    <a href="#"> Book Your Consult</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="doctor-list-content-box">
              <div className="doctor-list-content-box-card">
                <div className="doctor-list-content-box-card-img">
                  <img src={hosimg} alt="img" />
                </div>
                <div className="doctor-list-content-box-card-text">
                  <h3>DR. Vijaya Rajkumari</h3>

                  <ul className="doc-details">
                    <li>
                      <CiLocationOn />
                      <span>
                        Indraprastha Apollo Hospital, NH-19, New Delhi, Delhi
                        110076
                      </span>
                    </li>
                    <li>
                      <BiBed /> <span>No. Of Beds: 10</span>
                    </li>
                  </ul>
                  <div className="hospital-company">
                    <img src={hoscom} alt="img" />
                  </div>
                  <div className="doctor-list-btn">
                    <a href="#"> Book Your Consult</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalList1;
