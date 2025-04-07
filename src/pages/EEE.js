import React from "react";
import { Link } from "react-router-dom";
import { FaBolt, FaMicrochip, FaNetworkWired, FaTools, FaUserGraduate, FaTrophy, FaComments } from "react-icons/fa";

const BTechEEE = () => {
  return (
    <div className="container mt-5 pt-4">
      <h2 className="text-center fw-bold mb-4" style={{ color: "#1e3a8a" }}>
        ⚡ Department of Electrical & Electronics Engineering
      </h2>

      {/* Hero Section */}
      <div className="shadow-lg border-0 p-4 mb-5 text-center">
        <img 
          src="eee-bgg.avif" 
          alt="EEE Department" 
          className="img-fluid rounded" 
          style={{ objectFit: "cover", height: "350px", width: "100%" }} 
        />
        <p className="mt-3" style={{ color: "#555" }}>
          Powering the world through innovation in electrical systems, renewable energy, and automation.
        </p>
      </div>

      {/* Key Highlights */}
      <div className="row text-center mb-5">
        {[
          { icon: <FaUserGraduate size={40} style={{ color: "#ffd700" }} />, label: "95% Placement Rate" },
          { icon: <FaTrophy size={40} style={{ color: "#ffd700" }} />, label: "40+ Research Publications" },
          { icon: <FaMicrochip size={40} style={{ color: "#1e3a8a" }} />, label: "IoT & Embedded Systems Excellence" },
          { icon: <FaBolt size={40} style={{ color: "#1e3a8a" }} />, label: "Industry Collaboration with Power Giants" }
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
          To be a globally recognized center of excellence in Electrical and Electronics Engineering,
          driving innovation in sustainable energy, automation, and smart technologies. We aim to empower students
          with cutting-edge knowledge and hands-on expertise, fostering a new generation of engineers capable of
          addressing complex challenges in power systems, renewable energy, and industrial automation.
          Our department is committed to promoting research, ethical engineering, and interdisciplinary collaboration
          to shape the future of technology-driven societies.
        </p>
        <h3 style={{ color: "#1e3a8a" }}>🎯 Mission</h3>
        <ul className="text-muted">
          <li>Provide industry-relevant education in power electronics, automation, and control systems.</li>
          <li>Promote cutting-edge research in renewable energy, AI-driven electrical systems, and IoT-enabled smart grids.</li>
          <li>Develop skilled professionals through experiential learning, hands-on projects, and industry collaborations.</li>
          <li>Foster ethical and socially responsible engineering practices for a sustainable future.</li>
        </ul>
      </div>

      {/* Career Paths */}
      <div className="mb-5">
        <h3 style={{ color: "#1e3a8a" }}>💼 Career Paths for EEE Graduates</h3>
        <ul className="text-muted">
          <li>⚡ Power Systems Engineer</li>
          <li>🏭 Electrical Design Engineer</li>
          <li>🔌 Renewable Energy Consultant</li>
          <li>🛠️ Embedded Systems Engineer</li>
          <li>💡 Automation & Control Engineer</li>
        </ul>
      </div>

      {/* Placement Details */}
      <div className="mb-5">
        <h3 style={{ color: "#1e3a8a" }}>🎓 Placement Highlights</h3>
        <p className="text-muted">
          Our graduates secure placements at top-tier companies like Siemens, ABB, Schneider Electric, and Tesla. The placement cell provides skill development through hands-on projects and industry mentorship.
        </p>
      </div>

      {/* Lab Facilities */}
      <div className="mb-5">
        <h3 style={{ color: "#1e3a8a" }}>🔬 Advanced Lab Facilities</h3>
        <div className="row g-4">
          {[
            "Power Electronics & Smart Grid Lab",
            "Embedded Systems & IoT Innovation Center",
            "Renewable Energy Research Hub",
            "High Voltage Engineering Lab",
            "Automation & Robotics Lab"
          ].map((lab, index) => (
            <div key={index} className="col-md-4 text-center">
              <h5 className="fw-bold text-dark p-3 rounded shadow-sm" style={{ backgroundColor: "#ffd700" }}>{lab}</h5>
            </div>
          ))}
        </div>
      </div>

     

       {/* Industry Collaborations */}
       <div className="mb-5 text-center">
        <h3 style={{ color: "#1e3a8a" }}>🏭 Industry Collaborations</h3>
        <p className="text-muted">We partner with global leaders in energy, automation, and electronics.</p>
        <div className="row g-4">
          {["Siemens", "ABB", "Schneider Electric", "Tesla", "General Electric"].map((company, index) => (
            <div key={index} className="col-md-3 text-center">
              <h5 className="fw-bold text-dark p-3 rounded shadow-sm" style={{ backgroundColor: "#ffd700" }}>{company}</h5>
            </div>
          ))}
        </div>
      </div>

       {/* Student Achievements */}
       <div className="mb-5 text-center">
        <h3 style={{ color: "#1e3a8a" }}>🏆 Student Achievements</h3>
        <ul className="list-unstyled text-muted">
          <li>🚀 Winner of National Level Robotics Challenge 2024</li>
          <li>🌱 Developed AI-powered Renewable Energy Optimization System</li>
          <li>⚡ Published 20+ IEEE Research Papers in Power Systems</li>
          <li>💡 Internship offers at Fortune 500 companies</li>
        </ul>
      </div>

       {/* Testimonials */}
       <div className="mb-5 text-center">
        <h3 style={{ color: "#1e3a8a" }}>💬 What Our Students Say</h3>
        <div className="row g-4">
          {[{
            name: "Aryan Sharma",
            text: "The best decision I made! The faculty and hands-on training helped me land my dream job at Siemens."
          }, {
            name: "Neha Rajan",
            text: "The EEE department provided the perfect blend of academics and practical learning. Highly recommend!"
          }].map((testimonial, index) => (
            <div key={index} className="col-md-6 text-center">
              <div className="p-3 border rounded shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                <FaComments size={30} style={{ color: "#1e3a8a" }} />
                <p className="mt-2 text-muted">"{testimonial.text}"</p>
                <h6 className="fw-bold text-dark">- {testimonial.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Faculty Details */}
      <div className="mb-5">
        <h3 style={{ color: "#1e3a8a" }}>👨‍🏫 Distinguished Faculty Members</h3>
        <div className="row g-4">
          {[
            { name: "Dr. V. Kumar", role: "HOD & Professor", img: "faculty5.avif", details: "Expert in Smart Grid & Renewable Energy with 20+ years of experience." },
            { name: "Prof. P. Sharma", role: "Associate Professor", img: "faculty2.avif", details: "Specialist in Embedded Systems and IoT solutions." },
            { name: "Dr. L. Lia", role: "Assistant Professor", img: "faculty4.avif", details: "Power Electronics and Industrial Automation expert." },
            { name: "Prof. A. Aadrika", role: "Assistant Professor", img: "faculty1.avif", details: "Control Systems & Robotics research lead." }
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

      {/* Contact */}
      <div className="text-center mt-4">
  <Link to="/apply" className="btn btn-lg px-5 py-2 shadow" style={{ backgroundColor: "#1e3a8a", color: "#fff", border: "2px solid #ffd700" }}>
    Apply Now
  </Link>
</div>
    </div>
  );
};

export default BTechEEE;
