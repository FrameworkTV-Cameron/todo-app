import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {
    Container,
    Jumbotron,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import CreateTodo from './CreateTodo';
import EditTodo from './EditTodo';
import TodoList from './TodoList';
import './App.css';

function App() {
    return (
        <Router>
            <Container>
                <Jumbotron fluid className=" text-center m-0">
                    <h1 className="display-4">Todo List</h1>
                    <p className="lead">Create and keep track of all of your todos</p>
                </Jumbotron>
                <Navbar color="light" light>
                    <Link to="/">
                        <NavbarBrand><img src="" alt="FWLogo"/></NavbarBrand>
                    </Link>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/create">
                                <Button color="primary">Create New Todo</Button>
                            </Link>
                        </NavItem>
                    </Nav>
                </Navbar>
            </Container>

            <Route path="/" exact component={TodoList}/>
            <Route path="/edit/:id" component={EditTodo}/>
            <Route path="/create" component={CreateTodo}/>
        </Router>
    );
}

export default App;
