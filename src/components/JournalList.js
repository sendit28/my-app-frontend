import React from "react";


function JournalList({ journals, handleDeleteJournal }) {
  const journalItems = journals.map((journalObj, index) => {
    
  function handleDeleteClick() {
      fetch(`http://localhost:9292/journal_entries/${journalObj.id}`, {
        method: "DELETE",
      })
        .then((r) =>r.json())
        .then((deletedJournal) => handleDeleteJournal(deletedJournal))
      }

    return (
      <div key={index}>
        <p>{journalObj.title}</p>
        <p>{journalObj.date}</p>
        <p>{journalObj.content}</p>
        <button onClick={handleDeleteClick}> Delete </button>
      </div>
    );
  });

  return <div className="journal-list">{journalItems}</div>;
}

export default JournalList;
