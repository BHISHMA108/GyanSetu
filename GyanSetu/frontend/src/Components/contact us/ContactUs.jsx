import React from "react";
import { motion } from "framer-motion";
import "./ContactUs.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";


const ContactUs = () => {
  const navigate = useNavigate();
  return (
    <div>
    <span className="translate-x-[51px] translate-y-[38px] absolute z-30 flex flex-row"><ArrowBackIcon color="primary" fontSize="medium" />
    &nbsp;<p onClick={()=>navigate("/")} className=" text-blue-500">Go back</p></span>
    <div className="contact-container relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="contact-box"
      >
        
        <h2 className="contact-title">Contact Us</h2>
        <hr></hr>
        <form className="space-y-4">
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            placeholder="Your Name"
            className="contact-input"
          />
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="email"
            placeholder="Your Email"
            className="contact-input"
          />
          <motion.textarea
            whileFocus={{ scale: 1.05 }}
            placeholder="Your Message"
            className="contact-textarea"
          ></motion.textarea>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="contact-button"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
    </div>
  );
};

export default ContactUs;
