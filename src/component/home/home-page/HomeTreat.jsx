import React from "react";
import { BsHeartPulse } from "react-icons/bs";

const HomeTreat = () => {
  const treatBox = [
    { tImg: BsHeartPulse, tText: "Card" },
    { tImg: BsHeartPulse, tText: "Card" },
    { tImg: BsHeartPulse, tText: "Card" },
    { tImg: BsHeartPulse, tText: "Card" },
    { tImg: BsHeartPulse, tText: "Card" },
    { tImg: BsHeartPulse, tText: "Card" },
    { tImg: BsHeartPulse, tText: "Card" },
    { tImg: BsHeartPulse, tText: "Card" },
    { tImg: BsHeartPulse, tText: "Card" },
    { tImg: BsHeartPulse, tText: "Card" },
    { tImg: BsHeartPulse, tText: "Card" },
    { tImg: BsHeartPulse, tText: "Card" },
  ];

  const treatNavData = [
    { name: "All" },
    { name: "Data1" },
    { name: "Data2" },
    { name: "Data3" },
    { name: "Data4" },
    { name: "Data5" },
    { name: "Data6" },
    { name: "Data7" },
    { name: "Data8" },
  ];

  const homeTreatBoxText = {
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "18px ",
    marginTop: "10px",
    color: "#292A2E",
  };

  const homeTreatBox = {
    padding: "37px",

    background: "#FFFFFF",
    border: " 1px solid #EEEEEE",
    borderRadius: "10px",
  };

  const sideGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill , minmax(190px , 1fr ))",
    textAlign: "center",
    gap: "20px",
  };

  return (
    <div className="HomeTreat mb-5 pb-5">
      <div className="container">
        <div className="section-header text-center">
          <h5> FEATURED</h5>
          <h2>Treatments We Serve</h2>
        </div>

        <div className="home-treat-content row g-4 ">
          <div className="home-treat-content-left  col-lg-4  col-md-4 col-sm-12 ">
            <ul>
              {treatNavData.map((t, index) => {
                return (
                  <li key={index}>
                    <a href="#">{t.name} </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className="home-treat-content-rigth   col-lg-8 col-md-8 col-sm-12 "
            style={sideGrid}
          >
            {treatBox.map((item, index) => {
              return (
                <div
                  key={index}
                  className="home-treat-content-box   "
                  style={homeTreatBox}
                >
                  <item.tImg />
                  <h5 style={homeTreatBoxText}>
                    {item.tText} {index}
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTreat;
