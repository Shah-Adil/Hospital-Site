import React from "react";
import OtherTopBanner from "../OtherTopBanner";
import FindForm from "./../FindForm";
import hosimg2 from "../../img/hosimg2.png";
import { CiLocationOn } from "react-icons/ci";
import btn from "../home/home-page/img/btn.png";

const HospitalList2 = () => {
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

      <div className="doctor-list-1 my-5 hospital-list-2">
        <div className="container">
          <div className="doctor-list-1-content">
            <div className="doctor-list-content-box">
              <div className="doctor-list-content-box-card">
                <div className="doctor-list-content-box-card-img">
                  <img src={hosimg2} alt="img" />
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
                  </ul>
                  <a href="#" className="btn-w-i">
                    View Hospital Details <img src={btn} alt="img" />
                  </a>
                </div>
              </div>
            </div>
            <div className="doctor-list-content-box">
              <div className="doctor-list-content-box-card">
                <div className="doctor-list-content-box-card-img">
                  <img src={hosimg2} alt="img" />
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
                  </ul>
                  <a href="#" className="btn-w-i">
                    View Hospital Details <img src={btn} alt="img" />
                  </a>
                </div>
              </div>
            </div>
            <div className="doctor-list-content-box">
              <div className="doctor-list-content-box-card">
                <div className="doctor-list-content-box-card-img">
                  <img src={hosimg2} alt="img" />
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
                  </ul>
                  <a href="#" className="btn-w-i">
                    View Hospital Details <img src={btn} alt="img" />
                  </a>
                </div>
              </div>
            </div>
            <div className="doctor-list-content-box">
              <div className="doctor-list-content-box-card">
                <div className="doctor-list-content-box-card-img">
                  <img src={hosimg2} alt="img" />
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
                  </ul>
                  <a href="#" className="btn-w-i">
                    View Hospital Details <img src={btn} alt="img" />
                  </a>
                </div>
              </div>
            </div>
            <div className="doctor-list-content-box">
              <div className="doctor-list-content-box-card">
                <div className="doctor-list-content-box-card-img">
                  <img src={hosimg2} alt="img" />
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
                  </ul>
                  <a href="#" className="btn-w-i">
                    View Hospital Details <img src={btn} alt="img" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalList2;
