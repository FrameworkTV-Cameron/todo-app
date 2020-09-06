const express = require('express');
const bodyParsesr = require('body-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 4000;

let Todo = require('./todo.model');

app.use(cors());
app.use(bodyParser.json());
const todoRoutes = express.Router();

mongoose.connect("<Replace with your connection URL>", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection succsessful.")
})

todoRoutes
    .route('/')
    .get((req, res) => {
        Todo.find((err, todos) => {
            if (err) {
                console.log(err);
            } else {
                res.json(todos);
            }
        });
    });
todoRoutes
    .route('/:id')
    .get((req, res) => {
        let id = req.params.id;
        Todo.findById(id, (err, todo) => {
            res.json(todo);
        });
    });
todoRoutes
    .route('/add')
    .post(function (req, res) {
        let todo = new Todo(req.body);
        todo
            .save()
            .then(todo => {
                res
                    .status(200)
                    .json({'todo': 'todo added successfully'});
            })
            .catch(err => {
                res
                    .status(400)
                    .send('adding new todo failed');
            });
    });

todoRoutes
    .route('/update/:id')
    .post(function (req, res) {
        Todo
            .findById(req.params.id, function (err, todo) {
                if (!todo) 
                    res.status(404).send("data is not found");
                else 
                    todo.description = req.body.description;
                todo.responsible = req.body.responsible;
                todo._priority = req.body.priority;
                todo.completed = req.body.completed;

                todo
                    .save()
                    .then(todo => {
                        res.json('Todo updated!');
                    })
                    .catch(err => {
                        res
                            .status(400)
                            .send("Update not possible");
                    });
            });
    });

app.use('/todos', todoRoutes);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
