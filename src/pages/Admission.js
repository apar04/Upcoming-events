import React from "react";
import { FaCalendarAlt, FaCheckCircle, FaInfoCircle, FaUserGraduate } from "react-icons/fa";
import {Link, useNavigate } from "react-router-dom";
import "animate.css";

const Admission = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5 pt-4">
      {/* Header Section */}
      <div className="text-center mb-5 animate__animated animate__fadeInDown">
        <h1 className="fw-bold" style={{ color: "#1e3a8a" }}>🎓 Admission Overview - 2024-2025</h1>
        <p className="text-muted">Your journey to excellence begins here! Join us to unlock your potential and achieve academic success.</p>
        <hr className="w-50 mx-auto" style={{ borderTop: "3px solid #ffd700" }} />
      </div>

      {/* About the College */}
      <div className="text-center mb-4 animate__animated animate__fadeInUp">
        <p className="lead text-dark" style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "auto", lineHeight: "1.6" }}>
          Prestige College is a hub of academic excellence, innovation, and holistic development. With a rich history of nurturing bright minds,
          we provide students with cutting-edge resources, experienced faculty, and a dynamic learning environment. Our commitment to excellence
          ensures that every student embarks on a journey of knowledge, leadership, and success.
        </p>
      </div>

      {/* Hero Section */}
      <div className="position-relative overflow-hidden">
        <img
          src="admission-bg.avif"
          alt="Admissions"
          className="img-fluid w-100 rounded"
          style={{ objectFit: "cover", height: "350px" }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center bg-dark bg-opacity-50 p-4 rounded">
          <h3 className="fw-bold">Unlock Your Future at Prestige College</h3>
          <p>Explore world-class education, innovative research, and outstanding career opportunities.</p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="my-5 text-center animate__animated animate__fadeInUp">
        <h2 style={{ color: "#1e3a8a" }}>Why Choose Us?</h2>
        <p className="text-muted">We offer a holistic education experience, combining academic excellence with practical exposure. Our world-class faculty, advanced infrastructure, and global collaborations ensure that students receive unparalleled learning opportunities.</p>
        <div className="d-flex justify-content-center gap-4 flex-wrap mt-4">
          {[{ icon: <FaUserGraduate size={50} />, text: "100% Placement Assistance" },
            { icon: <FaCheckCircle size={50} />, text: "Globally Recognized Curriculum" },
            { icon: <FaCalendarAlt size={50} />, text: "Flexible Learning Options" },
            { icon: <FaInfoCircle size={50} />, text: "State-of-the-Art Facilities" }
          ].map((item, index) => (
            <div key={index} className="p-3 rounded shadow-lg text-center bg-light" style={{ minWidth: "220px" }}>
              {item.icon}
              <p className="mt-2 fw-bold">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Admission Process Timeline */}
      <div className="mb-5">
        <h2 className="text-center" style={{ color: "#1e3a8a" }}>📌 Admission Process</h2>
        <p className="text-center text-muted">We ensure a seamless and efficient admission process, guiding you every step of the way. Our dedicated support team is available to assist you in making informed decisions about your future.</p>
        <div className="d-flex flex-column align-items-center position-relative animate__animated animate__fadeInLeft" style={{ transition: "all 0.5s ease-in-out" }}>
          {["Fill Online Application - Provide accurate personal and academic details.",
            "Upload Documents - Submit required mark sheets, ID proof, and other necessary files.",
            "Entrance Exam (if applicable) - Prepare and appear for the required test.",
            "Confirm Admission & Pay Fees - Secure your seat by completing payment and formalities."
          ].map((step, index) => (
            <div key={index} className="d-flex align-items-center gap-3 mb-3 w-75">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
                {index + 1}
              </div>
              <p className="m-0 fw-bold text-dark" style={{ flex: 1 }}>{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Dates Section */}
      <div className="text-center mb-5">
        <h2 style={{ color: "#1e3a8a" }}>📅 Key Admission Dates</h2>
        <p className="text-muted">Mark your calendar with the key admission dates to ensure a smooth application process.</p>
        <div className="d-flex flex-column align-items-center gap-2 mt-3">
          {[{ event: "Application Start Date", date: "April 1, 2024" },
            { event: "Last Date for Application", date: "June 30, 2024" },
            { event: "Entrance Exam", date: "July 15, 2024" },
            { event: "Counseling & Seat Allotment", date: "July 25 - Aug 5, 2024" }
          ].map((item, index) => (
            <div key={index} className="px-4 py-2 rounded shadow-sm bg-light w-50 text-dark text-center">
              <strong>{item.event}:</strong> {item.date}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
   
      <div className="text-center mb-5">
      <h4 className="mb-3 text-muted">Need Help? Contact our admission team for guidance.</h4>
      <p>
        📞 Call: <strong>+91 98765 43210</strong> | ✉ Email: <strong>admissions@prestigecollege.edu</strong>
      </p>
      <button
        className="btn btn-lg px-5 py-2 shadow-lg"
        style={{ backgroundColor: "#1e3a8a", color: "#fff", border: "2px solid #ffd700" }}
        onClick={() => navigate("/apply")} // Navigate to Apply.js
      >
        Apply Now
      </button>
    </div>
    </div>
  );
};

export default Admission;
