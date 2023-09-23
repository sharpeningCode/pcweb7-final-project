import React from "react";
import { Container } from "react-bootstrap";
import App from "../App.js";

export default function Admin() {

  return (
      <>
        <App />
        <Container>
        <h1 style={{ marginBlock: "1rem" }}>Admin</h1>
        </Container>
      </>
    );
}