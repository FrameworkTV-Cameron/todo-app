import React, {Component} from 'react';
import {Container} from 'reactstrap';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Container>
              <h3>TodoList Component</h3>
            </Container>
        );
    }
}

export default TodoList;