import { useState } from 'react';
import QuizTaking from './components/QuizTaking';
import frontendQuizQuestions from './components/FrontendQuizQuestions'; 
// const sampleQuestions = [
//   {
//     question: "What is the capital of France?",
//     options: ["Paris", "London", "Rome", "Berlin"],
//     answer: "Paris",
//   },
//   {
//     question: "What is 2 + 2?",
//     options: ["3", "4", "5", "6"],
//     answer: "4",
//   },
// ];

const sampleQuestions = frontendQuizQuestions;

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <div className="container">
      <h1 className='heading'> Let&#39;s Check Your Frontend Knowledge in 1 Minute...</h1>
      {!quizStarted ? (
        <button onClick={() => setQuizStarted(true)}>Start Quiz</button>
      ) : (
        <QuizTaking questions={sampleQuestions} />
      )}
    </div>
  );
}

export default App;
