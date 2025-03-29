import React from 'react';
import { useNavigate } from 'react-router-dom';

const religions = [
  { id: 'hinduism', name: 'Hinduism', icon: '🕉️' },
  { id: 'christianity', name: 'Christianity', icon: '✝️' },
  { id: 'islam', name: 'Islam', icon: '☪️' },
  { id: 'buddhism', name: 'Buddhism', icon: '☸️' },
  { id: 'sikhism', name: 'Sikhism', icon: '🦁' },
  { id: 'judaism', name: 'Judaism', icon: '✡️' },
];

export function ReligionSelector() {
  const navigate = useNavigate();

  const religionSelect = (religionId) => {
    if(religionId === "hinduism"){
    navigate('/main');
    }else if(religionId === "islam"){
      navigate("/muslim")
    }else if(religionId === "sikhism"){
      navigate("/sikh")
    }else if(religionId === "christianity"){
      navigate("/christian")
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100 p-6">
      <h1 className="text-3xl md:text-5xl font-bold mb-12 text-gray-800 animate-fade-in-down">
        Choose Religion To Explore..
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {religions.map((religion) => (
          <button
            key={religion.id}
            onClick={() => religionSelect(religion.id)}
            className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-2xl transform transition-transform hover:scale-105 hover:shadow-purple-400/50 hover:shadow-lg hover:bg-purple-50 group"
          >
            <div className="text-purple-600 text-5xl mb-4 animate-bounce-slow group-hover:animate-pulse">
              {religion.icon}
            </div>
            <span className="text-xl font-semibold text-gray-700 group-hover:text-purple-700 transition-colors">
              {religion.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
