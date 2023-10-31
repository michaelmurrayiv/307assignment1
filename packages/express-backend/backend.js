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
    const userToRemove = req.params['id'];
    const ret = removeUser(userToRemove);
    if (ret === -1) {
        res.status(404).send();
    } else {
        res.status(204).send();
    }
});

// helper functions

const findUserByName = (name) => { 
    return users['users_list']
        .filter( (user) => user['name'] === name); 
}

const findUserById = (id) =>
    users['users_list']
        .find( (user) => user['id'] === id);

const addUser = (user) => {
    users['users_list'].push(user);
    return user;
}

const removeUser = (id) => {
    //find index of user to be removed
    const ind = users['users_list'].findIndex( (user) => user['id'] === id);
    //splice command mutates the array
    if (ind >= 0) {
        return users['users_list']
            .splice(ind, 1);
    } else {
        return -1
    }
}

const findUserByNameAndJob = (name, job) => { 
    return users['users_list']
        .filter( (user) => user['name'] === name)
        .filter( (user) => user['job'] === job); 
}

// -------------------------

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${prt}');
});

const users = { 
    users_list : [
       { 
          id : 'xyz789',
          name : 'Charlie',
          job: 'Janitor',
       },
       {
          id : 'abc123', 
          name: 'Mac',
          job: 'Bouncer',
       },
       {
          id : 'ppp222', 
          name: 'Mac',
          job: 'Professor',
       }, 
       {
          id: 'yat999', 
          name: 'Dee',
          job: 'Aspring actress',
       },
       {
          id: 'zap555', 
          name: 'Dennis',
          job: 'Bartender',
       }
    ]
 }