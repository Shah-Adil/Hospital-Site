import React from "react";
import HomeTopBanner from "./home-page/HomeTopBanner";
import HomeService from "./home-page/HomeService";
import HomeTreat from "./home-page/HomeTreat";
import HomeChosse from "./home-page/HomeChosse";
import HomeFeatured from "./home-page/HomeFeatured";
import HomeNetwork from "./home-page/HomeNetwork";
import HomeDoc from "./home-page/HomeDoc";
import HomeReview from "./home-page/HomeReview";
import HomeReviewSat from "./home-page/HomeReviewSat";
import HomeNews from "./home-page/HomeNews";
import HomeFaq from "./home-page/HomeFaq";
import HomeCta from "./home-page/HomeCta";
import frameImg from "./home-page/img/Frame 588.png";

const Home = () => {
  return (
    <div>
      <HomeTopBanner />
      <HomeService />
      <HomeTreat />
      <HomeChosse />
      <HomeFeatured />
      <HomeNetwork />
      <HomeDoc />
      <HomeReview />
      <HomeReviewSat />
      <HomeNews />
      <HomeFaq />
      <div className="home-sur my-5">
        <div className="container">
          <div className="section-flex ">
            <div className="section-header">
              <h5>OUR DOCTERS</h5>
              <h2>Top Telemedicine Doctors</h2>
            </div>
            <img className="mt-5" src={frameImg} alt="img" />
          </div>
        </div>
      </div>
      <HomeCta />
    </div>
  );
};

export default Home;
