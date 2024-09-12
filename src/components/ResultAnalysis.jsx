// import React from 'react';
import PropTypes from 'prop-types';

function ResultAnalysis({ score, totalQuestions }) {
  return (
    <div>
      <h2>Quiz Results</h2>
      <p>Your Score: {score} / {totalQuestions}</p>
      <p>{((score / totalQuestions) * 100).toFixed(2)}% Correct</p>
    </div>
  );
}

ResultAnalysis.propTypes = {
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
};

export default ResultAnalysis;
