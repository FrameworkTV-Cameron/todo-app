import React, {Component} from 'react';
import {Container} from 'reactstrap';
class EditTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Container>
              <h3>EditTodo Component</h3>
            </Container>
        );
    }
}

export default EditTodo;