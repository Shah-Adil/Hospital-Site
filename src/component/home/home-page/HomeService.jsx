import React from "react";

import img1 from "../home-page/img/group.png";
import img2 from "../home-page/img/group-1.png";
import img3 from "../home-page/img/group-2.png";
import img4 from "../home-page/img/group-3.png";
import img5 from "../home-page/img/group-4.png";
import img6 from "../home-page/img/group-5.png";

const HomeService = () => {
  const homeServiceData = [
    {
      serviceImg: img1,
      serviceText: " Video Consultant",
    },
    {
      serviceImg: img2,
      serviceText: "Second Opinion",
    },
    {
      serviceImg: img3,
      serviceText: "Medical Travel",
    },
    {
      serviceImg: img4,
      serviceText: "Treatment Package",
    },
    { serviceImg: img5, serviceText: "After Care" },
    {
      serviceImg: img6,
      serviceText: "Medical Rehab",
    },
  ];

  const fontText = {
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "25px",
    color: "#292A2E",
  };
  const boxStyle = {
    background: "#FFFFFF",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.05)",
    borderRadius: "20px",
    padding: "30px 50px",
  };

  return (
    <div className="home-service py-5">
      <div className="section-header text-center">
        <h5>Our Products</h5>
        <h2>Services We Offer</h2>
      </div>
      <div className="container">
        <div className="home-service-content    ">
          {homeServiceData.map((item, index) => {
            return (
              <div
                key={index}
                className="home-service-box   text-center "
                style={boxStyle}
              >
                <div className="home-service-box-img mb-3">
                  <img
                    style={{ width: "67px" }}
                    src={item.serviceImg}
                    alt={item.serviceText}
                  />
                </div>
                <div className="home-service-box-text">
                  <h5 style={fontText}>{item.serviceText}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeService;
