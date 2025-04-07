import React from "react";
import { Link } from "react-router-dom";
import { FaCogs, FaWrench, FaRocket, FaCar, FaUserGraduate, FaTrophy, FaIndustry, FaQuoteLeft } from "react-icons/fa";

const BTechMech = () => {
  return (
    <div className="container mt-5 pt-4">
      <h2 className="text-center fw-bold mb-4" style={{ color: "#1e3a8a" }}>
        ⚙️ Department of Mechanical Engineering
      </h2>

      {/* Hero Section */}
      <div className="shadow-lg border-0 p-4 mb-5 text-center" style={{ backgroundColor: "#f8f9fa" }}>
        <img 
          src="mech-bg.webp" 
          alt="Mechanical Engineering Department" 
          className="img-fluid rounded" 
          style={{ objectFit: "cover", height: "350px", width: "100%" }} 
        />
        <p className="mt-3" style={{ color: "#555", fontSize: "18px" }}>
          Shaping the future with innovation in design, manufacturing, and automation.
        </p>
      </div>

      {/* Why Choose Us? */}
      <div className="mb-5 text-center">
        <h3 style={{ color: "#1e3a8a" }}>🔥 Why Choose Mechanical Engineering?</h3>
        <p className="text-muted">Our department offers a cutting-edge curriculum, world-class research, and hands-on training to prepare students for real-world challenges.</p>
        <div className="row text-center">
          {[ 
            "State-of-the-art laboratories with advanced simulation tools",
            "Industry-oriented curriculum designed by experts",
            "Collaboration with top automotive and aerospace companies",
            "Global research opportunities in sustainable engineering"
          ].map((reason, index) => (
            <div key={index} className="col-md-6 mt-3">
              <div className="p-3 border rounded shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                <h5 style={{ color: "#1e3a8a" }}>{reason}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Collaborations */}
      <div className="mb-5">
        <h3 style={{ color: "#1e3a8a" }}>🏭 Industry Collaborations</h3>
        <p className="text-muted">We have strong partnerships with leading industries to provide students with internships, live projects, and placement opportunities.</p>
        <div className="text-center">
          <FaIndustry size={50} style={{ color: "#ffd700" }} />
          <h5 className="mt-2" style={{ color: "#1e3a8a" }}>Collaborations with Tesla, Boeing, ISRO, and more.</h5>
        </div>
      </div>

      {/* Student Achievements */}
      <div className="mb-5">
        <h3 style={{ color: "#1e3a8a" }}>🏆 Student Achievements</h3>
        <ul className="text-muted">
          <li>🥇 Won National Robotics Championship 2024</li>
          <li>🚀 Designed and launched a prototype Mars Rover</li>
          <li>⚡ Developed an electric vehicle battery with 30% improved efficiency</li>
          <li>🏅 Published 50+ research papers in international journals</li>
        </ul>
      </div>

      {/* Testimonials */}
      <div className="mb-5">
        <h3 style={{ color: "#1e3a8a" }}>💬 What Our Students Say</h3>
        <div className="row">
          {[ 
            { quote: "The hands-on experience and industry exposure have been phenomenal!", name: "- A. Patel, 2023 Graduate" },
            { quote: "I got placed at Boeing thanks to the incredible faculty and training!", name: "- K. Sharma, 2024 Graduate" }
          ].map((testimonial, index) => (
            <div key={index} className="col-md-6">
              <div className="p-3 border rounded shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                <FaQuoteLeft size={20} style={{ color: "#1e3a8a" }} />
                <p className="mt-2">{testimonial.quote}</p>
                <h6 style={{ color: "#1e3a8a" }}>{testimonial.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="text-center mt-4">
              <Link to="/apply" className="btn btn-lg px-5 py-2 shadow" style={{ backgroundColor: "#1e3a8a", color: "#fff", border: "2px solid #ffd700" }}>
                Apply Now
              </Link>
            </div>
    </div>
  );
};

export default BTechMech;
