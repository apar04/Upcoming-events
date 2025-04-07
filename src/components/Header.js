import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header
      className="navbar navbar-expand-lg sticky-top shadow px-3"
      style={{
        background: "linear-gradient(90deg, rgb(158, 241, 103), rgb(85, 178, 218))",
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* College Name - Left Corner */}
        <a
          className="navbar-brand text-black fw-bold fs-4"
          href="/"
          style={{ marginLeft: "10px" }}
        >
          Prestige College 🎓
        </a>

        {/* Navbar Toggle Button - Mobile View */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          style={{ marginRight: "10px" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link text-black fw-semibold fs-5 me-3"
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-black fw-semibold fs-5 me-3"
                onClick={() => navigate("/about")}
                style={{ cursor: "pointer" }}
              >
                About
              </a>
            </li>

            {/* Courses Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-black fw-semibold fs-5 me-3"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ cursor: "pointer" }}
              >
                Courses
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => navigate("/btech")}
                    style={{ cursor: "pointer" }}
                  >
                    Department of Information Technology
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => navigate("/cse")}
                    style={{ cursor: "pointer" }}
                  >
                    Department of Computer Science Engineering
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => navigate("/eee")}
                    style={{ cursor: "pointer" }}
                  >
                    Department of Electrical and Electronics Engineering
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => navigate("/ece")}
                    style={{ cursor: "pointer" }}
                  >
                    Department of Electronics and Communication Engineering
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => navigate("/mech")}
                    style={{ cursor: "pointer" }}
                  >
                    Department of Mechanical Engineering
                  </a>
                </li>
              </ul>
            </li>

            {/* Admissions Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-black fw-semibold fs-5 me-3"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ cursor: "pointer" }}
              >
                Admissions
              </a>
              <ul className="dropdown-menu">
              <li>
  <a
    className="dropdown-item"
    onClick={() => navigate("/admissions")}
    style={{ cursor: "pointer" }}
  >
    Admission Overview
  </a>
</li>

                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => navigate("/programmes-offered")}
                    style={{ cursor: "pointer" }}
                  >
                    Programmes Offered
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => navigate("/admission-2024-2025")}
                    style={{ cursor: "pointer" }}
                  >
                    Admission 2024-2025
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-black fw-semibold fs-5 me-3"
                onClick={() => navigate("/contact")}
                style={{ cursor: "pointer" }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
