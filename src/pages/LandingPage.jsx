import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import growthImage from "../assets/growth.jpg";
import strawberryImage from "../assets/strawberry.jpg";

import { motion } from "framer-motion";

const LandingPage = () => {
  const features = [
    {
      icon: "📡",
      title: "Real-Time Monitoring",
      description: "Track temperature, humidity, light, and nutrients live.",
    },
    {
      icon: "🤖",
      title: "AI-Powered Management",
      description: "Automated pest detection and system adjustments.",
    },
    {
      icon: "💧",
      title: "Automated Control",
      description: "Smart irrigation, lighting, and ventilation cycles.",
    },
    {
      icon: "🥕",
      title: "Dual Setups",
      description: "Separate, optimized environments for produce and fodder.",
    },
    {
      icon: "📊",
      title: "Data & Optimization",
      description: "Log growth data to continuously improve yields.",
    },
    {
      icon: "🚧",
      title: "Modular Design",
      description: "Built to expand easily into larger tunnel systems.",
    },
  ];

  const team = [
    {
      name: "Shravan Ramjathan",
      role: "Project Manager / Backend Dev",
      id: "ST10247982",
    },
    { name: "Shivar Tuplah", role: "Backend Developer", id: "ST10256115" },
    {
      name: "Vidur Girish Somaru",
      role: "Front End Developer",
      id: "ST10263794",
    },
    { name: "Keagen Shaw", role: "Product Manager", id: "ST10067958" },
    { name: "Shaymen Kista", role: "Documentation Lead", id: "ST10312252" },
    {
      name: "Paayal Rakesh",
      role: "Research Business Analyst",
      id: "ST10368727",
    },
    { name: "Ahmed Vally", role: "Hardware Engineer", id: "ST10251131" },
  ];

  // Animation variants for sections fading in
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for staggered grid items
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          {/* Use motion.h1 for entrance animation */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Future of Farming is <span>Smart</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            An IoT-powered hydroponic system with AI-driven automation to
            revolutionize crop and fodder growth for modern farmers.
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/register" className="btn btn-primary">
              Explore The System
            </Link>
            <a href="#features" className="btn btn-secondary">
              Learn More
            </a>
          </motion.div>
        </div>
      </header>

      <main>
        {/* Project Overview Section */}
        {/* Wrap sections with motion.section for scroll-triggered animations */}
        <motion.section
          className="section"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container">
            <div className="overview-content">
              <div className="overview-text">
                <h2>🚀 Grow Smarter, Not Harder</h2>
                <p>
                  Smart Roots is an IoT-powered hydroponic system built to grow
                  fruits, veggies, and animal fodder in controlled grow tents.
                  Our automated solution tackles the challenges farmers face
                  with manual monitoring and pest control.
                </p>
                <p>
                  Currently operating with two tents, we're already paving the
                  way for a future-proof, expandable tunnel system designed for
                  scalability and maximum yield.
                </p>
              </div>
              <div className="overview-images">
                <div
                  className="overview-image"
                  style={{
                    backgroundImage: `url(${growthImage})`,
                  }}
                ></div>
                <div
                  className="overview-image"
                  style={{
                    backgroundImage: `url(${strawberryImage})`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <section
          id="features"
          className="section"
          style={{ backgroundColor: "#1a1d24" }}
        >
          <div className="container">
            <motion.h2
              className="section-title"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              Key Features
            </motion.h2>
            {/* Wrap the grid in a motion.div to orchestrate staggered animations */}
            <motion.div
              className="features-grid"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {features.map((feature, index) => (
                // Each grid item is now a motion.div
                <motion.div
                  className="feature-card"
                  key={index}
                  variants={item}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section">
          <div className="container">
            <motion.h2
              className="section-title"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              Meet the Team
            </motion.h2>
            <motion.div
              className="team-grid"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {team.map((member, index) => (
                <motion.div className="team-card" key={index} variants={item}>
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                  <p>
                    <em>{member.id}</em>
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LandingPage;
