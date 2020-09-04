import React, {Component} from 'react';
import {Container} from 'reactstrap';
class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Container>
              <h3>CreateTodo Component</h3>
            </Container>
        );
    }
}

export default CreateTodo;