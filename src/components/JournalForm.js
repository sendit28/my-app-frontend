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
    <div>JournalForm</div>
  
  
    )
}

export default JournalForm