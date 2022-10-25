import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

function JournalForm({ setJournals, user }) {
  const navigate = useNavigate()
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
   
    const formDataCopy = {...formData , user_id: user.id}
  
    fetch("http://localhost:9292/journal_entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formDataCopy)
    })
      .then(r=> r.json())
      .then(data => setJournals((journals) => [...journals, data]))
      navigate("/journal_entries")
      setFormData(initialState)
    }
  
  
  return (
    <div className="journal-form">
      <h2> Start your new journal entry here </h2>
      <form onSubmit={handleSubmit}>
        <label>  Title  </label>
        <input name="title" type="text" onChange={handleChange} value={formData.title}></input>
        <label>  Date  </label>
        <input name="date" type="text" onChange={handleChange} value={formData.date}></input>
        <label>  Journal Entry  </label>
        <input name="content" type="text" onChange={handleChange} value={formData.content}></input>
        <input type="submit"></input>
      </form>
    </div>
    )
}
// , user_id: user.id
export default JournalForm