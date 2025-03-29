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

const ReligionSelector = () => {
  const navigate = useNavigate();

  const handleSelect = (religionId) => {
    navigate(`/${religionId}-dashboard`); // Redirect to the respective dashboard
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {religions.map((religion) => (
        <button
          key={religion.id}
          onClick={() => handleSelect(religion.id)}
          className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="text-purple-600 text-4xl mb-4">{religion.icon}</div>
          <span className="text-lg font-medium text-gray-800">{religion.name}</span>
        </button>
      ))}
    </div>
  );
}


export default ReligionSelector;