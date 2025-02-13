import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../Style/FaceVerification.css";
import facereg from "../../Assest/facereg.mp4";
import assistance from "../../Assest/assistance.webp";

const ExamVerification = () => {
  const [animatePage, setAnimatePage] = useState(false);

  // Refs for sections
  const solutionRef = useRef(null);
  const importanceRef = useRef(null);
  const worksRef = useRef(null);
  const applicationRef = useRef(null);
  const useitRef = useRef(null);


  const [isInViewSolution, setIsInViewSolution] = useState(false);
  const [isInViewImportance, setIsInViewImportance] = useState(false);
  const [isInViewWorks, setIsInViewWorks] = useState(false);
  const [isInViewApplication, setIsInViewApplications] = useState(false);
  const [isInViewUseIt, setIsInViewUseIt] = useState(false);


  useEffect(() => {
    setAnimatePage(true); // Trigger animation after page loads

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === solutionRef.current) {
            setIsInViewSolution(true);
          } else if (entry.target === importanceRef.current) {
            setIsInViewImportance(true);
          } else if (entry.target === worksRef.current) {
            setIsInViewWorks(true);
          }
          else if (entry.target === applicationRef.current) {
            setIsInViewApplications(true);
          }
          else if (entry.target === useitRef.current) {
            setIsInViewUseIt(true);
          }
        }
      });
    }, { threshold: 0.2 }); // Trigger when 20% of the section is visible

    if (solutionRef.current) observer.observe(solutionRef.current);
    if (importanceRef.current) observer.observe(importanceRef.current);
    if (worksRef.current) observer.observe(worksRef.current);
    if (applicationRef.current) observer.observe(applicationRef.current);
    if (useitRef.current) observer.observe(useitRef.current);

    return () => {
      if (solutionRef.current) observer.unobserve(solutionRef.current);
      if (importanceRef.current) observer.unobserve(importanceRef.current);
      if (worksRef.current) observer.unobserve(worksRef.current);
      if (applicationRef.current) observer.unobserve(applicationRef.current);
      if (useitRef.current) observer.unobserve(useitRef.current);
    };
  }, []);

  return (
    <div className={`face-verification ${animatePage ? "page-animate" : ""}`}>
      <div className="hero-section">
        <div className="back-arrow" onClick={() => window.history.back()}>
          &#8592;
        </div>
        <video className="hero-video" autoPlay loop muted src={facereg} />
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="content-left">
          <h1>Exam Face Registration & Verification</h1>
        </div>
        <div className="content-right">
          <button className="action-btn">Request a demo</button>
        </div>
      </div>

      {/* Solutions List */}
      <div className="solutions-list">
        <ul>
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
      <div
        className={`solution-paragraph ${isInViewSolution ? 'animate__animated animate__fadeInUp' : ''}`}
        ref={solutionRef}
        style={{ opacity: isInViewSolution ? 1 : 0, transition: 'opacity 0.5s' }}
      >
        <p>
          <strong>What is Exam Face Registration & Verification?</strong>
          <br />
          <br />
          It is a system designed to authenticate students using facial recognition. It registers a student’s face as their unique identifier before the exam and verifies it during the exam to ensure only authorized candidates participate. Face recognition in exams ensures the authenticity of students, preventing unauthorized access and maintaining a high standard of fairness and accountability. Registration occurs before the exam, capturing the student’s face as their unique identifier, which is later verified during the exam, takes 1-2 seconds per verification, with a 99.9% accuracy rate.
        </p>
      </div>

      {/* Why is Exam Face Registration & Verification important */}
      <div
        className={`importance-section ${isInViewImportance ? 'animate__animated animate__fadeInUp' : ''}`}
        ref={importanceRef}
        style={{ opacity: isInViewImportance ? 1 : 0, transition: 'opacity 0.5s' }}
      >
        <h2>
          <span className="blue-text">Why is</span> Exam Face Registration & Verification <span className="blue-text">important</span> for your <span className="blue-text">institution?</span>
        </h2>
        <ul>
          <li>
            <strong>1. Impersonation Prevention: </strong>Ensures the registered student is the one taking the exam, safeguarding against proxy candidates.
          </li>
          <li>
            <strong>2. Accurate Attendance Tracking:</strong> Automates attendance logging, reducing errors and manual intervention.
          </li>
          <li>
            <strong>3. Streamlined Entry Process:</strong> Speeds up verification compared to traditional ID checks, avoiding congestion at exam centers.
          </li>
          <li>
            <strong>4. Exam Integrity:</strong> Eliminates fraudulent activities, ensuring assessments reflect the candidates’ true capabilities.
          </li>
          <li>
            <strong>5. Customizable for Remote Exams:</strong> Verifies students before and during online exams, maintaining exam standards.
          </li>
          <li>
            <strong>6. Future-Proof:</strong> Scalable for institutions with thousands of students, ensuring consistent performance.
          </li>
        </ul>
      </div>

      {/* How it Works */}
      <div
        className={`how-it-works ${isInViewWorks ? 'animate__animated animate__fadeInUp' : ''}`}
        ref={worksRef}
        style={{ opacity: isInViewWorks ? 1 : 0, transition: 'opacity 0.5s' }}
        id="works"
      >
        <h2>
          <span className="blue-text">How</span> it <span className="blue-text">Works?</span>
        </h2>
        <div className="how-it-works-steps">
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>1. Registration Phase:</strong>
              <li>Captures the student’s facial data before the exam.</li>
              <li>Stores this data securely as their unique identifier.</li>
            </p>
          </div>
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>2. Verification Phase:</strong>
              <li>Matches the real-time captured image with the stored facial data during exam entry.</li>
              <li>Provides results within 1-2 seconds with 99.9% accuracy.</li>
            </p>
          </div>
          <div className="step">
            <img src={assistance} alt="Voice assistance" />
            <p>
              <strong>3. Integration:</strong>
              <li>Can be adapted for both in-person and online proctored exams.</li>
            </p>
          </div>
        </div>
      </div>

      {/* Usage Scenarios */}
      <div
        className={`applications-section ${isInViewUseIt ? 'animate__animated animate__fadeInUp' : ''}`}
        ref={useitRef}
        style={{ opacity: isInViewUseIt ? 1 : 0, transition: 'opacity 0.5s' }}
      >

        <h2>
          <span className="blue-text">When</span> can it be <span className="blue-text">used?</span>
        </h2>
        <ul className="applications-list" id="face">
          <li>
            <strong>Registration:</strong> Before the exam, during the student onboarding or entry process.
          </li>
          <li>
            <strong>Verification:</strong> At the time of entry to the exam center or before starting an online proctored exam.
          </li>
        </ul>
      </div>

      {/* Applications */}
      <div
        className={`applications-section ${isInViewApplication ? 'animate__animated animate__fadeInUp' : ''}`}
        ref={applicationRef}
        style={{ opacity: isInViewApplication ? 1 : 0, transition: 'opacity 0.5s' }}
      >

        <h2>
          Where is it <span className="blue-text">Applications</span>
        </h2>
        <ul className="applications-list">
          <li>
            <strong>Physical Exam Centers: </strong> For in-person exams, the system is deployed at entry points.
          </li>
          <li>
            <strong>Remote/Online Exams: </strong> Integrated into online proctoring software to verify identity at the start and periodically during the exam.
          </li>
          <li>
            <strong>Scalable Institutions: </strong> Designed for small to large-scale institutions handling thousands of students.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExamVerification;
