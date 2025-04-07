import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import { motion } from "framer-motion";

const CulturalFest = () => {
    const navigate = useNavigate();

    // Event details
    const eventDetails = {
        title: "🎭 Cultural Fest",
        date: "April 10, 2025",
        coordinator: "Dr. Emily Carter",
        executiveMembers: ["Lucas White", "Sophia Martinez", "Daniel Brown"],
        events: [
            { name: "Music Night", time: "6:00 PM - 8:00 PM", venue: "Main Stage", incharge: "Prof. Anna Wilson" },
            { name: "Dance Battle", time: "8:30 PM - 10:30 PM", venue: "Auditorium", incharge: "Dr. Michael Johnson" },
            { name: "Drama Showcase", time: "4:00 PM - 6:00 PM", venue: "Hall C", incharge: "Ms. Olivia Roberts" }
        ]
    };

    return (
        <div
            className="vh-100 vw-100 position-relative"
            style={{
                backgroundImage: "url('culturalfest copy.avif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                padding: "50px",
                overflow: "auto",
                color: "white",
            }}
        >
            {/* Overlay */}
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(0, 0, 0, 0.6)" }}></div>

            {/* Back Button */}
            <motion.div
                className="position-absolute start-0 top-50 translate-middle-y ps-3"
                whileHover={{ scale: 1.2 }}
                style={{ cursor: "pointer", color: "#ffffff", zIndex: 2 }}
                onClick={() => navigate("/events")}
            >
                <IoArrowBackCircle size={50} />
            </motion.div>

            {/* Event Details */}
            <div className="container position-relative" style={{ zIndex: 2 }}>
                <h1 className="text-center mt-4" style={{ fontSize: "3rem", fontWeight: "bold" }}>
                    {eventDetails.title}
                </h1>
                <p className="text-center"><strong>📅 Date:</strong> {eventDetails.date}</p>
                <p className="text-center"><strong>👨‍🏫 Coordinator:</strong> {eventDetails.coordinator}</p>

                {/* Executive Members */}
                <h3 className="text-center mt-4">Executive Members</h3>
                <p className="text-center">{eventDetails.executiveMembers.join(", ")}</p>

                {/* Timeline Layout for Events */}
                <h3 className="text-center mt-4">📅 Event Schedule</h3>
                <div className="timeline mt-4 d-flex flex-column align-items-center">
                    {eventDetails.events.map((event, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="timeline-item d-flex align-items-center w-100"
                            style={{
                                position: "relative",
                                padding: "20px",
                                width: "70%",
                                maxWidth: "800px",
                            }}
                        >
                            {/* Timeline Line */}
                            <div
                                className="timeline-line"
                                style={{
                                    position: "absolute",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "4px",
                                    height: "100%",
                                    background: "#ff5733",
                                }}
                            ></div>

                            {/* Timeline Dot */}
                            <div
                                className="timeline-dot"
                                style={{
                                    width: "15px",
                                    height: "15px",
                                    backgroundColor: "#ff5733",
                                    borderRadius: "50%",
                                    position: "absolute",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                }}
                            ></div>

                            {/* Event Details */}
                            <motion.div
                                className="timeline-content px-4 py-3"
                                style={{
                                    background: "rgba(255, 255, 255, 0.2)",
                                    backdropFilter: "blur(10px)",
                                    borderRadius: "15px",
                                    color: "#fff",
                                    width: "100%",
                                    textAlign: "center",
                                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                                }}
                            >
                                <h4 className="fw-bold">{event.name}</h4>
                                <p><strong>🕒 Time:</strong> {event.time}</p>
                                <p><strong>📍 Venue:</strong> {event.venue}</p>
                                <p><strong>👨‍🏫 Incharge:</strong> {event.incharge}</p>

                                {/* Register Button */}
                                <Link to={"/register"}>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    className="btn btn-outline-light mt-2"
                                    style={{
                                        fontSize: "0.9rem",
                                        fontWeight: "bold",
                                        padding: "6px 15px",
                                        borderRadius: "20px",
                                        border: "2px solid #ffffff",
                                        color: "#ffffff",
                                        background: "transparent",
                                        transition: "0.3s",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = "#ffffff";
                                        e.target.style.color = "#007bff";
                                      }}
                                      onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = "transparent";
                                        e.target.style.color = "#ffffff";
                                      }}
                                      onClick={() => navigate("/register")}
                                >
                                    Register Now
                                </motion.button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CulturalFest;