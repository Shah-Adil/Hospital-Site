import React from "react";
import bannerside from "../../../img/image 22.png";
import { BsSearch } from "react-icons/bs";

const HomeTopBanner = () => {
  return (
    <div className="HomeTopBanner">
      <div className="container">
        <div className="HomeTopBannerContent">
          <div className="HomeTopBannerContentText">
            <h5>Welcome to Tripoheal</h5>
            <h2>
              Get best Treatment Health <span>Travel Platform</span>
            </h2>
            <h4>Find the best doctors across the world</h4>
            <form action="#">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search disease, surgeons or hospital"
              />
              <button type="submit">
                <BsSearch />
              </button>
            </form>
            <p>
              Treatments for Neuro & Spine, IVF & Gyne, Cardiac, Urology,
              Gastro, Transplants and more
            </p>
            <a href="#">Explore Medical</a>
          </div>
          <div className="HomeTopBannerContentImg">
            <img src={bannerside} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopBanner;
