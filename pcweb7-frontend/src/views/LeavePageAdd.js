import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { NumericFormat } from 'react-number-format';
import { useNavigate, useParams } from "react-router-dom";
import { ADD, API } from "../constants";

export default function LeavePageAdd() {
  const params = useParams();
  const id = params.id;
  const [title, setTitle] = useState("Please select");
  const [description, setDescription] = useState("");
  const [document, setDocument] = useState("");
  const [status, setStatus] = useState("Pending");
  const [num_days, setNum_days] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const navigate = useNavigate();

  return (
      <>
        <Container>
        <h1 style={{ marginBlock: "1rem" }}>Add Leave</h1>
        <Form>
          
          <Row>
            <Col xs={3}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Leave Type</Form.Label>
                <Form.Select
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                >
                  <option>Please select</option>
                  <option value="Annual">Annual</option>
                  <option value="Hospitalisation">Hospitalisation</option>
                  <option value="Medical">Medical</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description of leave"
                  value={description}
                  onChange={(text) => setDescription(text.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formFile">
            <Form.Label>File Input</Form.Label>
            <Form.Control
              type="file"
              value={document}
              onChange={(file) => setDocument(file.target.value)}
            />
          </Form.Group>

          <Row>
            <Col xs={2}>
            <Form.Group className="mb-3" controlId="num_days">
              <Form.Label>Number of days</Form.Label>
              <NumericFormat className="form-control"
                type="number"
                precision={0.5}
                step={0.5}
                min={0.5}
                value={num_days} decimalScale={1}
                onChange={(number) => setNum_days(number.target.value)}
              />
            </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="start_date">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="DD-MM-YYYY"
                  value={start_date}
                  onChange={(date) => setStart_date(date.target.value)}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="end_date">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="DD-MM-YYYY"
                  value={end_date}
                  onChange={(date) => setEnd_date(date.target.value)}
                /> 
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>

          <Form.Group className="mb-3" controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              value={status}
              onChange={(text) => setStatus(text.target.value)}
              disabled
            />
          </Form.Group>

          <Button variant="primary"
            onClick={ async(e) => {
              const leave = { title, description, document, status, num_days, start_date, end_date };
              try {
                await axios.post(API + ADD + "/" + id, leave);
                navigate("/home");
              } catch (error) {
                console.log(error.message);
              }
            }}
          >Submit</Button>
        </Form>
      </Container>
      </>
    );
}