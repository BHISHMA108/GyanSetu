import React from 'react';
import { languageOptions } from '../../../data/storyPrompts';

const LanguageSelector = ({ 
  selectedReligion, 
  selectedLanguage, 
  onLanguageChange,
  showLanguageSelector 
}) => {
  if (!showLanguageSelector) return null;

  const getLanguages = () => {
    if (selectedReligion && languageOptions[selectedReligion]) {
      return languageOptions[selectedReligion];
    }
    return ['english', 'hindi', 'marathi']; // Default languages
  };

  return (
    <div className={`language-selector ${showLanguageSelector ? 'visible' : ''}`}>
      <div className="language-options">
        {getLanguages().map(lang => (
          <button
            key={lang}
            className={`language-button ${selectedLanguage === lang ? 'active' : ''}`}
            onClick={() => onLanguageChange(lang)}
          >
            {lang.charAt(0).toUpperCase() + lang.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector; 