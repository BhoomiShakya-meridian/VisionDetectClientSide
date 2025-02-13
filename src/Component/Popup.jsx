import React from "react";
import ReactDOM from "react-dom";
import Verification from "../Assest/Verification.webp";
import anomaly from "../Assest/anomaly.webp";
import { useNavigate } from "react-router-dom";
import anpr from "../Assest/anpr.webp";
import "../Style/Popup.css"; // Ensure this file includes full-screen styles

const Popup = ({ togglePopup }) => {
  const navigate = useNavigate();

  return ReactDOM.createPortal(
    <div className="popup-overlay" onClick={togglePopup}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={togglePopup}>
          &times;
        </button>
        <div className="popup-contents">
          <h2>VisionDetect.ai</h2>
          <p>Pick one for your live demo...</p>
          <div className="popup-options">
            <div className="option">
              <img src={Verification} alt="Face Detection" />
              <button onClick={() => navigate("/face-registrationTrial")}>
                Face Verification & Recognition
              </button>
            </div>
            <div className="option">
              <img src={anomaly} alt="Anomaly Detection" />
              <button onClick={togglePopup}>Anomaly Detection</button>
            </div>
            <div className="option">
              <img src={anpr} alt="License Plate Detection" />
              <button onClick={togglePopup}>ANPR Detection</button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body // This renders the popup outside of the Aboutus container
  );
};

export default Popup;
