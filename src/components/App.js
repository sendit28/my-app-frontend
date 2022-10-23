import React, { useState, useEffect } from 'react';
// import './App.css';
import NavBar from './NavBar';
import Login from './Login';
import JournalForm from './JournalForm';

function App() {

  const [journallist, setJournallist] = useState([])

  useEffect (() => {
    fetch("http://localhost:9292/journal_entries")
      .then(r => r.json())
      .then(data =>setJournallist)
  }, [])
 
 



  
 
 
  return (
    <div className="App">
      hello
    <NavBar/>
    <Login/>
    <JournalForm/>
    
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
  );
}

export default App;
