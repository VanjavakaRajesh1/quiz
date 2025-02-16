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
  {
    id: 6,
    question: "What is the square root of 64?",
    options: ["6", "8", "10", "12"],
    correct_answer: "8",
  },
  {
    id: 7,
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    correct_answer: "7",
  },
  {
    id: 8,
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    correct_answer: "Leonardo da Vinci",
  },
  {
    id: 9,
    question: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "CO2", "NaCl"],
    correct_answer: "H2O",
  },
  {
    id: 10,
    question: "Which gas do plants use for photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correct_answer: "Carbon Dioxide",
  },
  {
    id: 11,
    question: "Which ocean is the largest?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
    correct_answer: "Pacific Ocean",
  },
  {
    id: 12,
    question: "Who developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Galileo Galilei",
      "Albert Einstein",
      "Nikola Tesla",
    ],
    correct_answer: "Albert Einstein",
  },
  {
    id: 13,
    question: "Which country is famous for the Great Wall?",
    options: ["India", "China", "Egypt", "Japan"],
    correct_answer: "China",
  },
  {
    id: 14,
    question: "What is the capital of Japan?",
    options: ["Seoul", "Bangkok", "Beijing", "Tokyo"],
    correct_answer: "Tokyo",
  },
  {
    id: 15,
    question: "How many legs does a spider have?",
    options: ["6", "8", "10", "12"],
    correct_answer: "8",
  },
  {
    id: 16,
    question: "Which metal is the best conductor of electricity?",
    options: ["Gold", "Silver", "Copper", "Iron"],
    correct_answer: "Silver",
  },
  {
    id: 17,
    question: "What is the fastest land animal?",
    options: ["Cheetah", "Lion", "Horse", "Kangaroo"],
    correct_answer: "Cheetah",
  },
  {
    id: 18,
    question: "Who was the first person to step on the moon?",
    options: [
      "Buzz Aldrin",
      "Yuri Gagarin",
      "Neil Armstrong",
      "Michael Collins",
    ],
    correct_answer: "Neil Armstrong",
  },
  {
    id: 19,
    question: "Which blood type is the universal donor?",
    options: ["A", "B", "AB", "O"],
    correct_answer: "O",
  },
  {
    id: 20,
    question: "Which is the longest river in the world?",
    options: [
      "Amazon River",
      "Nile River",
      "Yangtze River",
      "Mississippi River",
    ],
    correct_answer: "Nile River",
  },
  {
    id: 21,
    question: "How many players are there in a football (soccer) team?",
    options: ["9", "10", "11", "12"],
    correct_answer: "11",
  },
  {
    id: 22,
    question: "Which gas makes up most of Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correct_answer: "Nitrogen",
  },
  {
    id: 23,
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    correct_answer: "Au",
  },
  {
    id: 24,
    question: "Which continent is the Sahara Desert located in?",
    options: ["Asia", "South America", "Africa", "Australia"],
    correct_answer: "Africa",
  },
  {
    id: 25,
    question: "What is the freezing point of water in Celsius?",
    options: ["0°C", "10°C", "20°C", "32°C"],
    correct_answer: "0°C",
  },
];
const Quiz = () => {
  const [selectoption, setselectoption] = useState({});
  const [ansstatus, setansstatus] = useState({});
  const [score, setscore] = useState(null);
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
              <div className="card col-md-4 col-sm-12 border-0 bg-black">
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
                              fontWeight: "bold",
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
        <h1 className="m-3">{score}</h1>
      </div>
    </>
  );
};

export default Quiz;
