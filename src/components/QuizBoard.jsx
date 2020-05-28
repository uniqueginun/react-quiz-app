import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import QuizItem from "./QuizItem";

export default function QuizBoard({ quiz }) {
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-10">
        <div className="card-container">
          {quiz.map((item, index) => (
            <QuizItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
