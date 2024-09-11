import React from "react";
import { Link } from "react-router-dom";
import banner from "../img/banner.png";

const OtherTopBanner = (props) => {
  return (
    <div className="other-banner" style={{ background: `url(${banner})` }}>
      <div className="container">
        <div className="banner-nav" style={{ display: `${props.display}` }}>
          <Link to={props.pageBackLink}>{props.pageBack}</Link>
          <p>/ {props.pageName}</p>
        </div>
        <h2>{props.pageTitle}</h2>
      </div>
    </div>
  );
};

export default OtherTopBanner;
