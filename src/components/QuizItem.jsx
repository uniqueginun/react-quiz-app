import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

export default function QuizItem({ item }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { question, answers, correct_answer } = item;
  const card = {
    border: "1px solid #eeeeee",
    borderRadius: "3px",
    padding: "15px",
    width: "250px",
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className="react-card-front" style={card}>
        <b>{question}</b>
        {answers.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <button onClick={() => setIsFlipped((isFlipped) => !isFlipped)}>
          show answer
        </button>
      </div>

      <div className="react-card-back" style={card}>
        {correct_answer}
        <button onClick={() => setIsFlipped((isFlipped) => !isFlipped)}>
          back to question
        </button>
      </div>
    </ReactCardFlip>
  );
}
