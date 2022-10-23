import React, { useState } from 'react'

function JournalForm({ setJournallist }) {
  
  const initialState = {
    title: "",
    date: "",
    content: "",
   }
  
   const [formData, setFormData] = useState(initialState)
  
   const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
   }

   const handleSubmit = (e) => {
    e.preventDefault()
   
  
    fetch("http://localhost:9292/journal_entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(r=> r.j.son())
      .then(data => setJournallist((journallist) => [...journallist, data]))

      setFormData(initialState)
    }
  
  
  return (
    <div className="journal-form">JournalForm
      <form onSubmit={handleSubmit}>
        <label>Title </label>
        <input name="title" type="text" onChange={handleChange} value={formData.title}></input>
        <label>Date </label>
        <input name="date" type="text" onChange={handleChange} value={formData.date}></input>
        <label>Journal Entry </label>
        <input name="content" type="text" onChange={handleChange} value={formData.content}></input>
        <input type="submit"></input>
      </form>
    </div>
  // need update and delete button on list and/or preview
  // category option
  
    )
}

export default JournalForm