import React from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaCloud, FaDatabase, FaRobot, FaUserGraduate, FaTrophy, FaComments } from "react-icons/fa";


const BTechIT = () => {
  return (
    <div className="container mt-5 pt-4">
      <h2 className="text-center fw-bold mb-4" style={{ color: "#1e3a8a" }}>
        💻 Department of Information Technology
      </h2>

      {/* Hero Section */}
      <div className="shadow-lg border-0 p-4 mb-5 text-center">
        <img 
          src="it.avif" 
          alt="IT Department" 
          className="img-fluid rounded" 
          style={{ objectFit: "cover", height: "350px", width: "100%" }} 
        />
        <p className="mt-3" style={{ color: "#555" }}>
          Empowering future tech leaders with cutting-edge technology and innovative learning experiences.
        </p>
      </div>

      {/* Key Highlights */}
      <div className="row text-center mb-5">
        {[
          { icon: <FaUserGraduate size={40} style={{ color: "#ffd700" }} />, label: "98% Placement Rate" },
          { icon: <FaTrophy size={40} style={{ color: "#ffd700" }} />, label: "20+ Hackathon Wins" },
          { icon: <FaCloud size={40} style={{ color: "#1e3a8a" }} />, label: "Top AI & Cloud Research Labs" },
          { icon: <FaDatabase size={40} style={{ color: "#1e3a8a" }} />, label: "Industry-Tied Projects" }
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
          To be a globally recognized center of excellence in Information Technology, fostering innovation, research, and technical expertise to shape the digital future.
        </p>
        <h3 style={{ color: "#1e3a8a" }}>🎯 Mission</h3>
        <ul className="text-muted">
          <li>Deliver a world-class IT curriculum integrating theoretical knowledge with practical applications.</li>
          <li>Promote research and technological innovation to address global challenges.</li>
          <li>Strengthen industry collaboration to bridge the gap between academia and the corporate world.</li>
          <li>Cultivate a culture of ethical responsibility and lifelong learning among students.</li>
        </ul>
      </div>

      {/* Why Choose IT? */}
      <div className="mb-5">
        <h3 style={{ color: "#1e3a8a" }}>🚀 Why Choose IT?</h3>
        <ul className="text-muted">
          <li>🔹 Industry-relevant curriculum covering AI, ML, Cybersecurity, and Cloud Computing.</li>
          <li>🔹 Hands-on projects and internships with top MNCs.</li>
          <li>🔹 Strong alumni network in global tech companies.</li>
          <li>🔹 Advanced research in IoT, Big Data, and Quantum Computing.</li>
        </ul>
      </div>

      {/* Placement Details */}
      <div className="mb-5">
        <h3 style={{ color: "#1e3a8a" }}>🎓 Placement Highlights</h3>
        <p className="text-muted">
          Our IT graduates secure top positions in leading global companies such as Google, Microsoft, Amazon, Infosys, and TCS. Our dedicated placement cell conducts regular training programs on coding, soft skills, and interview preparation, ensuring a high placement rate.
        </p>
      </div>

      {/* Lab Facilities */}
      <div className="mb-5">
        <h3 style={{ color: "#1e3a8a" }}>🖥️ Advanced Lab Facilities</h3>
        <div className="row g-4">
          {[
            "AI & Machine Learning Innovation Lab", 
            "Cloud Computing & Cybersecurity Research Center", 
            "Data Science & Analytics Laboratory", 
            "Software Engineering & Agile Development Studio", 
            "Networking & Internet of Things (IoT) Lab"
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
            { name: "Dr. A. Kumar", role: "HOD & Professor", img: "faculty1.avif", details: "Expert in Artificial Intelligence and Machine Learning with 20+ years of experience." },
            { name: "Prof. B. Sharma", role: "Associate Professor", img: "faculty2.avif", details: "Specialist in Cybersecurity and Cloud Computing, author of multiple research papers." },
            { name: "Dr. C. Reddy", role: "Assistant Professor", img: "faculty3.avif", details: "Data Science and Big Data Analytics expert with extensive industry collaboration." },
            { name: "Prof. D. Singh", role: "Assistant Professor", img: "faculty4.avif", details: "Software Engineering and Agile Development professional with hands-on project experience." }
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
      {/* Career Paths */}
      <div className="mb-5">
        <h3 style={{ color: "#1e3a8a" }}>💼 Career Paths for IT Graduates</h3>
        <ul className="text-muted">
          <li>👨‍💻 Software Developer / Engineer</li>
          <li>🛡️ Cybersecurity Analyst</li>
          <li>📊 Data Scientist / AI Engineer</li>
          <li>☁️ Cloud Architect / DevOps Engineer</li>
          <li>🔗 Blockchain & Web3 Developer</li>
        </ul>
      </div>
      {/* What Other Students Say */}
      <div className="mb-5">
        <h3 style={{ color: "#1e3a8a" }}>
          <FaComments /> What Other Students Say
        </h3>
        <div className="row g-4">
          {[ 
            { name: "Ravi K.", feedback: "The IT program provided me with real-world exposure and excellent internship opportunities!", img: "std2.avif" },
            { name: "Sneha M.", feedback: "Top-notch faculty and cutting-edge labs helped me land a great job at a Fortune 500 company.", img: "std1.jpeg" },
            { name: "Arun P.", feedback: "The curriculum is industry-relevant, and I got placed even before graduating!", img: "std3.avif" }
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

export default BTechIT;
