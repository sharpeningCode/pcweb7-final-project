import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import App from "../App.js";

export default function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  })

  const navigate = useNavigate();

  const handleInput = (event) => { 
    setValues(prev => ({...prev, [event.target.name]: event.target.value}))
  }
  axios.defaults.withCredentials = true;
  
  useEffect(() => {
    axios.get('http://localhost:3000')
    .then( res => {
      if (res.data.valid) {
        navigate('/home');
      } else {
        navigate('/login');
      }
    })

    .catch(err => console.log(err))
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/login', values)
    .then((res) => {
      if (res.data.Login) {
        navigate('/home');
      }
    })
    .catch(err => console.log(err))
  }

  
  return (
      <>
        <App />
        <Container>
        <h1 style={{ marginBlock: "1rem" }}>Login</h1>
        </Container>
      </>
    );
}