import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function JournalPreview({ onDeleteJournal }) {
  const [journal, setJournal] = useState({})
  const { id } = useParams()
  const { title, date, content } = journal 
    // including category?

  useEffect (() => {
    fetch(`http://localhost:9292/journal_entries/${id}`)
      .then(r => r.json())
      .then(data => setJournal(data))
  }, [])
  
  function handleDeleteClick() {
    fetch(`http://localhost:9292/journal_entries/${id}`, {
      method: "DELETE",
    })
      .then((r) =>r.json())
      .then((deletedJournal) => onDeleteJournal(deletedJournal))
    }

  // function
  
  return (
    <div className="journal-preview">


      <label htmlFor= "title"> Title </label>
      <p>{title}</p> 
    
      <label htmlFor= "date"> Date </label>
      <p>{date}</p> 

      <label htmlFor= "content"> Content </label>
      <p>{content}</p> 

      {/* <button onClick=handleUpdateClick}> Update </button>
      <button on Click=handleDeleteClick}> Delete </button>
     */}
    </div>
  )
}

export default JournalPreview