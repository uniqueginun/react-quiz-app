import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Form({ handleChange }) {
  const [options, setOptions] = useState([]);
  const [category, setCategory] = useState(26);
  const [difficulty, setDifficulty] = useState("medium");
  const [amount, setAmount] = useState(5);
  useEffect(() => {
    Axios.get("https://opentdb.com/api_category.php")
      .then((res) => res.data.trivia_categories)
      .then((res) => setOptions(res))
      .catch((err) => console.log(err));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange({ category, amount, difficulty });
  };
  return (
    <div className="row justify-content-center mt-3">
      <form onSubmit={handleSubmit}>
        <div className="card text-dark bg-secondary mb-3">
          <div className="card-header">Choose your own exam</div>
          <div className="card-body">
            <div className="col-md-6">
              <div className="form-group">
                <label
                  className="form-control-label"
                  htmlFor="questions-category"
                >
                  Choose Category
                </label>
                <select
                  defaultValue={26}
                  className="custom-select"
                  id="questions-cat"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {options.length
                    ? options.map((option) => (
                        <option value={option.id} key={option.id}>
                          {option.name}
                        </option>
                      ))
                    : null}
                </select>
              </div>
              <div className="form-group">
                <label
                  className="form-control-label"
                  htmlFor="questions-number"
                >
                  Choose Number Of Questions
                </label>
                <input
                  type="number"
                  min="3"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="form-control"
                  id="questions-number"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="deficulty">Select Difficulty</label>
                <select
                  className="form-control"
                  id="deficulty"
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="btn text-dark btn-outline-secondary">
          Start Quiz
        </button>
      </form>
    </div>
  );
}
