import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({source, deletingRendered}) {

  function deleteBtn(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    }).then(res => res.json())
      .then(() => deletingRendered(id))
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
          />
        )}
      </ul>
    </section>
  );
}

export default QuestionList;
