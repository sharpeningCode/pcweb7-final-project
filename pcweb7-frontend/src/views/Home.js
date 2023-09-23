import React from "react";
import { Container } from "react-bootstrap";
import App from "../App.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:3000')
        .then((res) => {
            if (res.data.valid) {
                setUsername(res.data.username);
            } else {
                navigate('/login');
            }
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <>
            <App />
            <Container>
            <h1 style={{ marginBlock: "1rem" }}>Home</h1>
            </Container>
        </>
        );
}