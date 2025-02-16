import React, { useState } from "react";
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
const Quiz = () => {
  const [selectoption, setselectoption] = useState({});
  const [ansstatus, setansstatus] = useState({});
  const [score, setscore] = useState(null);
  // const  selectcolor = (id, option) => {
  //   const color= selectoption[id] === option ?"blue":""
  //   return color
  // };
  const optionselect = (e) => {
    setselectoption((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const submitoptions = () => {
    let res = 0;
    quiz.forEach((questions) => {
      if (selectoption[questions.id] === questions.correct_answer) {
        res = res + 1;
        setansstatus((prev) => {
          return { ...prev, [questions.id]: "correct" };
        });
      } else {
        setansstatus((prev) => {
          return { ...prev, [questions.id]: "incorrect" };
        });
      }
    });
    setscore(`${res}/${quiz.length}`);
    console.log(ansstatus);
  };
  return (
    <>
      <h1 className="text-center">Quiz</h1>
      <div className="container-fluid">
        <div className="row">
          {quiz.map((questions, index) => {
            return (
              <div className="card col-4 border-0 bg-black">
                <div
                  className="card-body m-2 bg-body-tertiary rounded"
                  key={index}
                >
                  <h5 className="card-title">{questions.question}</h5>
                  <ul className="card-text p-2">
                    {questions.options.map((option, index) => {
                      const isselected = selectoption[questions.id] === option;
                      const iscoorect = ansstatus[questions.id] === "correct";
                      const isfalse = ansstatus[questions.id] === "incorrect";
                      return (
                        <div key={index} className="options">
                          <input
                            type="radio"
                            name={questions.id}
                            value={option}
                            onClick={optionselect}
                          />
                          <label
                            style={{
                              color: isselected
                                ? iscoorect
                                  ? "green"
                                  : isfalse
                                  ? "red"
                                  : "blue"
                                : "black",
                              fontWeight:"bold"
                            }}
                          >
                            {option}
                          </label>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center">
        <button onClick={submitoptions} className="btn btn-success">
          submit
        </button>
        <h1>{score}</h1>
      </div>
    </>
  );
};

export default Quiz;
