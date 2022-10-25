import React, { useState, useEffect } from "react";
import NavBar from './NavBar';
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import JournalForm from "./JournalForm";
import JournalList from './JournalList';
import JournalPreview from './JournalPreview'

function App() {
  const [user, setUser] = useState(null);
  const [journals, setJournals] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:9292/journal_entries")
      .then((r) => r.json())
      .then((data) => setJournals(data));
  }, []);

  function handleDeleteJournal(deletedJournal) {
    const updatedJournals = journals.filter((journal) => journal.id !== deletedJournal.id)
    setJournals(updatedJournals)
  }
  return (
    <div className="App">
      {/* <Login setUser={setUser} /> */}
      {/* {user ? (
        <JournalForm setJournals={setJournals} user={user} />
        ) : null}
      */}
      <NavBar />
      <Routes>
        <Route exact path="/journal_entries/new" element={<JournalForm setJournals={setJournals} />} />
        <Route exact path="/" element={<Login setUser={setUser} />} />  
        <Route exact path="/journal_entries" element={<JournalList journals={journals} handleDeleteJournal={handleDeleteJournal}/>} />
        <Route exact path="/journal_entries/:id" element={<JournalPreview />} />
      </Routes>
    </div>
  );
}

export default App;
