import React from "react";
import { FaClipboardList, FaUserGraduate, FaBell, FaInfoCircle, FaQuestionCircle, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "animate.css";

const admissionData = [
  {
    program: "B.Sc. Computer Science",
    selection: "Merit-Based & Entrance Exam",
    eligibility: "12th Science (Maths/CS)",
    notification: "April - June 2025",
    details: "Students must have studied Mathematics or Computer Science in high school. Admission is based on merit and an entrance test conducted by the college.",
  },
  {
    program: "BBA Business Administration",
    selection: "Direct Admission & Interview",
    eligibility: "12th Any Stream",
    notification: "May - July 2025",
    details: "Open for students from all streams. Candidates must pass an interview to assess leadership and business aptitude.",
  },
  {
    program: "B.Tech Artificial Intelligence",
    selection: "JEE Main / College Entrance",
    eligibility: "12th Science (PCM)",
    notification: "March - May 2025",
    details: "Candidates must have Physics, Chemistry, and Mathematics as core subjects in 12th grade. JEE Main scores are preferred, with a separate college-level test available.",
  },
  {
    program: "MCA Computer Applications",
    selection: "Entrance Exam & Interview",
    eligibility: "BCA / Any UG with Maths",
    notification: "June - August 2025",
    details: "Applicants should have a Bachelor's in Computer Applications or any UG degree with Mathematics as a core subject. Admission is based on an entrance test followed by an interview.",
  },
  {
    program: "MBA Business Administration",
    selection: "CAT / MAT / College Exam",
    eligibility: "Any UG Degree",
    notification: "April - July 2025",
    details: "Candidates need a recognized undergraduate degree. Selection is based on national-level exams (CAT/MAT) or a college entrance test.",
  },
];

const AdmissionBatch = () => {
  return (
    <div className="container mt-4">
      
      {/* Page Header */}
      <div className="text-center animate__animated animate__fadeInDown mt-4">
        <h1 className="fw-bold text-center" style={{ color: "#1e3a8a", fontSize: "2.5rem" }}>
          📌 Admission Details
        </h1>

        <p className="text-muted w-75 mx-auto">
          Find details on programme-wise admission procedures, eligibility, and important dates.  
          Stay updated for the latest admission notifications and selection processes.
        </p>
        <hr className="w-50 mx-auto" style={{ borderTop: "3px solid #ffd700" }} />
      </div>

      {/* Admission Table */}
      <div className="table-responsive animate__animated animate__fadeInUp mt-5">
        <table className="table table-bordered table-hover shadow-lg">
          <thead className="bg-primary text-white text-center">
            <tr>
              <th className="py-3">🎓 Programme Name</th>
              <th className="py-3"><FaClipboardList /> Selection Procedure</th>
              <th className="py-3"><FaUserGraduate /> Eligibility</th>
              <th className="py-3"><FaBell /> Admission Notification</th>
              <th className="py-3"><FaInfoCircle /> Additional Info</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {admissionData.map((admission, index) => (
              <tr key={index} className="align-middle">
                <td className="fw-bold">{admission.program}</td>
                <td className="text-success">{admission.selection}</td>
                <td className="text-info">{admission.eligibility}</td>
                <td className="text-danger fw-bold">{admission.notification}</td>
                <td className="text-dark text-start px-3">{admission.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FAQs Section */}
      <div className="mt-5">
        <h2 className="fw-bold text-center" style={{ color: "#1e3a8a" }}>Frequently Asked Questions ❓</h2>
        <div className="accordion mt-3 w-75 mx-auto" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                <FaQuestionCircle className="me-2" /> How do I apply for admission?
              </button>
            </h2>
            <div id="faq1" className="accordion-collapse collapse show">
              <div className="accordion-body">
                You can apply online through our official website or visit the campus for offline application forms.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                <FaQuestionCircle className="me-2" /> What documents are required for admission?
              </button>
            </h2>
            <div id="faq2" className="accordion-collapse collapse">
              <div className="accordion-body">
                You need to submit your 10th & 12th marksheets, identity proof, passport-size photos, and entrance exam scorecards (if applicable).
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-5 text-center">
        <h2 className="fw-bold" style={{ color: "#1e3a8a" }}>📞 Need Help? Contact Us!</h2>
        <p className="text-muted">For any admission-related queries, feel free to reach out to us.</p>
        <p className="fw-bold"><FaPhoneAlt className="me-2" /> +91 98765 43210 | <FaEnvelope className="me-2" /> admissions@college.edu</p>
      </div>
      
    </div>
  );
};

export default AdmissionBatch;
