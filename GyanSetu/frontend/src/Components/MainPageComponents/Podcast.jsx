import { useState } from "react";
import axios from "axios";
import { FaMicrophone, FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const Podcast = () => {
  const [topic, setTopic] = useState("");
  const [script, setScript] = useState("");
  const [loading, setLoading] = useState(false);

  const topics = [
    "The Essence of Sanatana Dharma",
    "Bhagavad Gita: Lessons for Modern Life",
    "The Four Yogas: Paths to Liberation",
    "Upanishads & Vedanta Simplified",
    "Concept of Karma & Reincarnation",
    "Ramayana & Mahabharata: Life Lessons",
    "The Mystical Stories of Lord Shiva",
    "Significance of Lord Krishna’s Leelas",
    "Goddess Worship in Hinduism",
    "The Many Avatars of Lord Vishnu",
    "Meditation & Mantras in Hinduism",
    "Why Do Hindus Fast?",
    "Sacred Rivers in Hinduism",
    "Hindu Temple Architecture & Its Mysticism",
    "The Science Behind Puja & Yagna",
    "Navratri: The Divine Feminine Energy",
    "Deepavali: Beyond Lights & Fireworks",
    "Mahashivratri: A Night of Transformation",
    "The True Meaning of Holi",
    "Makar Sankranti & the Cosmic Connection",
    "Spiritual Minimalism in Hindu Thought",
    "Ayurveda & Spiritual Well-Being",
    "How Hinduism Views the Afterlife",
    "The Role of Gurus & Satsang",
    "Ancient Hindu Wisdom for Mental Peace",
  ];

  const generatePodcast = async () => {
    if (!topic) {
      alert("Please select a topic!");
      return;
    }

    setLoading(true);
    setScript("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/generate-podcast",
        { topic }
      );
      setScript(response.data.script);
    } catch (error) {
      console.error("Error generating podcast:", error);
      alert("Failed to generate podcast. Please try again.");
    }

    setLoading(false);
  };
  const navigate = useNavigate();
  return (
    <div>
    <span className="translate-x-[51px] translate-y-[38px] flex flex-row"><ArrowBackIcon color="primary" fontSize="medium" />
    &nbsp;<p onClick={()=>navigate("/dashboard")} className=" text-blue-500">Go back</p></span>
    <div className="max-w-xl mx-auto my-12 p-6 bg-gray-900 text-white rounded-lg shadow-lg text-center">
      <motion.h1
        className="text-2xl font-bold"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        🎙️ AI Podcast Generator
      </motion.h1>

      <motion.div className="mt-4" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white rounded-md outline-none"
        >
          <option value="">Select a topic</option>
          {topics.map((t, index) => (
            <option key={index} value={t}>{t}</option>
          ))}
        </select>
      </motion.div>

      <motion.button
        onClick={generatePodcast}
        disabled={loading}
        className="mt-4 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition duration-300 disabled:opacity-50"
        whileHover={{ scale: 1.05 }}
      >
        {loading ? <FaSpinner className="animate-spin" /> : <FaMicrophone />} {loading ? "Generating..." : "Generate Podcast"}
      </motion.button>

      {script && (
        <motion.div className="mt-6 p-4 bg-gray-800 rounded-lg text-left relative" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h3 className="text-lg font-semibold">📜 Podcast Script:</h3>
          <div className="mt-2 p-4 bg-red-500 text-white rounded-lg relative">
            {script}
            <div className="absolute left-4 bottom-[-10px] w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-red-500 border-l-transparent border-r-transparent"></div>
          </div>
        </motion.div>
      )}
    </div>
    </div>
  );
};

export default Podcast;
