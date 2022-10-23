import React from 'react'
import { useHistory } from 'react-router-dom'

function JournalCard({ id, title, content, date }) {
  
  let history = useHistory()
  
  function handleClick() {
    history.push(`/journal_entries/${id}`)
  }
  
  
  return (
    <div className="journal-card">
      <h3>{title} onClick={handleClick}</h3>
      <h4>{date}</h4>
    </div>
  )
}

// all in one element? h4...
// not in app in user's home page
export default JournalCard