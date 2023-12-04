import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {

    state = {
        title: ''
    }
    handleOnchangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleOnClickAddButton = () => {
        if (!this.state.title) {
            toast.error('Missing requirement params')
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        }
        this.props.AddNewTodo(todo);
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title} onChange={(e) => this.handleOnchangeTitle(e)}>

                </input>
                <button type="button" className="add" onClick={() => this.handleOnClickAddButton()}>
                    Add
                </button>
            </div>
        )
    }
}

export default AddTodo;