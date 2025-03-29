import React, { useState } from 'react';
import { storyPrompts } from '../../../data/storyPrompts';

const StoryPromptSelector = ({
  selectedReligion,
  setSelectedReligion,
  selectedPrompt,
  setSelectedPrompt,
  customPrompt,
  setCustomPrompt
}) => {
  const [activeField, setActiveField] = useState(null);

  const handleFocus = (field) => {
    setActiveField(field);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  return (
    <div className="selection-area">
      <div className={`selector-group ${activeField === 'religion' ? 'active' : ''}`}>
        <label>Select Religion</label>
        <select
          value={selectedReligion}
          onChange={(e) => {
            setSelectedReligion(e.target.value);
            setSelectedPrompt('');
          }}
          onFocus={() => handleFocus('religion')}
          onBlur={handleBlur}
        >
          <option value="">Choose a religion</option>
          {Object.keys(storyPrompts).map((religion) => (
            <option key={religion} value={religion}>
              {storyPrompts[religion].label}
            </option>
          ))}
        </select>
      </div>

      {selectedReligion && (
        <div className={`selector-group ${activeField === 'prompt' ? 'active' : ''}`}>
          <label>Select Story</label>
          <select
            value={selectedPrompt}
            onChange={(e) => setSelectedPrompt(e.target.value)}
            onFocus={() => handleFocus('prompt')}
            onBlur={handleBlur}
          >
            <option value="">Choose a story</option>
            {storyPrompts[selectedReligion]?.prompts.map((prompt, index) => (
              <option key={index} value={prompt.value}>
                {prompt.label}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default StoryPromptSelector; 