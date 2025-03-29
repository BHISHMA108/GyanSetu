import React from "react";

const GodCard = ({ god, onSelect }) => {
  return (
    <div 
      className="w-64 p-6 rounded-lg border-none shadow-lg text-center cursor-pointer transform transition-transform duration-200 hover:scale-105"
      style={{ backgroundColor: god.color }}
      onClick={onSelect} // Pass selected god to parent
    > 
<img 
  src={god.image} 
  alt={god.name} 
  className="w-20 h-20 rounded-full mx-auto mb-4 -translate-x-[21px] border-none border-0 outline-none shadow-none"
/>

      <h3 className="text-lg font-semibold">{god.name}</h3>
      <p className="text-sm mt-2">{god.description}</p>
    </div>
  );
};

export default GodCard;
