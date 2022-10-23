import React, { useState, useEffect } from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

    <Router>
      <NavBar />
      <LogIn />
      <Switch>
      
        {/* <Login /> */}
            
        <Route exact path="/journal_entries/new" render={() => <JournalForm setJournallist={setJournallist} /> } />
       
        {/* <Route exact path="/">
          <LogIn /> or <Home />
        </Route>      */}
      
        <Route exact path="/journal_entries" render={() => <JournalList journallist={journallist} />} />
           
        <Route exact path="/journal_entries/:id" render={() => <JournalPreview /> } />
        
      </Switch>
    </Router>
    </div>
  );
}

export default App;
