import React, { useState } from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";

const Header = () => {
  const [nav, setNav] = useState(false);

  const navData = [
    { name: "Home", to: "/" },
    { name: "Doctor1", to: "doc1" },
    { name: "Doctor2", to: "/doc2" },
    { name: "DoctorDetails", to: "/doc3" },
    { name: "Hos1", to: "/hos1" },
    { name: "Hos2", to: "/hos2" },
    { name: "HosDetails", to: "/hos3" },
  ];

  return (
    <header>
      <div className="container">
        <h1>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </h1>
        <div className={`nav ${nav ? "active" : ""}`}>
          <ul>
            {navData.map((n, index) => {
              return (
                <li key={index}>
                  <Link to={n.to}>{n.name}</Link>
                </li>
              );
            })}

            <li>
              <a href="#" className="nav-btn-red">
                Get Medical Advise
              </a>
            </li>
          </ul>
        </div>
        <HiMenuAlt1 onClick={() => setNav(!nav)} className="nav-menu" />
      </div>
    </header>
  );
};

export default Header;
