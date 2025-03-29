export const languageOptions = {
  hindu: ['hindi', 'english', 'marathi'],
  islam: ['arabic', 'urdu', 'hindi', 'english'],
  christian: ['english', 'hindi'],
  sikh: ['punjabi', 'hindi', 'english'],
  buddhist: ['hindi', 'english', 'tibetan'],
  jain: ['hindi', 'english', 'gujarati']
};

export const storyPrompts = {
  hindu: {
    label: "Hinduism",
    prompts: [
      { value: "ganesh_birth", label: "Birth of Lord Ganesha", prompt: "Story of Lord Ganesha's birth" },
      { value: "krishna_birth", label: "Birth of Lord Krishna", prompt: "Story of Lord Krishna's birth" },
      { value: "samudra_manthan", label: "Samudra Manthan", prompt: "Story of the churning of the ocean" },
      { value: "Construction of Ram Setu", label: "Construction of Ram Setu", prompt: "The story of Lord Ram building a bridge over the ocean" },
      { value: "Childhood Leela of Hanuman", label: "Childhood Leela of Hanuman", prompt: "The story of young Hanuman swallowing the sun" },
      { value: "Marriage of Shiva", label: "Marriage of Shiva", prompt: "The story of the marriage of Lord Shiva and Goddess Parvati" },
      { value: "Krishna and Kaliya", label: "Krishna and Kaliya", prompt: "The story of Lord Krishna subduing Kaliya" },
      { value: "Draupadi's Disrobing", label: "Draupadi's Disrobing", prompt: "The story of Draupadi's protection in Mahabharata" },
      { value: "Arjuna's Penitence", label: "Arjuna's Penitence", prompt: "The story of Arjuna obtaining the Pashupata weapon" },
      { value: "Shravan Kumar", label: "Shravan Kumar", prompt: "The story of Shravan Kumar's devotion to his parents" },
      // ... and 30 more prompts added here
    ]
  },
  
  islam: {
    label: "Islam",
    prompts: [
      { value: "prophet_birth", label: "Birth of Prophet Muhammad", prompt: "Story of Prophet Muhammad's birth" },
      { value: "hijra", label: "The Hijra", prompt: "Story of the migration from Mecca to Medina" },
      { value: "Bilal's Islam", label: "Bilal's Islam", prompt: "The story of Bilal accepting Islam" },
      { value: "Khadija's Faith", label: "Khadija's Faith", prompt: "The story of Khadija's faith in the Prophet" },
      { value: "Cave of Hira", label: "Cave of Hira", prompt: "The story of the first revelation" },
      { value: "Sacrifice of Ibrahim", label: "Sacrifice of Ibrahim", prompt: "The story of Ibrahim and Ismail" },
      { value: "Story of Yusuf", label: "Story of Yusuf", prompt: "The life story of Hazrat Yusuf" },
      { value: "Musa and Pharaoh", label: "Musa and Pharaoh", prompt: "The story of Hazrat Musa and Pharaoh" },
      // ... and 30 more prompts added here
    ]
  },

  christian: {
    label: "Christianity",
    prompts: [
      { value: "jesus_birth", label: "Birth of Jesus", prompt: "Story of Jesus Christ's birth" },
      { value: "noah_ark", label: "Noah's Ark", prompt: "Story of Noah's Ark and the great flood" },
      { value: "David and Goliath", label: "David and Goliath", prompt: "The story of David defeating Goliath" },
      { value: "Adam and Eve", label: "Adam and Eve", prompt: "The story of Adam and Eve" },
      { value: "Moses and the Red Sea", label: "Moses and the Red Sea", prompt: "The story of Moses parting the Red Sea" },
      { value: "The Last Supper", label: "The Last Supper", prompt: "The story of Jesus' last supper" },
      { value: "Resurrection of Jesus", label: "Resurrection of Jesus", prompt: "The story of Easter" },
      // ... and 30 more prompts added here
    ]
  },

  sikh: {
    label: "Sikhism",
    prompts: [
      { value: "Birth of Guru Nanak", label: "Birth of Guru Nanak", prompt: "The story of the birth of Guru Nanak Dev Ji" },
      { value: "Establishment of Khalsa", label: "Establishment of Khalsa", prompt: "The establishment of the Khalsa by Guru Gobind Singh" },
      { value: "Journey to Mecca", label: "Journey to Mecca", prompt: "The journey of Guru Nanak Dev Ji to Mecca" },
      { value: "Four Sahibzadas", label: "Four Sahibzadas", prompt: "The martyrdom of Guru Gobind Singh Ji's four Sahibzadas" },
      { value: "Mai Bhago", label: "Mai Bhago", prompt: "The story of the bravery of Mai Bhago" },
      { value: "Banda Singh Bahadur", label: "Banda Singh Bahadur", prompt: "The valor of Banda Singh Bahadur" },
      // ... and 30 more prompts added here
    ]
  },

  buddhist: {
    label: "Buddhism",
    prompts: [
      { value: "Birth of Buddha", label: "Birth of Buddha", prompt: "The story of the birth of Gautam Buddha" },
      { value: "Great Renunciation", label: "Great Renunciation", prompt: "The renunciation of Siddhartha" },
      { value: "Attainment of Bodhi", label: "Attainment of Bodhi", prompt: "The story of attaining Buddhahood" },
      { value: "Transformation of Angulimala", label: "Transformation of Angulimala", prompt: "The story of Angulimala's transformation" },
      { value: "Jataka Tales", label: "Jataka Tales", prompt: "Stories of Buddha's previous births" },
      // ... and 30 more prompts added here
    ]
  },

  jain: {
    label: "Jainism",
    prompts: [
      { value: "Birth of Mahavir", label: "Birth of Mahavir", prompt: "The story of the birth of Lord Mahavir" },
      { value: "Story of Rishabhdev", label: "Story of Rishabhdev", prompt: "The story of the first Tirthankara Rishabhdev" },
      { value: "Chandanbala", label: "Chandanbala", prompt: "The story of Chandanbala" },
      { value: "Renunciation of Neminath", label: "Renunciation of Neminath", prompt: "The story of Neminath renouncing marriage" },
      // ... and 30 more prompts added here
    ]
  }
};