import express from "express";
import mysql from "mysql2";
import cors from "cors";

const pool = mysql
    .createPool ({
        "host": "sql12.freemysqlhosting.net",
        "user": "sql12645135",
        "password": "h8unzukyHZ",
        "database": "sql12645135"
    })
    .promise();

const app = express();
const port = 8080;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`pcweb7-api listening on port ${port}`);
});

// Database table: users
async function getUser(id) {
    const [rows] = await pool.query(
        "SELECT * FROM users WHERE id = ?", [id]
    );
    return rows[0];
}

async function deleteUser(id) {
    await pool.query(
        "DELETE FROM users WHERE id = ?", [id]
    );
}

app.get("/users/all", async (req, res) => {
    const all = await getAllLeave();
    res.send(all).status(200);
});

app.post('/login', async (req, res) => {
    const { username, email, password, role } = req.body;
    const register = await register(username, email, password, role);
    console.log("User login: ", leave);
    res.send({ status: "success" }).status(200);
});

app.get("/user/:id", async(req, res) => {
    const id = req.params.id;
    const user = await getUser(id);
    res.send(user).status(200);
});

app.delete("/user/:id", async (req, res) => {
    const id = req.params.id;
    await deleteUser(id);
    res.send({ status: "success" }).status(200);
});

// register user (by admin)
async function register(username, email, password, role) {
    const [result] = await pool.query(
        "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)", [username, email, password, role]
    );
    const id = result.insertId;
    return getUser(id);
}

app.post('/register', async (req, res) => {
    const { username, email, password, role } = req.body;
    const register = await register(username, email, password, role);
    console.log("User added: ", leave);
    res.send({ status: "success" }).status(200);
});

// login user
app.get('/login' , (req, res) => {
    if (req.session.username) {
        return res.json({valid: true, role: req.session.role})
    } else {
        return res.json({valid: false})
    }
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await getUser(username, password);
    if (user) {
        req.session.username = username;
        req.session.password = user.password;
        return res.json({valid: true, role: user.password})
    } else {
        return res.json({valid: false})
    }
});

// Database table: leave_summary
async function getLeave(id) {
    const [rows] = await pool.query(
        "SELECT * FROM leave_summary WHERE id = ?", [id]
    );
    return rows[0];
}

async function addLeave(title, description, document, status, num_days, start_date, end_date) {
    const [result] = await pool.query(
        "INSERT INTO leave_summary (title, description, document, status, num_days, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?, ?)", [title, description, document, status, num_days, start_date, end_date]
    );
    const id = result.insertId;
    return getLeave(id);
}

async function updateLeave(id, title, description, document, status, num_days, start_date, end_date) {
    await pool.query(
        "UPDATE leave_summary SET title = ?, description = ?, document = ?, status = ?, num_days = ?, start_date = ?, end_date = ? WHERE id = ?", [title, description, document, status, num_days, start_date, end_date, id]
    );
    return getLeave(id);
}

async function deleteLeave(id) {
    await pool.query(
        "DELETE FROM leave_summary WHERE id = ?", [id]
    );
}

async function getAllLeave() {
    const [rows] = await pool.query("SELECT * FROM leave_summary");
    return rows;
}

app.get("/all", async (req, res) => {
    const all = await getAllLeave();
    res.send(all).status(200);
});

app.post("/leave/add", async (req, res) => {
    const { title, description, document, status, num_days, start_date, end_date } = req.body;
    const leave = await addLeave(title, description, document, status, num_days, start_date, end_date);
    console.log("Leave added: ", leave);
    res.send({ status: "success" }).status(200);
});

app.get("/leave/:id", async(req, res) => {
    const id = req.params.id;
    const leave = await getLeave(id);
    res.send(leave).status(200);
});

app.put("/leave/:id", async (req, res) => {
    const id = req.params.id;
    const { title, description, document, status, num_days, start_date, end_date } = req.body;
    const updatedLeave = await updateLeave(id, title, description, document, status, num_days, start_date, end_date);
    res.send(updatedLeave).status(200);
});

app.delete("/leave/:id", async (req, res) => {
    const id = req.params.id;
    await deleteLeave(id);
    res.send({ status: "success" }).status(200);
});