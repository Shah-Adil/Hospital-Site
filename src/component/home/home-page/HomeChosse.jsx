import React from "react";
import cImg from "./img/Frame 515.png";

const HomeChosse = () => {
  return (
    <div className="home-chosse pb-4" style={{ background: "#F9FAFE" }}>
      <div className="container">
        <div className="section-header text-center">
          <h5>WHY</h5>
          <h2>Choose Tripoheal</h2>
        </div>
        <img src={cImg} alt={cImg} />
      </div>
    </div>
  );
};

export default HomeChosse;
