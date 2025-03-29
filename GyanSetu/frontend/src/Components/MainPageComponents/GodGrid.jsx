import React, { useState } from "react";
import GodCard from "./GodCard";
import ChatBot from "./ChatBot"; // Import chatbot modal
import GradientText from "../Bhagwatgita/GradientText.jsx";
import { IconWeight } from "@tabler/icons-react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';



const GodGrid = ({ gods }) => {
  const [selectedGod, setSelectedGod] = useState(null);
  const navigate = useNavigate();
  return (
    <div>
    <span className="translate-x-[51px] translate-y-[38px] flex flex-row"><ArrowBackIcon color="primary" fontSize="medium" />
    &nbsp;<p onClick={()=>navigate("/dashboard")} className=" text-blue-500">Go back</p></span>
    <div className="min-h-screen flex flex-col items-center bg-black-100 p-9 mt-[21px]">
<GradientText
  colors={["#ffba08", "#d00000", "#ffba08", "#d00000", "#ffba08"]}
  animationSpeed={4.5}
  showBorder={false}
  style={{
    fontFamily: "'Cinzel Decorative', serif",
    fontWeight: "bold",           // FIXED
    fontSize: "150px",            // Increase here to 150px or more
    marginBottom: "12px",
  }}
>
  Talk to your god
</GradientText>


      
      {/* Grid Layout */}
      <div className="mt-12 grid bg-black grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gods.map((god, index) => (
          <GodCard key={index} god={god} onSelect={() => setSelectedGod(god)} />
        ))}
      </div>

      {/* ChatBot Modal (Only appears when a god is selected) */}
      {selectedGod && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-96">
            <button
              onClick={() => setSelectedGod(null)}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
            >
              ✕
            </button>
            <ChatBot god={selectedGod} onClose={() => setSelectedGod(null)} />
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default GodGrid;
