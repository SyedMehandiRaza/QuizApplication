import { useState } from 'react';
import PropTypes from 'prop-types';
import Timer from './Timer';
import ResultAnalysis from './ResultAnalysis';


function QuizTaking({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setQuizEnded(true);
    }
  };

  if (quizEnded) {
    return <ResultAnalysis score={score} totalQuestions={questions.length} />;
  }

  if (questions.length === 0) return <p>No questions available</p>;

  return (
    <div>
      <Timer onEnd={() => setQuizEnded(true)} />
      <h2>{questions[currentQuestionIndex].question}</h2>
      {questions[currentQuestionIndex].options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleAnswer(option)}
          style={{ backgroundColor: selectedOption === option ? '#d0d0d0' : '#e0e0e0' }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

QuizTaking.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default QuizTaking;
