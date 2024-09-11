import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import newsImg from "./img/img20.png";
import btn from "./img/btn.png";

const HomeNews = () => {
  return (
    <div className="home-news">
      <div className="container">
        <div className="section-header">
          <h5>Latest Blogs</h5>
          <h2>Stories, Tips & Latest News</h2>
        </div>

        <div className="home-news-content">
          <div className="home-news-content-left">
            <img src={newsImg} alt="img" />
            <div className="home-news-content-date">
              <AiOutlineCalendar />
              <small>APRIL 26, 2022</small>
            </div>
            <h3>
              Updated Covid boosters rolled out a month ago. Here's how many
              Americans have gotten them.
            </h3>
            <a href="#" className="btn-w-i">
              Read More <img src={btn} alt="img" />
            </a>
          </div>
          <div className="home-news-content-right">
            <div className="home-news-content-box">
              <img src={newsImg} alt="img" />

              <div className="home-news-text">
                <h3>
                  Updated Covid boosters rolled out a month ago. Here's how many
                  Americans have gotten them.
                </h3>
                <p>
                  Those who report weightlifting show reductions in all- cause
                  and cardiovascular disease-related mortality.
                </p>
              </div>
            </div>
            <div className="home-news-content-box">
              <img src={newsImg} alt="img" />

              <div className="home-news-text">
                <h3>
                  Updated Covid boosters rolled out a month ago. Here's how many
                  Americans have gotten them.
                </h3>
                <p>
                  Those who report weightlifting show reductions in all- cause
                  and cardiovascular disease-related mortality.
                </p>
              </div>
            </div>
            <div className="home-news-content-box">
              <img src={newsImg} alt="img" />

              <div className="home-news-text">
                <h3>
                  Updated Covid boosters rolled out a month ago. Here's how many
                  Americans have gotten them.
                </h3>
                <p>
                  Those who report weightlifting show reductions in all- cause
                  and cardiovascular disease-related mortality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
