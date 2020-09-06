import React, {Component} from 'react';
import {Container, Label, Input, FormGroup, Form} from 'reactstrap';
import axios from 'axios';

class EditTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            responsible: "",
            priority: "",
            completed: "false"
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
        this.onChangeCompleted = this
            .onChangeCompleted
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
    onChangeCompleted(todo){
        this.setState({completed: !this.state.completed})
    }
    onSubmit(todo) {
        todo.preventDefault();
    
        const obj = {
            description: this.state.description,
            responsible: this.state.responsible,
            priority: this.state.priority,
            completed: this.state.completed
        }
        axios.post(`http://localhost:4000/todos/update/${this.props.match.params.id}`, obj).then(res => console.log(res.data)).catch(err => console.log(err));

        this.props.history.push('/')
    }

    componentDidMount() {
        axios
            .get(`http://localhost:4000/todos/${this.props.match.params.id}`)
            .then(res => {
                this.setState({description: res.data.description, responsible: res.data.responsible, priority: res.data.priority, completed: res.data.completed})
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <Form>
                    <FormGroup>
                        <Label for="description">Description:
                        </Label>
                        <Input
                            type="text"
                            name="description"
                            id="todoDescription"
                            placeholder="Description..."
                            value={this.state.description}
                            onChange={this.onChangeDescription}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="responsible">Responsible:
                        </Label>
                        <Input
                            type="text"
                            name="responsible"
                            id="todoResponsible"
                            placeholder="Responsible..."
                            value={this.state.responsible}
                            onChange={this.onChangeResponsible}/>
                    </FormGroup>
                    <FormGroup>
                        Priority:
                        <br/>
                        <FormGroup check inline>
                            <Label>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    checked={this.state.priority === 'Low'}
                                    onChange={this.onChangePriority}/>
                                Low
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMed"
                                    value="Med"
                                    checked={this.state.priority === 'Med'}
                                    onChange={this.onChangePriority}/>
                                Medium
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    checked={this.state.priority === 'High'}
                                    onChange={this.onChangePriority}/>
                                High
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                        <Label>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="completedCheckbox"
                                id="completedCheckbox"
                                onChange={this.onChangeCompleted}
                                checked={this.state.completed}
                                value={this.state.completed}/>
                                Completed

                        </Label>
                    </FormGroup>
                    </FormGroup>
                    
                    <FormGroup>
                        <input
                            type="submit"
                            value="Update Todo"
                            className="btn-btn-primary"
                            onClick={this.onSubmit}/>
                    </FormGroup>
                </Form>
            </Container>
        );
    }
}

export default EditTodo;