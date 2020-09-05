import React, {Component} from 'react';
import {
    Container,
    Label,
    Input,
    FormGroup,
    Form,
} from 'reactstrap';
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
                            <Label check>
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
                            <Label check>
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
                            <Label check>
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
                    </FormGroup>
                    <FormGroup>
                        <input type="submit" value="Create Todo" className="btn-btn-primary"/>
                    </FormGroup>
                </Form>

            </Container>
        );
    }
}

export default CreateTodo;