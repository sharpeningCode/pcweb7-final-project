import React from "react";
import { Container } from "react-bootstrap";
import App from "../App.js";

export default function Missing() {

  return (
      <>
        <App />
        <Container>
        <h1 style={{ marginBlock: "1rem" }}>Page not found</h1>
        </Container>
      </>
    );
}