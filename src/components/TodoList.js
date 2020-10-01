import Todo from "./Todo";
import React from "react";
class TodoList extends React.Component {
    render() {
        return (
            <div>
                { this.props.todoList.map(i => <Todo i={i} k={i.id} tI={this.props.tI} />)}
            </div>
        )
    }
}

export default TodoList;
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js