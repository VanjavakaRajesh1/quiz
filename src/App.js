import react, { useState } from "react";
const quiz = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct_answer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct_answer: "Mars",
  },
  {
    id: 3,
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "J.K. Rowling",
      "Jane Austen",
    ],
    correct_answer: "William Shakespeare",
  },
  {
    id: 4,
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
    correct_answer: "Blue Whale",
  },
  {
    id: 5,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Gold", "Osmium", "Ozone"],
    correct_answer: "Oxygen",
  },
];
function App() {
  const [selectoption, setselectoption] = useState({});
  const [score, setscore] = useState(null);
  const optionselect = (e) => {
    setselectoption((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const submitoptions = () => {
    let res = 0;
    quiz.forEach((questions) => {
      if (selectoption[questions.id] === questions.correct_answer)
        res = res + 1;
    });
    setscore(`${res}/${quiz.length}`);
  };
  return (
    <>
      <h1>Quiz</h1>
      {quiz.map((questions, index) => {
        return (
          <div>
            <h2>{questions.question}</h2>
            <ul>
              {questions.options.map((option) => {
                return (
                  <div>
                    <input
                      type="radio"
                      name={questions.id}
                      value={option}
                      onClick={optionselect}
                    />
                    <label>{option}</label>
                  </div>
                );
              })}
            </ul>
          </div>
        );
      })}
      <button onClick={submitoptions}>submit</button>
      <h1>{score}</h1>
    </>
  );
}

export default App;
