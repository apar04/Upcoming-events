import React from "react";
import { Link } from "react-router-dom";
import { FaMicrochip, FaBroadcastTower, FaRobot, FaSatellite, FaUserGraduate, FaTrophy, FaComments } from "react-icons/fa";

const ECE = () => {
  return (
    <div className="container mt-5 pt-4">
      <h2 className="text-center fw-bold mb-4" style={{ color: "#1e3a8a" }}>
        📡 Department of Electronics & Communication Engineering
      </h2>

      {/* Hero Section */}
      <div className="shadow-lg border-0 p-4 mb-5 text-center">
        <img 
          src="ece-bg.avif" 
          alt="ECE Department" 
          className="img-fluid rounded" 
          style={{ objectFit: "cover", height: "350px", width: "100%" }} 
        />
        <p className="mt-3" style={{ color: "#555" }}>
          Shaping the future of communication, embedded systems, and wireless technology.
        </p>
      </div>

      {/* Key Highlights */}
      <div className="row text-center mb-5">
        {[
          { icon: <FaUserGraduate size={40} style={{ color: "#ffd700" }} />, label: "95% Placement Rate" },
          { icon: <FaTrophy size={40} style={{ color: "#ffd700" }} />, label: "40+ Research Publications" },
          { icon: <FaMicrochip size={40} style={{ color: "#1e3a8a" }} />, label: "VLSI & Embedded Systems Expertise" },
          { icon: <FaBroadcastTower size={40} style={{ color: "#1e3a8a" }} />, label: "IoT & Wireless Communication Labs" }
        ].map((item, index) => (
          <div key={index} className="col-md-3">
            <div className="p-3 border rounded shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
              {item.icon}
              <h5 className="mt-2">{item.label}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Vision & Mission */}
      <div className="mb-5">
        <h3 style={{ color: "#1e3a8a" }}>🌟 Vision</h3>
        <p className="text-muted">
          To be a global center of excellence in electronics, communication, and signal processing technologies.
        </p>
        <h3 style={{ color: "#1e3a8a" }}>🎯 Mission</h3>
        <ul className="text-muted">
          <li>Provide strong technical foundations in electronics, signal processing, and wireless communication.</li>
          <li>Encourage innovation in semiconductor, embedded, and IoT technologies.</li>
          <li>Collaborate with industry for hands-on exposure to real-world applications.</li>
          <li>Develop responsible engineers with a passion for research and development.</li>
        </ul>
      </div>

      {/* Career Paths */}
      <div className="mb-5">
        <h3 style={{ color: "#1e3a8a" }}>💼 Career Paths for ECE Graduates</h3>
        <ul className="text-muted">
          <li>📡 RF & Wireless Communication Engineer</li>
          <li>🔬 VLSI & Semiconductor Design Engineer</li>
          <li>🤖 Embedded Systems Developer</li>
          <li>🚀 Aerospace & Satellite Engineer</li>
          <li>💡 IoT & Automation Engineer</li>
        </ul>
      </div>

      {/* Placement Details */}
      <div className="mb-5">
        <h3 style={{ color: "#1e3a8a" }}>🎓 Placement Highlights</h3>
        <p className="text-muted">
          Our graduates are placed at leading companies like Qualcomm, Texas Instruments, Broadcom, Intel, and DRDO. 
          The placement cell offers internship opportunities, skill development sessions, and research collaborations.
        </p>
      </div>

      {/* Lab Facilities */}
      <div className="mb-5">
        <h3 style={{ color: "#1e3a8a" }}>🔬 Advanced Lab Facilities</h3>
        <div className="row g-4">
          {[
            "VLSI & Embedded Systems Lab",
            "Wireless Communication & RF Lab",
            "Internet of Things (IoT) Research Center",
            "AI & Signal Processing Lab",
            "Satellite & Aerospace Communication Lab"
          ].map((lab, index) => (
            <div key={index} className="col-md-4 text-center">
              <h5 className="fw-bold text-dark p-3 rounded shadow-sm" style={{ backgroundColor: "#ffd700" }}>{lab}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* Faculty Details */}
      <div className="mb-5">
        <h3 style={{ color: "#1e3a8a" }}>👨‍🏫 Distinguished Faculty Members</h3>
        <div className="row g-4">
          {[
            { name: "Dr. N. Ramesh", role: "HOD & Professor", img: "faculty8.avif", details: "Expert in VLSI & Embedded Systems with 20+ years of experience." },
            { name: "Prof. L. Sharma", role: "Associate Professor", img: "faculty9.avif", details: "RF & Wireless Communication specialist, published 30+ research papers." },
            { name: "Dr. P. Kumar", role: "Assistant Professor", img: "faculty10.avif", details: "IoT & Automation researcher, industry collaborations with Bosch & Siemens." },
            { name: "Prof. A. Das", role: "Assistant Professor", img: "faculty11.avif", details: "AI & Signal Processing expert, leading machine learning applications in communication." }
          ].map((faculty, index) => (
            <div key={index} className="col-md-3 text-center">
              <img 
                src={faculty.img} 
                alt={faculty.name} 
                className="img-fluid rounded-circle mb-3" 
                style={{ width: "120px", height: "120px", objectFit: "cover", border: "4px solid #ffd700" }}
              />
              <h5 className="fw-bold mb-1">{faculty.name}</h5>
              <p className="text-muted mb-1">{faculty.role}</p>
              <small className="text-muted">{faculty.details}</small>
            </div>
          ))}
        </div>
      </div>

      {/* Student Testimonials */}
      <div className="mb-5">
        <h3 style={{ color: "#1e3a8a" }}>
          <FaComments /> What Our Students Say
        </h3>
        <div className="row g-4">
          {[ 
            { name: "Karthik B.", feedback: "The hands-on projects and strong industry ties helped me land a job at Qualcomm!", img: "std10.avif" },
            { name: "Sanjana R.", feedback: "Amazing faculty and research-driven learning prepared me for aerospace engineering.", img: "std2.avif" },
            { name: "Aditya P.", feedback: "The IoT lab and AI-driven projects helped me secure an internship at Siemens!", img: "std3.avif" }
          ].map((student, index) => (
            <div key={index} className="col-md-4 text-center">
              <img 
                src={student.img} 
                alt={student.name} 
                className="img-fluid rounded-circle mb-3" 
                style={{ width: "100px", height: "100px", objectFit: "cover", border: "3px solid #ffd700" }}
              />
              <h5 className="fw-bold mb-1 text-dark">{student.name}</h5>
              <p className="text-muted">"{student.feedback}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Now CTA */}
      <div className="text-center mt-4">
        <Link to="/apply" className="btn btn-lg px-5 py-2 shadow" style={{ backgroundColor: "#1e3a8a", color: "#fff", border: "2px solid #ffd700" }}>
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default ECE;
