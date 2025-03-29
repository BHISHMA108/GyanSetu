"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./FloatingNav.css";

const FloatingNav = ({ navItems = [], className = "", toggleCalendar }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={`floating-nav ${className}`}
      >
        {navItems.map((navItem, idx) => (
          <Link key={idx} to={navItem.link} className="nav-link">
            <span className="nav-icon">{navItem.icon}</span>
            <span className="nav-text">{navItem.name}</span>
          </Link>
        ))}
        <button className="login-button" id="calendar" onClick={(e) => {
          e.stopPropagation(); 
          toggleCalendar();
        }}>
          <span>Calendar</span>
        </button>


        <button className="login-button" id="about" onClick={() => navigate("/about")}>
          <span>About</span>
        </button>
        <button className="login-button" id="home" onClick={() => navigate("/login")}>
          <span>Home</span>
        </button>
        <button className="login-button" id="contact" onClick={() => navigate("/contact")}>
          <span>Contact Us</span>
        </button>
        <button className="login-button" id="login" onClick={() => navigate("/login")}>
          <span>Login</span>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNav;
