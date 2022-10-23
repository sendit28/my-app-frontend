import React, { useState, useEffect } from 'react';
// import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import JournalForm from './components/JournalForm';

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
    
    </div>
  );
}

export default App;
