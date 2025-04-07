import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

const Events = () => {
    const navigate = useNavigate();

    const events = [
        {
            title: "🚀 Tech Symposium",
            date: "March 25, 2025",
            img: "tech-sympo.avif",
            description:
                "Join us for an exciting Tech Symposium featuring industry experts, workshops, and the latest in technology trends!",
            link: "/tech-sympo",
        },
        {
            title: "📜 Paper Presentation",
            date: "March 28, 2025",
            img: "paper-pre.avif",
            description:
                "Showcase your research and innovative ideas at our Paper Presentation event. Compete with the best minds in academia!",
                link: "/Paper-presentation",
            },
        {
            title: "💻 Hackathon",
            date: "April 2, 2025",
            img: "hackthon.avif",
            description:
                "Collaborate, code, and innovate in our 24-hour Hackathon. Solve real-world problems with cutting-edge tech!",
                link: "/Hackthon",
            },
        {
            title: "👨‍💻 Codethon",
            date: "April 5, 2025",
            img: "codethon.avif",
            description:
                "Test your coding skills and logic in our thrilling Codethon competition. Think fast, code faster!",
                link: "/Codethon",
            },
        {
            title: "🎭 Cultural Fest",
            date: "April 10, 2025",
            img: "culturalfest.avif",
            description:
                "Experience the rich cultural heritage with music, dance, and drama performances by talented students!",
                link: "/CulturalFest",
            },
        {
            title: "🏆 Sports Meet",
            date: "April 20, 2025",
            img: "sports.avif",
            description:
                "Get ready for an action-packed Sports Meet with thrilling competitions and amazing prizes!",
                link: "/SportsMeet",
            },
    ];

    return (
        <div
            className="container-fluid py-5 position-relative"
            style={{
                backgroundImage: "url('bg-ue1.avif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
            }}
        >
            <div className="container">
                <h1 className="text-center mb-4 mt-4 text-white">🎉 Upcoming Events & Competitions</h1>
                <p className="text-center mb-4 text-light">
                    Participate in exciting events at Prestige College. Whether you're into tech, culture, or sports, we have something for everyone!
                </p>

                <div className="d-flex flex-wrap justify-content-center">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            className="m-3"
                            whileHover={{ scale: 1.02 }}
                            style={{ cursor: event.link ? "pointer" : "default", width: "350px" }}
                            onClick={() => event.link && navigate(event.link)}  // ✅ Navigates when clicked
                        >
                            <div
                                className="card shadow-lg text-center overflow-hidden"
                                style={{
                                    borderRadius: "15px",
                                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                                    color: "white",
                                }}
                            >
                                <img
                                    src={event.img}
                                    alt={event.title}
                                    className="img-fluid"
                                    style={{
                                        width: "100%",
                                        height: "200px",
                                        objectFit: "cover",
                                        borderRadius: "15px 15px 0 0",
                                    }}
                                />
                                <div className="p-3">
                                    <h5 className="fw-bold">{event.title}</h5>
                                    <p className="mb-1"><strong>Date:</strong> {event.date}</p>
                                    <p>{event.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Back Button */}
                <motion.div
                    className="position-fixed start-0 top-50 translate-middle-y ps-3"
                    whileHover={{ scale: 1.2 }}
                    style={{ cursor: "pointer", color: "#ffffff" }}
                    onClick={() => navigate("/")}
                >
                    <IoArrowBackCircle size={50} />
                </motion.div>
            </div>
        </div>
    );
};

export default Events;
