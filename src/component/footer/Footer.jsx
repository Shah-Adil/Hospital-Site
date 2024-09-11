import React from "react";
import logo from "../../img/logo.png";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FiTwitter } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="container">
        <div className="footer-content">
          <div className="footer-box">
            <img src={logo} alt="logo" />
            <div className="footer-contact-box">
              <CiLocationOn />
              <span>
                Building No. 43, Third Floor, above custom shop Bharat Nagar,
                New Delhi, 110025
              </span>
            </div>
            <div className="footer-contact-box">
              <FiPhoneCall />
              <span>+91-9958087437 / 9911004958</span>
            </div>
            <div className="footer-contact-box">
              <AiOutlineMail />
              <span>spaninfo@tripoheal.comspan</span>
            </div>
            <div className="footer-social">
              <a href="#">
                <SlSocialFacebook />
              </a>
              <a href="#">
                <PiInstagramLogoLight />
              </a>
              <a href="#">
                <FiTwitter />
              </a>
            </div>
          </div>
          <div className="footer-box">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
              <li>
                <a href="#">Kidney Transplant in India</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 Tripoheal. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
