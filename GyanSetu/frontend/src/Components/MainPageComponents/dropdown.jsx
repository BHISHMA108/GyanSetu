"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AnimatedDropdown =() => {
    const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    "Explore Hindu Religion",
    "Explore Muslim Religion",
    "Explore Sikh Religion",
    "Explore Christian Religion",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item) => {
    console.log(item); // You can handle navigation here
    if(item === "Explore Hindu Religion"){
        navigate("/main");
    }else if(item === "Explore Muslim Religion"){
        navigate("/muslim");
    }else if(item === "Explore Sikh Religion"){
        navigate("/sikh");
    }else if(item === "Explore Christian Religion"){
        navigate("/christian");
    }
    setIsOpen(false);
  };

  return (
    <div className="relative w-[250px] ml-6">
      <button
        onClick={toggleDropdown}
        className="w-full flex justify-between items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-md"
      >
        Want to explore other religions?
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden z-[999]"
          >
            {items.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ backgroundColor: "#f3f4f6", scale: 1.02 }}
                className="px-4 py-2 cursor-pointer dark:text-white text-black"
                onClick={() => handleSelect(item)}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AnimatedDropdown;