import React, { useState}  from 'react'
import { useNavigate } from "react-router-dom"

function Login({ setUser }) {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: ""
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const config = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(credentials)
    }

    fetch("http://localhost:9292/users", config)
      .then(resp => resp.json())
      .then(data => {
        setUser(data)
      setCredentials({
        name: "",
        email: "",
        password: ""
      })
      })
      .catch(err => console.log(err))
      navigate("/journal_entries")
  }

  const handleChange = ({target}) => {
    const stateCopy = JSON.parse(JSON.stringify(credentials))
    stateCopy[target.name] = target.value
    setCredentials(stateCopy)
  }

  return (
    <div className="log-in">
      <h2> Login </h2>
      <form onSubmit={handleSubmit}>
        <label>  Name  </label>
        <input name="name" type="text" onChange={handleChange} value={credentials.name}></input>
        <label>  Email  </label>
        <input name="email" type="text" onChange={handleChange} value={credentials.email}></input>
        <label>  Password  </label>
        <input name="password" type="text" onChange={handleChange} value={credentials.password}></input>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default Login