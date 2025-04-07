import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "animate.css";

const Admission = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "", // Added Date of Birth
    email: "",
    contact: "",
    tenthMark: "",
    twelfthMark: "",
    address: {
      street: "",
      city: "",
      pincode: "",
      district: "",
      state: "",
    },
    family: {
      fatherName: "",
      fatherOccupation: "",
      motherName: "",
      motherOccupation: "",
      annualIncome: "",
    },
    course: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle nested object changes
  const handleNestedChange = (e, section) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [name]: value,
      },
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    navigate("/apply"); // Navigate to Apply.js
  };

  return (
    <div className="container mt-5 pt-4">
      {/* Header Section */}
      <div className="text-center mb-5 animate__animated animate__fadeInDown">
        <h1 className="fw-bold" style={{ color: "#1e3a8a" }}>
          🎓 Admission Form - 2024-2025
        </h1>
        <p className="text-muted">
          Fill out the form carefully to begin your admission process.
        </p>
        <hr className="w-50 mx-auto" style={{ borderTop: "3px solid #ffd700" }} />
      </div>

      {/* Admission Form */}
      <form onSubmit={handleSubmit} className="shadow-lg p-4 rounded bg-light">
        {/* Personal Details */}
        <h4 className="text-primary mb-3">Personal Details</h4>
        <div className="row mb-3">
          <div className="col-md-4">
            <label>First Name</label>
            <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="col-md-4">
            <label>Middle Name</label>
            <input type="text" className="form-control" name="middleName" value={formData.middleName} onChange={handleChange} />
          </div>
          <div className="col-md-4">
            <label>Last Name</label>
            <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label>Date of Birth</label>
            <input type="date" className="form-control" name="dob" value={formData.dob} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label>Contact Number</label>
            <input type="tel" className="form-control" name="contact" value={formData.contact} onChange={handleChange} required />
          </div>
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        {/* Address Details */}
        <h4 className="text-primary mb-3">Address Details</h4>
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Street</label>
            <input type="text" className="form-control" name="street" value={formData.address.street} onChange={(e) => handleNestedChange(e, "address")} required />
          </div>
          <div className="col-md-6">
            <label>City</label>
            <input type="text" className="form-control" name="city" value={formData.address.city} onChange={(e) => handleNestedChange(e, "address")} required />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <label>Pincode</label>
            <input type="text" className="form-control" name="pincode" value={formData.address.pincode} onChange={(e) => handleNestedChange(e, "address")} required />
          </div>
          <div className="col-md-4">
            <label>District</label>
            <input type="text" className="form-control" name="district" value={formData.address.district} onChange={(e) => handleNestedChange(e, "address")} required />
          </div>
          <div className="col-md-4">
            <label>State</label>
            <input type="text" className="form-control" name="state" value={formData.address.state} onChange={(e) => handleNestedChange(e, "address")} required />
          </div>
        </div>

        {/* Family Details */}
        <h4 className="text-primary mb-3">Family Details</h4>
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Father's Name</label>
            <input type="text" className="form-control" name="fatherName" value={formData.family.fatherName} onChange={(e) => handleNestedChange(e, "family")} required />
          </div>
          <div className="col-md-6">
            <label>Father's Occupation</label>
            <input type="text" className="form-control" name="fatherOccupation" value={formData.family.fatherOccupation} onChange={(e) => handleNestedChange(e, "family")} />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label>Mother's Name</label>
            <input type="text" className="form-control" name="motherName" value={formData.family.motherName} onChange={(e) => handleNestedChange(e, "family")} required />
          </div>
          <div className="col-md-6">
            <label>Mother's Occupation</label>
            <input type="text" className="form-control" name="motherOccupation" value={formData.family.motherOccupation} onChange={(e) => handleNestedChange(e, "family")} />
          </div>
        </div>

        <div className="mb-3">
          <label>Annual Income</label>
          <input type="number" className="form-control" name="annualIncome" value={formData.family.annualIncome} onChange={(e) => handleNestedChange(e, "family")} />
        </div>

        {/* Course Selection */}
        <h4 className="text-primary mb-3">Select Course</h4>
        <select className="form-select mb-4" name="course" value={formData.course} onChange={handleChange} required>
          <option value="">-- Select a Course --</option>
          <option value="B.Tech">Information Technology</option>
          <option value="CSE">Computer Science Engineering</option>
          <option value="ECE">Electrical and Communication Engineering</option>
          <option value="EEE">Electrical and Electronics Engineering</option>
          <option value="Mech">Mechanical Engineering</option>
          <option value="Civil">Civil Engineering</option>
        </select>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary px-4 py-2" style={{ fontSize: "14px" }}>
  Submit Application
</button>

      </form>
    </div>
  );
};

export default Admission;
