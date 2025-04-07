import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="py-5" style={{ background: "#fff", color: "#333", minHeight: "100vh" }}>
      <div className="container">
        {/* Heading */}
        <motion.h1
          className="display-4 fw-bold text-black mt-4 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Prestige College
        </motion.h1>

        {/* College Overview */}
        <motion.p className="fs-5 text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
          Prestige College is a prestigious institution known for its commitment to academic excellence, research-driven learning, and strong industry partnerships. With a world-class campus and a dynamic learning environment, we equip students with the skills and knowledge required to thrive in their careers. Our holistic approach to education ensures that students develop leadership, innovation, and problem-solving capabilities.
        </motion.p>

        {/* Campus Resources */}
        <motion.div className="mt-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          <h2 className="text-primary text-center">🏫 Campus Resources</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <motion.div whileHover={{ scale: 1.05 }} className="p-4 rounded bg-light text-center shadow-sm">
                <h3 className="text-danger">📚 Digital Library</h3>
                <p>Our state-of-the-art digital library provides access to thousands of e-books, journals, and research papers, enabling students to enhance their learning experience.</p>
              </motion.div>
            </div>
            <div className="col-md-4">
              <motion.div whileHover={{ scale: 1.05 }} className="p-4 rounded bg-light text-center shadow-sm">
                <h3 className="text-success">⚙️ Advanced Labs</h3>
                <p>Equipped with cutting-edge technology, our laboratories support research and practical learning in fields like engineering, biotechnology, and computer science.</p>
              </motion.div>
            </div>
            <div className="col-md-4">
              <motion.div whileHover={{ scale: 1.05 }} className="p-4 rounded bg-light text-center shadow-sm">
                <h3 className="text-primary">🎭 Cultural & Sports Complex</h3>
                <p>We promote extracurricular activities through modern sports facilities and a cultural center, fostering a well-rounded student experience.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Placement Statistics */}
        <motion.div className="mt-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
          <h2 className="text-danger text-center">📊 Placement Statistics</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 rounded bg-light text-center shadow-sm">
                <h3 className="text-primary">💼 95% Placement Rate</h3>
                <p>Our robust placement cell ensures high employability by providing career training, mock interviews, and industry collaborations.</p>
              </motion.div>
            </div>
            <div className="col-md-4">
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 rounded bg-light text-center shadow-sm">
                <h3 className="text-danger">📈 ₹12 LPA Highest Package</h3>
                <p>Our top-performing students receive competitive offers from leading multinational corporations with high salary packages.</p>
              </motion.div>
            </div>
            <div className="col-md-4">
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 rounded bg-light text-center shadow-sm">
                <h3 className="text-success">🏆 300+ Recruiters</h3>
                <p>We collaborate with top industry leaders and global companies to provide students with exceptional career opportunities.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

      {/* Prominent Recruiters */}
<motion.div className="mt-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
  <h2 className="text-primary text-center">🏢 Our Prominent Recruiters</h2>
  <div className="row mt-4">
    {[
      { 
        name: "Google", 
        img: "google.jpg", 
        color: "text-success", 
        description: "Google is a global technology leader known for its innovations in search engines, cloud computing, and AI-driven solutions." 
      },
      { 
        name: "Microsoft", 
        img: "microsoft.avif", 
        color: "text-primary", 
        description: "Microsoft pioneers software, cloud computing, and AI technology advancements worldwide." 
      },
      { 
        name: "TCS", 
        img: "tcs.jpg", 
        color: "text-danger", 
        description: "Tata Consultancy Services (TCS) is a leading IT services provider specializing in digital transformation and consulting." 
      },
      { 
        name: "Amazon", 
        img: "amazon.avif", 
        color: "text-warning", 
        description: "Amazon is a global e-commerce and cloud computing giant, offering AI-driven services and technological innovation." 
      }
    ].map((company, index) => (
      <div className="col-lg-3 col-md-6 d-flex align-items-stretch" key={index}>
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="card shadow-sm text-center w-100 rounded overflow-hidden d-flex flex-column"
          style={{ minHeight: "380px" }} // Ensures uniform card height
        >
          {/* Image Section */}
          <div style={{ width: "100%", height: "65%", overflow: "hidden" }}>
            <img 
              src={company.img} 
              alt={company.name} 
              className="w-100 h-100" 
              style={{ objectFit: "cover" }} 
            />
          </div>
          
          {/* Text Content */}
          <div className="p-3 d-flex flex-column justify-content-between text-center" style={{ flexGrow: 1 }}>
            <h4 className={`${company.color} fw-bold mb-2`}>{company.name}</h4>
            <p className="text-muted small m-0">{company.description}</p>
          </div>
        </motion.div>
      </div>
    ))}
  </div>
</motion.div>



        
      </div>
    </section>
  );
};

export default About;
