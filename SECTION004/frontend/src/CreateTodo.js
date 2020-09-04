import React, {Component} from 'react';
import {Container} from 'reactstrap';
class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            responsible: "",
            priority: "",
            completed: false
        }
        this.onChangeDescription = this
            .onChangeDescription
            .bind(this);
        this.onChangeResponsible = this
            .onChangeResponsible
            .bind(this);
        this.onChangePriority = this
            .onChangePriority
            .bind(this);
        this.onSubmit = this
            .onSubmit
            .bind(this);
    }
    onChangeDescription(todo) {
        this.setState({description: todo.target.value});
    }
    onChangeResponsible(todo) {
        this.setState({responsible: todo.target.value});
    }
    onChangePriority(todo) {
        this.setState({priority: todo.target.value});
    }
    onSubmit(todo) {
        todo.preventDefault();

        console.log(this.state);

        this.setState({description: "", responsible: "", priority: "", completed: false})
    }
    render() {
        return (
            <Container>
                <h3>Create a new todo</h3>
            </Container>
        );
    }
}

export default CreateTodo;