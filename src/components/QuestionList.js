import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({source, deletingRendered, updatingRender}) {

  function deleteBtn(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    }).then(res => res.json())
      .then(() => deletingRendered(id))
  }

  function updateAnswer(id, updatedIndex) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updatedIndex)
    }).then(res => res.json())
      .then(updatedItem => updatingRender(updatedItem))
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {source.map((item) =>
          <QuestionItem
            key={item.id}
            question={item}
            deleteBtn={deleteBtn}
            updateAnswer={updateAnswer}
          />
        )}
      </ul>
    </section>
  );
}

export default QuestionList;
