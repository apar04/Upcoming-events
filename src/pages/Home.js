import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const events = [
    { title: "Tech Symposium", date: "March 25, 2025", img: "tech-sympo.jpeg" },
    { title: "Cultural Fest", date: "April 10, 2025", img: "cultural.avif" },
    { title: "Sports Meet", date: "April 20, 2025", img: "sports-pic.avif" },
  ];

  return (
    <section
      className="d-flex align-items-center justify-content-center text-white position-relative text-center"
      style={{
        minHeight: "100vh",
        background: "url('bg-home.avif') center/cover no-repeat fixed",
        overflow: "hidden",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backdropFilter: "blur(7px)",
          background: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>

      <div className="container position-relative px-3">
        <motion.h1
          className="fw-bold mb-3 text-white text-uppercase text-center"
          style={{
            fontSize: "clamp(2rem, 4vw, 4rem)", // Adjusts based on screen size
            textShadow: "2px 2px 10px rgba(255, 255, 255, 0.5)",
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Prestige College 🎓
        </motion.h1>

        <motion.p
          className="fs-5 mb-4 px-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Empowering Education, Inspiring Innovation, and Building a Brighter Future.
        </motion.p>

        {/* Explore Events Section */}
        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <h2
            className="mb-3 fw-bold text-warning"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            🎭 Explore Upcoming Events
          </h2>
          <p className="mb-4">Join us for exciting campus events, workshops, and celebrations!</p>

          <div className="row justify-content-center g-3">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="col-lg-4 col-md-6 col-sm-10 d-flex justify-content-center"
                whileHover={{ scale: 1.05 }}
                style={{ cursor: "pointer" }}
              >
                <div
                  className="position-relative rounded shadow-lg overflow-hidden w-100"
                  style={{ maxWidth: "320px" }}
                >
                  {/* Event Image */}
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-100"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      filter: "brightness(0.7)",
                    }}
                  />

                  {/* Overlay for Better Readability */}
                  <div
                    className="position-absolute w-100 h-100 d-flex flex-column justify-content-end p-3"
                    style={{ top: 0, left: 0, background: "rgba(0, 0, 0, 0.3)", color: "white" }}
                  >
                    <h4 className="fw-bold">{event.title}</h4>
                    <p className="mb-0">{event.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Events Button */}
          <button
            className="btn fw-bold mt-4 px-4 py-2"
            style={{
              background: "transparent",
              border: "2px solid white",
              color: "white",
              borderRadius: "50px",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
            }}
            onClick={() => navigate("/events")}
          >
            View All Events 🎉
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
