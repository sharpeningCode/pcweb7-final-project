import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API, POST } from "../constants";


export default function Login() {
  const [error] = useState("");
  const [values, setValues] = useState({ username: "", password: "" });
  const navigate = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();
      axios.post('http://localhost:3000/login', values)
      .then((res) => {
        if (res.data.Login) {
          navigate('/home');
        }
      })
      .catch(err => console.log(err))
    }

    const handleInput = async (event) => { 
      setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }

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
    }, [navigate])

    
    return (
        <>
          <Container>
          <h1 style={{ marginBlock: "1rem" }}>Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={values.username}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleInput}
              />
            </Form.Group>
            <Button variant="primary"
            onClick={async () => {
              const user = { username: values.username, password: values.password };
              try {
                await axios.post(API + POST, user);
                navigate("/home");
              } catch (error) {
                console.log(error.message);
              }
            }}
          >Login</Button>
          </Form>
          <p>{error}</p>
          </Container>
        </>
      );
  }