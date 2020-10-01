import './Todo.css'
import React from 'react'
class Todo extends React.Component {
    render() {
        return (
            <div >
                <div onClick={() => this.props.tI(this.props.i.id)}
                    className={`todo ${this.props.i.c ? "yes" : " "}`}>
                    {this.props.i.t}
                </div>
            </div>

        )
    }
}

export default Todo;