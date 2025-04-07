import React, { useState } from "react";
import "animate.css";
import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";

const RegisterNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Registration Successful!");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 🔥 Background Image Wrapper */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "url('/assests/contact-bg.avif') ",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />

      {/* 🔷 Registration Form */}
      <div
        className="animate__animated animate__fadeInUp"
        style={{
          background: "rgba(0, 0, 50, 0.85)",
          boxShadow: "0px 4px 20px rgba(0, 0, 100, 0.5)",
          borderRadius: "15px",
          padding: "30px",
          width: "420px",
          color: "white",
          textAlign: "center",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            textShadow: "0px 0px 10px #00aaff, 0px 0px 20px #0055ff",
            animation: "animate__pulse infinite 2s",
          }}
        >
          ✨ Register Now ✨
        </h2>
        <p style={{ fontSize: "16px", color: "lightgray", marginBottom: "20px" }}>
          Join us & explore amazing opportunities!
        </p>

        <form onSubmit={handleSubmit}>
          {[
            { label: "Full Name", name: "name", icon: <FaUser /> },
            { label: "Email", name: "email", icon: <FaEnvelope />, type: "email" },
            { label: "Phone", name: "phone", icon: <FaPhone />, type: "tel" },
            { label: "Password", name: "password", icon: <FaLock />, type: "password" },
          ].map((field, index) => (
            <div key={index} style={{ position: "relative", marginBottom: "15px" }}>
              <span
                style={{
                  position: "absolute",
                  left: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#00aaff",
                  fontSize: "1.3rem",
                }}
              >
                {field.icon}
              </span>
              <input
                type={field.type || "text"}
                name={field.name}
                placeholder={field.label}
                value={formData[field.name]}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px 45px",
                  fontSize: "16px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  outline: "none",
                }}
              />
            </div>
          ))}

          <button
            type="submit"
            style={{
              background: "linear-gradient(45deg, #0055ff, #00aaff)",
              color: "white",
              padding: "12px",
              fontSize: "18px",
              borderRadius: "12px",
              width: "100%",
              cursor: "pointer",
              transition: "0.3s",
              boxShadow: "0px 0px 15px rgba(0, 170, 255, 0.7)",
            }}
            onMouseEnter={(e) => (e.target.style.boxShadow = "0px 0px 25px rgba(0, 170, 255, 1)")}
            onMouseLeave={(e) => (e.target.style.boxShadow = "0px 0px 15px rgba(0, 170, 255, 0.7)")}
          >
            🚀 Register Now
          </button>
        </form>

        <p style={{ marginTop: "15px" }}>
          Already have an account?{" "}
          <a href="/login" style={{ color: "#00aaff", fontWeight: "bold", textDecoration: "none" }}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterNow;
