import React from "react";

function QuestionItem({ question, deleteBtn, updateAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete() {
    deleteBtn(id)
  }

  function handleAnswer(e) {
    const updatedIndex = {correctIndex: parseInt(e.target.value)}
    updateAnswer(id, updatedIndex)
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleAnswer} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
