import React, { useState, useEffect } from "react";
import axios from 'axios';

const Login = props => {
  const [user, setUser] = useState({username: '', password: ''});

  const login = e => {
    e.preventDefault()
    axios
      .post('http://localhost:5000/api/login', user)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload)
        props.history.push('/eventlist')
      })
      .catch(err => console.log(err))
  }
    const handleChange = e => {
      setUser({
        ...user,
        [e.target.name]: e.target.value
      })
      console.log(user)
    }
 



  return (
    <>
      <h1>BlockClubCalendar Login</h1>
      <form onSubmit = {login}>
        <label htmlFor = 'Username'>
          <input 
            name = 'username'
            placeholder = 'Username'
            value = {user.username}
            type = 'text'
            onChange = {handleChange}
          />
        </label>
        <label htmlFor = 'Password'>
          <input 
            type = 'text'
            name = 'password'
            value = {user.password}
            placeholder = 'Password'
            onChange = {handleChange}
          />
        </label>
        <button>Login</button>
      </form>
    </>
  );
};  

export default Login;
