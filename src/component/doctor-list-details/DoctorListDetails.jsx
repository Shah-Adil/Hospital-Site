import React from "react";
import OtherTopBanner from "../OtherTopBanner";

import docImg from "../../img/doc111.png";
import verified from "../../img/verified.png";
import { FaRegBuilding } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { PiShoppingBagOpenBold } from "react-icons/pi";

const DoctorListDetails = () => {
  return (
    <div>
      <OtherTopBanner display="none" />
      <div className="container">
        <div className="doctor-list-content-box mt-5">
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
              <div className="doctor-list-btn">
                <a href="#"> Book Your Consult</a>
                <a href="#">View Profile</a>
              </div>
            </div>
            <div className="distant-span">1.2KM</div>
          </div>
        </div>

        <div className="bio-content my-5">
          <div className="bio-content-leff">
            <div className="bio-box">
              <h3>Biography</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt. Risus commodo viverra maecenas accumsan lacus vel
                facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt. Read More
              </p>
              <a href="#">Read More</a>
            </div>
            <div className="bio-box">
              <h3>Education</h3>

              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
              </ul>
            </div>
            <div className="bio-box">
              <h3>Experience</h3>

              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
              </ul>
            </div>
            <div className="bio-box">
              <h3>Experience</h3>

              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
              </ul>
            </div>
            <div className="bio-box">
              <h3>Experience</h3>

              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit, in!
                </li>
              </ul>
            </div>
          </div>
          <div className="bio-content-right">
            <form action="#">
              <h4>Book your appointment</h4>
              <small>We will confirm your appointment within 2 hours</small>
              <div className="bio-input">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  name="Name"
                  id="name"
                  placeholder="Full Name"
                />
              </div>
              <div className="bio-input">
                <label htmlFor="email">Email Address*</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="bio-input">
                <label htmlFor="Department">Department*</label>
                <select name="Department" id="Department">
                  <option value="Please Select">Please Select</option>
                  <option value="Please Select">Please Select</option>
                </select>
              </div>
              <div className="bio-input">
                <label htmlFor="Time">Time*</label>
                <select name="Time" id="Time">
                  <option value="5:00 Available">5:00 Available</option>
                  <option value="5:00 Available">5:00 Available</option>
                </select>
              </div>

              <button type="submit"> Book Your Consult</button>
            </form>
          </div>
        </div>

        <div className="similiar-doctor mb-5">
          <div className="container">
            <div className="section-header text-center">
              <h5>OUR DOCTERS</h5>
              <h2>Similar Telemedicine Doctors</h2>
            </div>
            <div className="doctor-list-content-box ">
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
                  <div className="doctor-list-btn">
                    <a href="#"> Book Your Consult</a>
                    <a href="#">View Profile</a>
                  </div>
                </div>
                <div className="distant-span">1.2KM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorListDetails;
