import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import axios from "axios";
import QuizBoard from "./components/QuizBoard";

axios.defaults.baseURL = "https://opentdb.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

function App() {
  const [quiz, setQuiz] = useState([]);
  const fetchQuestions = async (params) => {
    setQuiz([]);
    const { data } = await axios.get("api.php", {
      params,
    });
    const quiz = data.results.map((item) => {
      const answers = [...item.incorrect_answers, item.correct_answer];
      return {
        question: item.question,
        correct_answer: item.correct_answer,
        answers,
      };
    });

    setQuiz(quiz);
  };
  return (
    <>
      <Header />
      <Form handleChange={fetchQuestions} />
      {quiz.length ? <QuizBoard quiz={quiz} /> : null}
    </>
  );
}

export default App;
