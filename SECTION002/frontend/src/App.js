import React from 'react';
import {Container, Jumbotron} from 'reactstrap';
import './App.css';

function App() {
    return (
        <Container>
            <Jumbotron fluid>
                <h1 className="text-center display-4">Todo List</h1>
            </Jumbotron>
        </Container>
    );
}

export default App;
