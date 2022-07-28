import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [source, setSource] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(res => res.json())
      .then((list) => setSource(list))
  }, [])

  function renderNewList(newItem) {
    setSource([...source, newItem])
  }

  function deletingRendered(id) {
    const filteredList = source.filter(
      (item) => item.id !== id)
    setSource(filteredList)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form"
        ? <QuestionForm renderNewList={renderNewList}/>
        : <QuestionList
            source={source}
            deletingRendered={deletingRendered}
          />
      }
    </main>
  );
}

export default App;
