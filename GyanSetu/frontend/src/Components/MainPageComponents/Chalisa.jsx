import React, { useState } from "react";
import { getMeaning } from "../../api.js";
import chalisaData from "../../data/chalisaData.jsx";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const Chalisa = () => {
  const [language, setLanguage] = useState("hindi");
  const [modalContent, setModalContent] = useState(null);

  const toggleLanguage = (lang) => setLanguage(lang);

  const showMeaning = async (line) => {
    try {
      const data = await getMeaning(line);
      setModalContent(data?.meaning || "Meaning not available.");
    } catch (error) {
      setModalContent("Error fetching meaning. Please try again.");
    }
  };

  const closeModal = () => setModalContent(null);
  const navigate = useNavigate();
  return (
    <div>
    <span className="translate-x-[31px] translate-y-[45px] flex flex-row z-50 absolute "><ArrowBackIcon color="primary" fontSize="medium" />
    &nbsp;<p onClick={()=>navigate("/dashboard")} className=" text-blue-500">Go back</p></span>
    <div className="min-h-screen z-40 relative bg-cover bg-center bg-no-repeat text-white flex flex-col items-center p-4" 
         style={{ backgroundImage: "url('/Gods Images/Hanumanji.jpg')" }}>
      
      <header className="text-2xl md:text-3xl font-bold bg-orange-500  px-6 py-3 rounded-lg shadow-lg text-center w-4/5 mb-4">
        Hanuman Chalisa
      </header>

      {/* Language Toggle */}
      <div className="flex space-x-4">
        {["hindi", "english"].map((lang) => (
          <button 
            key={lang}
            className={`px-4 py-2 text-lg rounded-md transition ${
              language === lang ? "bg-orange-500  text-white" : "bg-gray-700 text-gray-200"
            }`}
            onClick={() => toggleLanguage(lang)}
          >
            {lang === "hindi" ? "हिंदी" : "English"}
          </button>
        ))}
      </div>

      {/* Info Box */}
      <p className="bg-orange-300 text-black p-3 rounded-lg w-4/5 text-center mt-4">
        Click on any line to view its meaning.
      </p>

      {/* Chalisa Lines */}
      <div className="w-4/5 mt-4">
        {chalisaData.map((line, index) => (
          <div 
            key={index} 
            className="bg-white text-black opacity-55 text-lg p-3 my-2 rounded-lg text-center cursor-pointer transition hover:bg-orange-500 hover:opacity-100 hover:text-white"
            onClick={() => showMeaning(line.hindi)}
          >
            {language === "hindi" ? line.hindi : line.english}
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-4/5 md:w-1/2 relative">
            <button className="absolute top-2 right-4 text-red-500 text-2xl" onClick={closeModal}>&times;</button>
            <p className="text-lg">{modalContent}</p>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Chalisa;

