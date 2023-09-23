import React from "react";
import { Container } from "react-bootstrap";

export default function Admin() {

  return (
      <>
        <Container>
        <h1 style={{ marginBlock: "1rem" }}>Admin</h1>
        <a href="/register">Register a new user</a>
        </Container>
      </>
    );
}