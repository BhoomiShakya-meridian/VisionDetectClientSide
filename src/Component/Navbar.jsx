import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css"; // Import the CSS file for styling
import dropdwnimg from "../Assest/dropdwnimg.png";
import ContactUs from "./ContactUs";

const Navbar = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const handleMouseEnter = (type) => {
    if (type === "products") setShowProducts(true);
    if (type === "solutions") setShowSolutions(true);
  };

  const handleMouseLeave = (type) => {
    if (type === "products") setShowProducts(false);
    if (type === "solutions") setShowSolutions(false);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="btn-shine">
            <span className="btn-shine-text">VisionDetect.ai</span>
            <span className="btn-shine-overlay">VisionDetect.ai</span>
          </a>
        </div>

        <div className="navbar-center">
          <ul className="navbar-links">
            <li
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={() => handleMouseLeave("products")}
            >
              <a href="#product">Products</a>
              {showProducts && (
                <div
                  className="dropdown-menu product-dropdown"
                  onMouseEnter={() => setShowProducts(true)}
                  onMouseLeave={() => setShowProducts(false)}
                >
                  <div className="dropdown-left">
                    <ul>
                      <li className="blue-text">
                        <Link to="/face-verification">Face Verification & Registration</Link>
                        {/* blue in color */}
                      </li>
                      <li className="blue-text">
                        <Link to="/anomaly-detection"> Anomaly Detection </Link>
                        {/* blue in color */}
                      </li>
                      <li className="blue-text">
                        <Link to="/anpr"> Automatic Number Plate Detection </Link>
                        {/* blue in color */}
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown-right">
                    <img
                      src={dropdwnimg}
                      alt="Product Visual"
                      className="dropdown-image"
                    />
                  </div>
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={() => handleMouseLeave("solutions")}
            >
              <a href="#solution">Solutions</a>
              {showSolutions && (
                <div
                  className="dropdown-menu solution-dropdown"
                  onMouseEnter={() => setShowSolutions(true)}
                  onMouseLeave={() => setShowSolutions(false)}
                >
                  <div className="dropdown-left">
                    <ul>
                      <li className="blue-text">
                        <Link to="/face-verification">Face Verification & Registration</Link>
                        {/* blue in color */}
                      </li>
                      <ul>
                        <li>
                          <Link to="/exam-verification"> Exam Face Registration & Verification </Link>
                        </li>
                        <li>
                          <Link to="/face-kyc">Face KYC </Link>
                        </li>
                        <li>
                          <Link to="/apartment-verification">Apartment Entry Verification </Link>
                        </li>
                        <li>
                          <Link to="/face-ticketing">Face Based Ticketing</Link>
                        </li>
                      </ul>

                      <li className="blue-text">
                        <Link to="/anomaly-detection"> Anomaly Detection </Link>
                        {/* blue in color */}
                      </li>
                      <ul>
                        <li>
                          <Link to="/weapon-detection"> Weapon Detection</Link>
                        </li>
                        <li>
                          <Link to="/mobile-detection"> Mobile Phone Detection </Link>
                        </li>
                        <li>
                          <Link to="/mask-detection"> Mask Detection  </Link> </li>
                        <li>
                          <Link to="/helmet-detection"> Helmet Detection </Link> </li>
                      </ul>

                      <li className="blue-text">
                        <Link to="/anpr"> Automatic Number Plate Detection </Link>
                        {/* blue in color */}
                      </li>
                      <ul>
                        <li>
                          <Link to="/vehicle-authentication"> Automated Vehicle Authentication </Link>
                        </li>
                        <li>
                          <Link to="/automated-management"> Automated Billing & Slot Management </Link>
                        </li>
                      </ul>
                    </ul>

                    {/* <hr className="dropdown-divider" /> */}
                  </div>
                  <div className="dropdown-right">
                    <ul>
                      <li className="blue-text">Industry Solutions</li>
                      <ul>
                        <li>
                          <Link to="/education-industry">Education Industry </Link>
                        </li>
                        <li>
                          <Link to="/manufacturing-industry">Manufacturing Industry </Link>
                        </li>
                        <li>
                          <Link to="/services-industry">Service Industry </Link>
                        </li>
                        <li>
                          <Link to="/trading-industry">Trading & Distribution Industry  </Link>
                        </li>
                        <li>
                          <Link to="/realestate-industry">Contracting & Real-Estate Industry </Link>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
              )}
            </li>
            <li><a href="#usecases">Use Cases</a></li>
            <li>
              <Link to="/technical-corner">Tech Info </Link>
              <Link to="">View Pricing </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <button className="explore-button" onClick={toggleForm} >Contact Us</button>


        </div>
      </nav>

      {/* Contact Info Below Navbar */}
      <div className="contact-info">
        <p>
          Contact us here for customised guidance: +91 xxxxxxxxxx or email us at
          xxxx@onmeridian.com
        </p>
      </div>
      {showForm && (
        <ContactUs onClose={toggleForm} />
      )}

    </div>
  );
};

export default Navbar;
