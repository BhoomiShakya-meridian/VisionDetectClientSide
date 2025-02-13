import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../Style/FaceVerification.css";
import facereg from "../../Assest/facereg.mp4";
import assistance from "../../Assest/assistance.webp";

const FaceVerification = () => {
  const navigate = useNavigate();
  const [animatePage, setAnimatePage] = useState(false);
  const [isInViewImportance, setIsInViewImportance] = useState(false);
  const [isInViewHowItWorks, setIsInViewHowItWorks] = useState(false);
  const [isInViewApplications, setIsInViewApplications] = useState(false);
  
  const importanceRef = useRef(null);
  const howItWorksRef = useRef(null);
  const applicationsRef = useRef(null);

  useEffect(() => {
    setAnimatePage(true); // Trigger animation after page loads

    // Check if the sections are in view
    const handleScroll = () => {
      if (importanceRef.current) {
        const rect = importanceRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsInViewImportance(true);
        }
      }
      if (howItWorksRef.current) {
        const rect = howItWorksRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsInViewHowItWorks(true);
        }
      }
      if (applicationsRef.current) {
        const rect = applicationsRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsInViewApplications(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check if it's already in view

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBack = () => {
    console.log("Navigating to home page..."); // Debugging log
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className={`face-verification ${animatePage ? "page-animate" : ""}`}>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="back-arrow" onClick={handleBack}>
          &#8592;
        </div>
        <video className="hero-video" autoPlay loop muted src={facereg} />
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="content-left">
          <h1>Face Verification & Registration</h1>
        </div>
        <div className="content-right">
          <button className="action-btn">Request a demo</button>
        </div>
      </div>

      {/* Solutions List */}
      <div className="solutions-list">
        <ul>
          <li>
            <Link to="/exam-verification">
              <button className="solution-btn">
                Exam Face Registration & Verification
              </button>
            </Link>
          </li>
          <li>
            <Link to="/face-kyc">
              <button className="solution-btn">Face KYC (Know Your Customer)</button>
            </Link>
          </li>
          <li>
            <Link to="/apartment-verification">
              <button className="solution-btn">Apartment Entry Verification</button>
            </Link>
          </li>
          <li>
            <Link to="/face-ticketing">
              <button className="solution-btn">Face Based Ticketing</button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Paragraph Section */}
      <div className="solution-paragraph">
        <p>
          Face-based registration and verification is a cutting-edge system that uses facial recognition technology to authenticate individuals securely and efficiently. It captures and stores a person’s facial data as a unique identifier, enabling quick and accurate verification during critical processes.
        </p>
      </div>

      {/* Why is Face Registration & Verification Important */}
      <div 
        className={`importance-section ${isInViewImportance ? 'animate__animated animate__fadeInUp' : ''}`} 
        ref={importanceRef}
        style={{ opacity: isInViewImportance ? 1 : 0, transition: 'opacity 0.5s' }}
      >
        <h2>
          <span className="blue-text">Why is</span> Face Registration & Verification{" "}
          <span className="blue-text">important</span> for you? 
        </h2>
        <ul>
          <li>
            <strong>1. Enhanced Security:</strong> Prevents impersonation and fraud by verifying identity through biometrics.
          </li>
          <li>
            <strong>2. Speed & Efficiency:</strong> Streamlines authentication, saving time compared to manual checks.
          </li>
          <li>
            <strong>3. Accuracy:</strong> Delivers up to 99.9% precision, ensuring reliable verification.
          </li>
          <li>
            <strong>4. Versatility:</strong> Applicable for physical and remote scenarios, including exams, banking, e-commerce, and more.
          </li>
        </ul>
      </div>

      {/* How it Works */}
      <div 
        className={`how-it-works ${isInViewHowItWorks ? 'animate__animated animate__fadeInUp' : ''}`} 
        ref={howItWorksRef}
        style={{ opacity: isInViewHowItWorks ? 1 : 0, transition: 'opacity 0.5s' }}
      >
        <h2>
          <span className="blue-text">How</span> it <span className="blue-text">Works?</span>
        </h2>
        <div className="how-it-works-steps">
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>1. Registration:</strong> Captures and securely stores the individual's facial data.
            </p>
          </div>
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>2. Verification:</strong> Matches real-time facial images with stored data, providing results in seconds.
            </p>
          </div>
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>3. Integration:</strong> Adaptable for in-person and remote environments.
            </p>
          </div>
        </div>
      </div>

      {/* Applications */}
      <div 
        className={`applications-section ${isInViewApplications ? 'animate__animated animate__fadeInUp' : ''}`} 
        ref={applicationsRef}
        style={{ opacity: isInViewApplications ? 1 : 0, transition: 'opacity 0.5s' }}
      >
        <h2>
          <span className="blue-text">Applications</span>
        </h2>
        <ul className="applications-list">
          <li>
            <strong>Education:</strong> Exam centers and online proctoring.
          </li>
          <li>
            <strong>Banking:</strong> Remote KYC and account authentication.
          </li>
          <li>
            <strong>Government:</strong> Identity verification for public services.
          </li>
          <li>
            <strong>E-commerce:</strong> Secure onboarding for buyers and sellers.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FaceVerification;
