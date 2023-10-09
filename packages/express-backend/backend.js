import express from "express";
import cors from "cors";

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
    const name = req.query.name;
    const job = req.query.job;
    if (name != undefined){
        let result;
        if (job == undefined) { // only name was provided
            result = findUserByName(name);
        } else { // both name and job were provided
            result = findUserByNameAndJob(name, job);
        }

        result = {users_list: result};
        res.send(result);
    }
    else{
        res.send(users);
    }
});

// get users by id
app.get('/users/:id', (req, res) => {
    const id = req.params['id'];
    let result = findUserById(id);
    if (result === undefined) {
        res.status(404).send('Resource not found.');
    } else {
        res.send(result);
    }
});

// add users
app.post('/users', (req, res) => {
    const userToAdd = req.body;
    addUser(userToAdd);
    res.status(201).send();
});

// delete users by id
app.delete('/users/:id', (req, res) => {
    const userToRemove = req.params['id'];
    removeUser(userToRemove);
    res.send();
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
    var ind = users['users_list'].map( (user) => user['id'] === id);
    //splice command mutates the array
    return users['users_list']
        .splice(ind, 1);
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