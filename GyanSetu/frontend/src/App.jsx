import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./Pages/LandingPage.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import Contactus from "./Components/contact us/ContactUs.jsx";
import Aboutus from "./Components/about us/AboutUs.jsx";
import MainPage from "./Components/MainPage.jsx";
import SpotlightCard from "./Components/SpotlightCard/SpotlightCard.jsx";
import Profile from "./Pages/Profile.jsx";
import Dashboard from "./Components/MainPageComponents/DashBoard.jsx";

import SikhPage from "./Pages/SikhPage.jsx";
import CristianPage from "./Pages/CristianPage.jsx";
import MuslimPage from "./Pages/MuslimPage.jsx";

import Chalisa from "./Components/MainPageComponents/Chalisa.jsx";
import GodGrid from "./Components/MainPageComponents/GodGrid.jsx";
import gods from "./data/gods.jsx";
import Podcast from "./Components/MainPageComponents/Podcast.jsx";

import Quiz from "../src/Pages/Quiz.jsx";

import { ReligionSelector } from "./Components/MainPageComponents/ReligionSelector.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StickyScrollRevealDemo } from "./Components/StickyScrollRevealDemo.jsx";
import StoryGenerator from "./Components/StoryGenerator/StoryGenerator.jsx"

function App() {
  const [showQuiz, setShowQuiz] = useState(true);

  return (
    <div style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/religionselector" element={<ReligionSelector />} />
          <Route path="/muslim" element={<MuslimPage />} />
          <Route path="/sikh" element={<SikhPage />} />
          <Route path="/christian" element={<CristianPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/talk-to-god" element={<GodGrid gods={gods} />} />
          <Route path="/hanuman-chalisa" element={<Chalisa />} />
          <Route path="/spiritual-podcast" element={<Podcast />} />
          <Route path="/story" element={<StoryGenerator/>} />
          
          <Route
            path="/quiz"
            element={
              showQuiz ? <QuizWrapper setShowQuiz={setShowQuiz} /> : <Navigate to="/dashboard" />
            }
          />
          <Route path="/StickyScrollRevealDemo" element={<StickyScrollRevealDemo />} />
        </Routes>
      </Router>
    </div>
  );
}

// 👇 Wrapper component to handle navigation:
function QuizWrapper() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/dashboard");
  };

  return <Quiz onClose={handleClose} />;
}

export default App;
