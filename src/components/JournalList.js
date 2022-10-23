import React from 'react'
import JournalCard from './JournalCard'

function JournalList({ journallist }) {

  const journalentries = journallist.map((entry) =>
    <JournalCard id={entry.id} title={entry.title} content={entry.content} date={entry.date} />
  
  
  
  
  return (
    <div className="journal-list">{journalentries}</div>
  )
}

export default JournalList