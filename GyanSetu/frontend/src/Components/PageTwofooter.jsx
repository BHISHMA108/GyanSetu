import React from "react";
import { Vortex } from "./Vortex"; // Import Vortex component
import "./PageTwofooter.css"; // Optional: Add custom styles
import { Link, useNavigate } from "react-router-dom"; // ✅ Import useNavigate


const PageTwofooter = () => {
  return (
    <div className="footer-container">
      <Vortex particleCount={190} backgroundColor="#00000" baseHue={200} />
    </div>
  );
};

export default PageTwofooter;
