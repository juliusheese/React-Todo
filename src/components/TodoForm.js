import React from "react";

class TodoForm extends React.Component {
    state = { iT: "" }

    cH = (e) => {
        this.setState({ iT: e.target.value })
    }

    sH = (e) => {
        e.preventDefault(); this.props.addItem(this.state.iT); this.setState({ iT: "" });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.sH}>
                    <input type="text" placeholder="Enter todo"
                        value={this.state.iT} onChange={this.cH}
                    />
                    <div><button>Add-todo</button></div>
                </form> <button onClick={this.props.dI}>Cleared</button>
            </div>
        )
    }
}

export default TodoForm;