import React from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaCloud, FaDatabase, FaRobot, FaUserGraduate, FaTrophy, FaComments } from "react-icons/fa";

const BTechCSE = () => {
  return (
    <div className="container mt-5 pt-4">
      <h2 className="text-center fw-bold mb-4" style={{ color: "#1e3a8a" }}>
        🖥️ Department of Computer Science & Engineering
      </h2>

      {/* Hero Section */}
      <div className="shadow-lg border-0 p-4 mb-5 text-center">
        <img 
          src="cse-bg.avif" 
          alt="CSE Department" 
          className="img-fluid rounded" 
          style={{ objectFit: "cover", height: "350px", width: "100%" }} 
        />
        <p className="mt-3" style={{ color: "#555" }}>
          Driving innovation and excellence in software development, AI, and computing technologies.
        </p>
      </div>

      {/* Key Highlights */}
      <div className="row text-center mb-5">
        {[
          { icon: <FaUserGraduate size={40} style={{ color: "#ffd700" }} />, label: "99% Placement Rate" },
          { icon: <FaTrophy size={40} style={{ color: "#ffd700" }} />, label: "50+ Hackathon Wins" },
          { icon: <FaCloud size={40} style={{ color: "#1e3a8a" }} />, label: "AI & Cloud Computing Excellence" },
          { icon: <FaDatabase size={40} style={{ color: "#1e3a8a" }} />, label: "Industry Collaboration with Top MNCs" }
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
          To be a global leader in computer science education, research, and technological innovation.
        </p>
        <h3 style={{ color: "#1e3a8a" }}>🎯 Mission</h3>
        <ul className="text-muted">
          <li>Provide world-class education in software engineering, AI, and emerging technologies.</li>
          <li>Encourage research-driven learning to solve real-world problems.</li>
          <li>Foster industry partnerships to ensure employability and entrepreneurship.</li>
          <li>Develop responsible and ethical tech leaders for the future.</li>
        </ul>
      </div>

      {/* Career Paths */}
      <div className="mb-5">
        <h3 style={{ color: "#1e3a8a" }}>💼 Career Paths for CSE Graduates</h3>
        <ul className="text-muted">
          <li>💻 Software Developer / Engineer</li>
          <li>🤖 Artificial Intelligence / Machine Learning Engineer</li>
          <li>📊 Data Scientist / Big Data Analyst</li>
          <li>☁️ Cloud & DevOps Engineer</li>
          <li>🔐 Cybersecurity Specialist</li>
        </ul>
      </div>

      {/* Placement Details */}
      <div className="mb-5">
        <h3 style={{ color: "#1e3a8a" }}>🎓 Placement Highlights</h3>
        <p className="text-muted">
          Our graduates secure placements at top-tier companies like Google, Microsoft, Amazon, IBM, and Tesla. The placement cell ensures skill development through coding contests, interview prep, and mentorship programs.
        </p>
      </div>

      {/* Lab Facilities */}
      <div className="mb-5">
        <h3 style={{ color: "#1e3a8a" }}>🖥️ Advanced Lab Facilities</h3>
        <div className="row g-4">
          {[
            "AI & Deep Learning Research Lab",
            "Cybersecurity & Ethical Hacking Lab",
            "Cloud Computing & DevOps Center",
            "Blockchain & Web3 Innovation Hub",
            "Big Data & IoT Research Laboratory"
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
            { name: "Dr. R. Mehta", role: "HOD & Professor", img: "faculty4 copy.avif", details: "Expert in AI & Robotics with 25+ years of experience." },
            { name: "Prof. S. Nair", role: "Associate Professor", img: "faculty5.avif", details: "Cybersecurity & Cloud Computing specialist, consultant for top firms." },
            { name: "Dr. T. Iyer", role: "Assistant Professor", img: "faculty6.avif", details: "Blockchain & Web3 research lead, published multiple papers." },
            { name: "Prof. A. Aparna", role: "Assistant Professor", img: "faculty2.avif", details: "Expert in Full-Stack Development & DevOps with industry collaborations." }
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

      {/* What Other Students Say */}
      <div className="mb-5">
        <h3 style={{ color: "#1e3a8a" }}>
          <FaComments /> What Other Students Say
        </h3>
        <div className="row g-4">
          {[ 
            { name: "Rajesh P.", feedback: "The hands-on projects and coding competitions prepared me well for my career!", img: "std5.avif" },
            { name: "Megha S.", feedback: "World-class faculty and advanced research labs helped me become a successful AI Engineer.", img: "std4.jpg" },
            { name: "Vikram D.", feedback: "The placement support was incredible. I got placed in Google before graduating!", img: "std6.avif" }
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

      {/* Contact */}
      <div className="text-center mt-4">
  <Link to="/apply" className="btn btn-lg px-5 py-2 shadow" style={{ backgroundColor: "#1e3a8a", color: "#fff", border: "2px solid #ffd700" }}>
    Apply Now
  </Link>
</div>
    </div>
  );
};

export default BTechCSE;
