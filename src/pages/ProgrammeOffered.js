import React from "react";
import { FaBookOpen, FaLaptopCode, FaBriefcase, FaFlask } from "react-icons/fa";
import "animate.css";

const ProgrammesOffered = () => {
  const bachelorsArtsScience = [
    { name: "B.A. English Literature", icon: <FaBookOpen /> },
    { name: "B.Sc. Mathematics", icon: <FaFlask /> },
    { name: "B.Sc. Physics", icon: <FaFlask /> },
    { name: "B.Sc. Chemistry", icon: <FaFlask /> },
    { name: "B.Com. Commerce", icon: <FaBriefcase /> },
    { name: "BBA Business Administration", icon: <FaBriefcase /> },
    { name: "BCA Computer Applications", icon: <FaLaptopCode /> },
    { name: "B.Sc. Computer Science", icon: <FaLaptopCode /> },
    { name: "B.Sc. Biotechnology", icon: <FaFlask /> },
    { name: "B.Sc. Psychology", icon: <FaBookOpen /> },
  ];

  const bachelorsEngineering = [
    { name: "B.E. Computer Science", icon: <FaLaptopCode /> },
    { name: "B.E. Mechanical Engineering", icon: <FaBriefcase /> },
    { name: "B.E. Electrical Engineering", icon: <FaBriefcase /> },
    { name: "B.E. Civil Engineering", icon: <FaBriefcase /> },
    { name: "B.E. Electronics & Communication", icon: <FaBriefcase /> },
    { name: "B.Tech Information Technology", icon: <FaLaptopCode /> },
    { name: "B.Tech Artificial Intelligence", icon: <FaLaptopCode /> },
    { name: "B.Tech Data Science", icon: <FaLaptopCode /> },
    { name: "B.Tech Cyber Security", icon: <FaLaptopCode /> },
    { name: "B.Tech Biotechnology", icon: <FaFlask /> },
  ];

  const mastersArtsScience = [
    { name: "M.A. English Literature", icon: <FaBookOpen /> },
    { name: "M.Sc. Mathematics", icon: <FaFlask /> },
    { name: "M.Sc. Physics", icon: <FaFlask /> },
    { name: "M.Sc. Chemistry", icon: <FaFlask /> },
    { name: "M.Com. Commerce", icon: <FaBriefcase /> },
    { name: "MBA Business Administration", icon: <FaBriefcase /> },
    { name: "MCA Computer Applications", icon: <FaLaptopCode /> },
    { name: "M.Sc. Computer Science", icon: <FaLaptopCode /> },
    { name: "M.Sc. Biotechnology", icon: <FaFlask /> },
    { name: "M.Sc. Psychology", icon: <FaBookOpen /> },
  ];

  const mastersEngineering = [
    { name: "M.E. Computer Science", icon: <FaLaptopCode /> },
    { name: "M.E. Mechanical Engineering", icon: <FaBriefcase /> },
    { name: "M.E. Electrical Engineering", icon: <FaBriefcase /> },
    { name: "M.E. Civil Engineering", icon: <FaBriefcase /> },
    { name: "M.E. Electronics & Communication", icon: <FaBriefcase /> },
    { name: "M.Tech Information Technology", icon: <FaLaptopCode /> },
    { name: "M.Tech Artificial Intelligence", icon: <FaLaptopCode /> },
    { name: "M.Tech Data Science", icon: <FaLaptopCode /> },
    { name: "M.Tech Cyber Security", icon: <FaLaptopCode /> },
    { name: "M.Tech Biotechnology", icon: <FaFlask /> },
  ];

  const renderTable = (title, programs) => (
    <div className="my-5 animate__animated animate__fadeInUp">
      <h3 className="fw-bold text-primary text-center">{title}</h3>
      <div className="table-responsive">
        <table className="table table-striped table-hover mt-3 mx-auto w-75 shadow-lg">
          <tbody>
            {programs.map((program, index) => (
              <tr key={index} className="align-middle">
                <td className="fs-5 py-3 d-flex align-items-center">
                  <span className="me-3 text-warning fs-4">{program.icon}</span>
                  {program.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="container mt-4">
      {/* Page Header */}
      <div className="text-center animate__animated animate__fadeInDown mt-4">
        <h1 
          className="fw-bold text-center" 
          style={{ color: "#1e3a8a", fontSize: "2.5rem", display: "block" }}
        >
          🎓 Programmes We Offer
        </h1>

        <p className="text-muted w-75 mx-auto">
          Prestige College offers industry-relevant undergraduate and postgraduate programs 
          across Arts, Science, and Engineering disciplines. Our courses are designed 
          to empower students with technical expertise and innovative thinking.
        </p>
        <hr className="w-50 mx-auto" style={{ borderTop: "3px solid #ffd700" }} />
      </div>

      {/* Bachelor's Programmes */}
      <h2 className="fw-bold text-center mt-5" style={{ color: "#1e3a8a" }}>
        🎓 Bachelor's Programmes
      </h2>
      <div className="row">
        <div className="col-md-6">{renderTable("Bachelor’s Programmes - Arts & Science", bachelorsArtsScience)}</div>
        <div className="col-md-6">{renderTable("Bachelor’s Programmes - Engineering", bachelorsEngineering)}</div>
      </div>

      {/* Master's Programmes */}
      <h2 className="fw-bold text-center mt-5" style={{ color: "#1e3a8a" }}>
        🎓 Master's Programmes
      </h2>
      <div className="row">
        <div className="col-md-6">{renderTable("Master’s Programmes - Arts & Science", mastersArtsScience)}</div>
        <div className="col-md-6">{renderTable("Master’s Programmes - Engineering", mastersEngineering)}</div>
      </div>
    </div>
  );
};

export default ProgrammesOffered;
