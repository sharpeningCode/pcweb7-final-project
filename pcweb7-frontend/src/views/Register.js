import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error] = useState("");

  return (
      <>
        <Container>
        <h1 style={{ marginBlock: "1rem" }}>Register</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="/login">Have an existing account? Login here.</a>
          </Form.Group>
          <Button variant="primary">Sign Up</Button>
        </Form>
        <p>{error}</p>
        </Container>
      </>
    );
}