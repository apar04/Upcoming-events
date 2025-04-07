import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tab, Tabs, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";


const LearnMore = () => {
  const [key, setKey] = useState("engineering");

  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-center text-white d-flex align-items-center justify-content-center"
        style={{ height: "100vh", background: "url('campus.jpg') center/cover no-repeat" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container"
        >
          <h1 className="display-3 fw-bold">Discover Prestige College</h1>
          <p className="fs-4">Empowering minds, shaping futures.</p>
          <button className="btn btn-warning btn-lg">Apply Now</button>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Why Choose Prestige College?</h2>
        <div className="row text-center">
          {["🏆 Top Ranked", "📚 Modern Curriculum", "🌍 Global Community", "💼 100% Placement"].map((item, index) => (
            <motion.div key={index} className="col-md-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.3 }}>
              <div className="p-4 shadow rounded bg-light">{item}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Student Life & Experience */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Student Life & Experience</h2>
        <Carousel>
          {["campus1.jpg", "campus2.jpg", "campus3.jpg"].map((image, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Programs & Courses */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Programs & Courses</h2>
        <Tabs id="course-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
          <Tab eventKey="engineering" title="Engineering & Tech">
            <p>Advanced courses in AI, Robotics, and more.</p>
          </Tab>
          <Tab eventKey="business" title="Business & Management">
            <p>Learn leadership, finance, and marketing.</p>
          </Tab>
        </Tabs>
      </section>

      {/* International Collaborations */}
      <section className="container py-5 text-center">
        <h2>Global University Partners</h2>
        <p>We collaborate with Harvard, Oxford, and more.</p>
      </section>

      {/* How to Apply */}
      <section className="container py-5 text-center">
        <h2>How to Apply</h2>
        <div className="row">
          {["Register", "Submit Documents", "Interview", "Get Admission"].map((step, index) => (
            <div key={index} className="col-md-3 p-3 shadow rounded bg-light">
              {step}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LearnMore;
