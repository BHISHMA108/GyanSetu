import React, { useState } from 'react'
import gods from "../data/gods";
import GodCard from './GodCard';
import ChatBot from './ChatBot';
const GodList = () => {
    const [selectedGod, setSelectedGod] = useState(null);
  return (
    <div className="min-h-screen border-none flex flex-col items-center bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-orange-500 mb-6">
          Talk to Your God
        </h1>
        <div className="grid grid-cols-1 border-none object-contain sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gods.map((god, index) => (
            <GodCard key={index} god={god} onSelect={setSelectedGod} />
          ))}
        </div>
        {selectedGod && (
          <ChatBot god={selectedGod} onClose={() => setSelectedGod(null)} />
        )}
    </div>
  )
}

export default GodList