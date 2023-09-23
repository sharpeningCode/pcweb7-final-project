import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./index.js";
import "./App.css";

function App() {

  return (
    <>
      <Navbar variant="light" bg="light">
        <Container>
          <Navbar.Brand href="/">worK_Break</Navbar.Brand>
          <Nav>
            <Nav.Link to={"/"}>Login</Nav.Link>
            <Nav.Link to={"/home"}>Home</Nav.Link>
            <Nav.Link href="/user">User</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
            <Nav.Link href="/add">New Leave</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
