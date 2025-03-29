import React, { useState } from 'react';
import './Quiz.css';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const questions = [
  {
    question: "What does 'Sanatan Dharma' mean?",
    options: [
      { text: "Eternal Way", explanation: "It signifies the eternal and universal truth.", correct: true },
      { text: "Modern Religion", explanation: "This is incorrect because Sanatan Dharma predates modern religions.", correct: false },
      { text: "Timeless Law", explanation: "Although similar, this option does not fully capture the spiritual essence.", correct: false },
      { text: "Perpetual Order", explanation: "This misinterprets the term by emphasizing order over eternal truth.", correct: false }
    ]
  },
  {
    question: "Which scripture is considered a key text in Sanatan Dharma?",
    options: [
      { text: "The Bhagavad Gita", explanation: "The Bhagavad Gita is revered for its spiritual guidance.", correct: true },
      { text: "The Bible", explanation: "The Bible is central to Christianity, not Sanatan Dharma.", correct: false },
      { text: "The Torah", explanation: "The Torah is the central scripture of Judaism.", correct: false },
      { text: "The Upanishads", explanation: "Though revered for their philosophy, they are not considered the key text in this context.", correct: false }
    ]
  },
  {
    question: "Which of the following is the oldest scripture in Sanatan Dharma?",
    options: [
      { text: "The Rigveda", explanation: "The Rigveda is one of the oldest known texts in the world.", correct: true },
      { text: "The Quran", explanation: "The Quran is the holy book of Islam, not Sanatan Dharma.", correct: false },
      { text: "The Upanishads", explanation: "The Upanishads were composed later than the Rigveda.", correct: false },
      { text: "The Mahabharata", explanation: "The Mahabharata is an epic narrative, not the oldest scripture.", correct: false }
    ]
  },
  {
    question: "Who is considered the preserver in the Hindu Trimurti?",
    options: [
      { text: "Lord Vishnu", explanation: "Lord Vishnu is regarded as the preserver and protector of the universe.", correct: true },
      { text: "Lord Shiva", explanation: "Lord Shiva is known as the destroyer, not the preserver.", correct: false },
      { text: "Lord Brahma", explanation: "Lord Brahma is considered the creator, not the preserver.", correct: false },
      { text: "Goddess Lakshmi", explanation: "Goddess Lakshmi is associated with wealth, not preservation.", correct: false }
    ]
  },
  {
    question: "Which festival celebrates the victory of good over evil in Sanatan Dharma?",
    options: [
      { text: "Diwali", explanation: "Diwali, the festival of lights, symbolizes the triumph of light over darkness.", correct: true },
      { text: "Christmas", explanation: "Christmas is celebrated in Christianity.", correct: false },
      { text: "Eid", explanation: "Eid is celebrated in Islam.", correct: false },
      { text: "Hanukkah", explanation: "Hanukkah is a Jewish festival.", correct: false }
    ]
  },
  {
    question: "Which epic narrates the story of Lord Rama?",
    options: [
      { text: "Ramayana", explanation: "The Ramayana recounts the life and adventures of Lord Rama.", correct: true },
      { text: "Mahabharata", explanation: "The Mahabharata centers around the Kurukshetra war and the Bhagavad Gita.", correct: false },
      { text: "Bhagavata Purana", explanation: "This text primarily focuses on Lord Krishna.", correct: false },
      { text: "Vishnu Purana", explanation: "The Vishnu Purana contains various legends but not primarily Lord Rama's story.", correct: false }
    ]
  },
  {
    question: "Which epic contains the Bhagavad Gita?",
    options: [
      { text: "Mahabharata", explanation: "The Bhagavad Gita is a part of the Mahabharata.", correct: true },
      { text: "Ramayana", explanation: "The Bhagavad Gita is not part of the Ramayana.", correct: false },
      { text: "Vishnu Purana", explanation: "The Vishnu Purana does not contain the Bhagavad Gita.", correct: false },
      { text: "Upanishads", explanation: "The Upanishads provide philosophical insights but do not contain the Bhagavad Gita.", correct: false }
    ]
  },
  {
    question: "Which scriptures are known for their philosophical discourses on life and existence?",
    options: [
      { text: "Upanishads", explanation: "The Upanishads explore profound philosophical ideas and concepts.", correct: true },
      { text: "Puranas", explanation: "Puranas primarily contain mythological narratives and genealogies.", correct: false },
      { text: "Vedas", explanation: "The Vedas are mainly composed of hymns and rituals.", correct: false },
      { text: "Itihasas", explanation: "Itihasas, like epics, narrate historical and mythological events.", correct: false }
    ]
  },
  {
    question: "Which deity is known as the destroyer in the Hindu trinity?",
    options: [
      { text: "Lord Shiva", explanation: "Lord Shiva is revered as the destroyer and transformer.", correct: true },
      { text: "Lord Brahma", explanation: "Lord Brahma is considered the creator.", correct: false },
      { text: "Lord Vishnu", explanation: "Lord Vishnu is known as the preserver.", correct: false },
      { text: "Goddess Saraswati", explanation: "Goddess Saraswati is associated with knowledge.", correct: false }
    ]
  },
  {
    question: "Which festival in Sanatan Dharma celebrates the birth of Lord Krishna?",
    options: [
      { text: "Janmashtami", explanation: "Janmashtami marks the birth of Lord Krishna.", correct: true },
      { text: "Holi", explanation: "Holi is the festival of colors and spring.", correct: false },
      { text: "Diwali", explanation: "Diwali is the festival of lights.", correct: false },
      { text: "Raksha Bandhan", explanation: "Raksha Bandhan celebrates the bond between siblings.", correct: false }
    ]
  },
  {
    question: "What does the concept of 'Samsara' refer to in Sanatan Dharma?",
    options: [
      { text: "The cycle of birth, death, and rebirth", explanation: "Samsara describes the continuous cycle of reincarnation.", correct: true },
      { text: "Enlightenment", explanation: "Enlightenment (Moksha) is liberation from Samsara.", correct: false },
      { text: "Accumulated Karma", explanation: "While karma influences Samsara, it is not the cycle itself.", correct: false },
      { text: "The realm of gods", explanation: "The realm of gods is a part of the cosmology, not the cycle of Samsara.", correct: false }
    ]
  },
  {
    question: "Which term in Sanatan Dharma describes liberation from the cycle of Samsara?",
    options: [
      { text: "Moksha", explanation: "Moksha is the release from the cycle of birth and death.", correct: true },
      { text: "Karma", explanation: "Karma refers to actions and their consequences.", correct: false },
      { text: "Samskara", explanation: "Samskara refers to ritualistic ceremonies, not liberation.", correct: false },
      { text: "Dharma", explanation: "Dharma signifies duty and righteousness, not liberation.", correct: false }
    ]
  },
  {
    question: "What is the significance of 'Karma' in Sanatan Dharma?",
    options: [
      { text: "It represents the law of cause and effect.", explanation: "Karma dictates that every action has consequences affecting future lives.", correct: true },
      { text: "It is a method of meditation.", explanation: "Karma is about actions and consequences, not a meditation technique.", correct: false },
      { text: "It determines one's social status.", explanation: "Karma influences life circumstances but does not solely determine social status.", correct: false },
      { text: "It is a path to immediate enlightenment.", explanation: "Karma is a long-term principle, not a shortcut to enlightenment.", correct: false }
    ]
  },
  {
    question: "Which term refers to the rites of passage performed during major life events in Sanatan Dharma?",
    options: [
      { text: "Samskara", explanation: "Samskara are ritualistic ceremonies marking life's milestones.", correct: true },
      { text: "Yoga", explanation: "Yoga is a practice for spiritual and physical well-being, not a rite of passage.", correct: false },
      { text: "Puja", explanation: "Puja is a form of worship rather than a life-stage ritual.", correct: false },
      { text: "Upasana", explanation: "Upasana refers to meditation or devotion, not a ceremonial rite.", correct: false }
    ]
  },
  {
    question: "What does the term 'Dharma' represent in Sanatan Dharma?",
    options: [
      { text: "The righteous path and duty", explanation: "Dharma signifies the moral and ethical duties each person must follow.", correct: true },
      { text: "A form of meditation", explanation: "Dharma is about the right way of living, not a meditation technique.", correct: false },
      { text: "Universal law", explanation: "While it hints at a universal order, this option is too vague.", correct: false },
      { text: "Ritualistic practice", explanation: "Dharma encompasses more than rituals; it is about duty and righteousness.", correct: false }
    ]
  }
];

const CircularProgressBar = ({ progress }) => {
  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  return (

    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#e6e6e6"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#4caf50"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="18">
        {Math.round(progress)}%
      </text>
    </svg>
  );
};

function Quiz({ onClose }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerOptionClick = (option) => {
    if (selectedAnswer) return; // Prevent multiple selections
    setSelectedAnswer(option);
    if (option.correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  // Calculate progress percentage – including answered questions
  const progress = ((currentQuestion + (selectedAnswer ? 1 : 0)) / questions.length) * 100;

  const navigate = useNavigate();
  return (
    
    <div>
    <span className="translate-x-[51px] translate-y-[38px] flex flex-row"><ArrowBackIcon color="primary" fontSize="medium" />
    &nbsp;<p onClick={()=>navigate("/dashboard")} className=" text-blue-500">Go back</p></span>
    <div className="quiz-container">
      {onClose && (
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      )}
      <div className="quiz-content">
        {showScore ? (
          <div className="score-section">
            <h2>
              Your Score: {score} / {questions.length}
            </h2>
            <button onClick={restartQuiz} className="restart-button">
              Restart Quiz
            </button>
          </div>
        ) : (
          <>
            <div className="progress-section">
              <CircularProgressBar progress={progress} />
            </div>
            <div className="question-section">
              <h3 className="question-text">{questions[currentQuestion].question}</h3>
              <div className="option-section">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    disabled={!!selectedAnswer}
                    className={`option-button ${
                      selectedAnswer
                        ? option.correct
                          ? 'correct'
                          : 'wrong'
                        : ''
                    }`}
                    onClick={() => handleAnswerOptionClick(option)}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
              {selectedAnswer && (
                <div className="explanation-section">
                  <p className="option-explanation">{selectedAnswer.explanation}</p>
                  <button onClick={handleNextQuestion} className="next-button">
                    Next
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
    </div>
  );
}

export default Quiz;