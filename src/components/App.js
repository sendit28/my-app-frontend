import React, {useState } from 'react';
// import './App.css';
import NavBar from './NavBar';
import Login from './Login';

function App() {
 
 const initialState = {
  title: "",
  date: "",
  content: "",
 }

 const [formData, setFormData] = useState(initialState)

 const handleSubmit = (e) => {
  e.preventDefault()
 }
 const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
 }



//   fetch(http://localhost:9292/journal_entries", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(formData)
//   })
//     .then(r=> r.j.son())
//     .then(data => set................))

//     setFormData(initialState)

//  }
 
 
  return (
    <div className="App">
      hello
    <NavBar/>
    <Login/>
    
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
