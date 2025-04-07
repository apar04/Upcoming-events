import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "animate.css";
import collegeLogo from "../assests/college-image1.avif";

// Contact Data
const contactData = [
  { query: "Fee Payment", section: "Accounts Office", email: "accounts@college.edu" },
  { query: "Placement Details", section: "Placement Cell", email: "placement@college.edu" },
  { query: "Alumni Queries", section: "Alumni Relations", email: "alumni@college.edu" },
  { query: "Hostel Fee Payment", section: "Hostel Office", email: "hostel@college.edu" },
  { query: "Bus Fee Payment", section: "Transport Office", email: "transport@college.edu" },
  { query: "Scholarship Information", section: "Scholarship Desk", email: "scholarship@college.edu" },
  { query: "Course Admissions", section: "Admission Cell", email: "admissions@college.edu" },
  { query: "Library Services", section: "Library Department", email: "library@college.edu" },
  { query: "Exam Queries", section: "Exam Section", email: "exams@college.edu" },
  { query: "Student Welfare", section: "Student Affairs", email: "studentwelfare@college.edu" },
];

// Google Map Configuration
const containerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "10px",
  boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
};

const center = {
  lat: 13.0827,
  lng: 80.2707,
};

const Contact = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundImage: "url('/assets/your-background-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      {/* Dark Overlay for Readability */}
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        {/* Page Header */}
        <div className="text-center animate__animated animate__fadeInDown text-white">
          <h1 className="fw-bold" style={{ fontSize: "2.5rem", color: "#9ac5f4" }}>
            📞 Contact Information
          </h1>
          <p className="text-light w-75 mx-auto">
            Reach out to the respective departments for your queries. We are here to assist you.
          </p>
          <hr className="w-50 mx-auto" style={{ borderTop: "3px solid #9ac5f4" }} />
        </div>

        {/* Contact Table */}
        <div className="table-responsive animate__animated animate__fadeInUp mt-4">
          <table className="table table-bordered table-hover shadow-lg text-center bg-white">
            <thead className="bg-dark text-white">
              <tr>
                <th className="py-3">📌 Related Query</th>
                <th className="py-3">🏢 Office / Section</th>
                <th className="py-3">✉️ Email ID</th>
              </tr>
            </thead>
            <tbody>
              {contactData.map((item, index) => (
                <tr key={index} className="align-middle">
                  <td className="fw-bold text-dark">{item.query}</td>
                  <td className="text-primary">{item.section}</td>
                  <td className="text-danger fw-bold">{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Contact & Location Section */}
        <div className="row mt-5">
          {/* Google Map - Left Side */}
          <div className="col-md-6">
            <h3 className="fw-bold" style={{ color: "#9ac5f4" }}>📍 College Location</h3>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>

          {/* College Info - Right Side */}
          <div className="col-md-6 mt-4 mt-md-0 text-white">
            <h3 className="fw-bold" style={{ color: "#9ac5f4" }}>🏫 College Contact Details</h3>
            <div className="d-flex align-items-center">
              <img src={collegeLogo} alt="College Logo" className="me-3" style={{ width: "80px" }} />
              <h5 className="fw-bold">Prestige College</h5>
            </div>
            <p className="mt-2"><FaMapMarkerAlt className="text-info" /> 123 Prestige Road, Chennai, India</p>
            <p><FaPhoneAlt className="text-info" /> +91 98765 43210</p>
            <p><FaEnvelope className="text-info" /> info@college.edu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
