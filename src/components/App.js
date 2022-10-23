import React, { useState, useEffect } from 'react';
// import './App.css';
import NavBar from './NavBar';
import Login from './Login';
import JournalForm from './JournalForm';
import JournalList from './JournalList';
import JournalPreview from './JournalPreview'

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
    <NavBar />
    <Login />
    <JournalForm />
    <JournalList />
    <JournalPreview />
  
    </div>
  );
}

export default App;
