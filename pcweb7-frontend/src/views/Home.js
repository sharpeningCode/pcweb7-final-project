import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [role, setRole] = useState("");
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get("http://localhost:8000")
            .then((res) => {
                if (res.data.valid) {
                    setRole(res.data.role);
                } else {
                    navigate("/login");
                }
            })
            .catch((err) => console.log(err));
    }, [navigate]);

    return (
        <>
            <Container>
                <h1 style={{ marginBlock: "1rem" }}>Home</h1>
                <p>Welcome, {role}!</p>
            </Container>
        </>
    );
}