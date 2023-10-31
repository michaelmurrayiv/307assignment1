import express from "express";
import cors from "cors";
import userServices from "./user-services.js"

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

// routes

// page containing "hello world"
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// get users (by name if requested using users?name=:name)
app.get('/users', (req, res) => {
    userServices.getUsers(req.query.name, req.query.job)
        .then ((result) => {
            res.send(result)
        })
        .catch((error) => {
            res.status(500).send("Error: " + error);
        })
});

// get users by id
app.get('/users/:id', (req, res) => {
    userServices.findUserById(req.params['id'])
        .then ((result) => {
            res.send(result)
        })
        .catch((error) => {
            res.status(500).send("Error: " + error);
        })
});

// add users
app.post('/users', (req, res) => {
    userServices.addUser(req.body)
        .then ((result) => {
            res.status(201).send(result)
        })
        .catch((error) => {
            res.status(500).send("Error: " + error);
        })
});

// delete users by id
app.delete('/users/:id', (req, res) => {
    userServices.removeUser(req.params['id'])
        .then ((result) => {
            if (result!=null) {
                res.status(204).send()
            } else {
                res.status(404).send();
            }
        })
        .catch((error) => {
            res.status(500).send("Error: " + error);
        })
});


app.listen(port, () => {
    console.log('Example app listening at http://localhost:${prt}');
});
