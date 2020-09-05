const express = require('express');
const bodyParsesr = require('body-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 4000;

let Todo = require('./todo.model');

app.use(cors());
app.use(bodyParser.json());const todoRoutes = express.Router();

app.use('/todos', todoRoutes);

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
                    todo.todo_description = req.body.todo_description;
                todo.todo_responsible = req.body.todo_responsible;
                todo.todo_priority = req.body.todo_priority;
                todo.todo_completed = req.body.todo_completed;

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

const connection = mongoose.connection;
mongoose.connect("mongodb+srv://CCampos:Potato@42!@frameworktv.2xbn4.gcp.mongodb.net/MERN_Stack?r" +
        "etryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
connection.once('open', () => {
    console.log("MongoDB connection succsessful.")
})


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
