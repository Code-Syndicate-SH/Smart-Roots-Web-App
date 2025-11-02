// src/App.jsx

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { Toaster } from "react-hot-toast";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  // ... (your useEffect for cursor and glow effect remains the same) ...
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    const handleMouseMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      document.querySelectorAll(".feature-card, .team-card").forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <>
      <ParticleBackground />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: "",
          duration: 4000, // 4 seconds
          style: {
            background: "#2c313a", // var(--light-bg)
            color: "#f0f0f0", // var(--text-primary)
            border: "1px solid #3e444f", // var(--border-color)
          },

          success: {
            duration: 4000,
            theme: {
              primary: "#2ecc71",
              secondary: "#1a1d24",
            },
          },
        }}
      />

      <Router>
        {/*
          THE FIX IS HERE:
          Wrap the Routes in a <main> element.
        */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
