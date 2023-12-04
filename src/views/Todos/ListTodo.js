import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
import Color from "../HOC/Color";

class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'doing homework' },
            { id: 'todo2', title: 'sleep' },
            { id: 'todo3', title: 'learnning react' },
            { id: 'todo4', title: 'sleep' },
            { id: 'todo5', title: 'doing homework' }
        ],
        editTodo: {}
    }

    AddNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })

        toast.success("Add Title Successfully!");
    }

    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.listTodos;
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodo
        })
        toast.success("Delete todo successfully!")
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [
                ...listTodos
            ];
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success('Edit title succed')
            return;
        }
        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEditTodo = (e) => {
        let editTodoCopy = {
            ...this.state.editTodo
        };
        editTodoCopy.title = e.target.value;

        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0
        return (
            <>
                <p>
                    This is my TodoApp
                </p>

                <div className="list-todo-container">
                    <AddTodo AddNewTodo={this.AddNewTodo} />
                    <div className="List-todo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span> {index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>{index + 1} - <input value={editTodo.title} onChange={(e) => this.handleOnChangeEditTodo(e)} /></span>
                                                    :
                                                    <span>{index + 1} - {item.title}</span>
                                                }
                                            </>
                                        }
                                        <button className="edit" onClick={() => this.handleEditTodo(item)}>
                                            {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'
                                            }
                                        </button>
                                        <button className="delete" onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                                    </div>
                                )
                            })
                        }



                    </div>
                </div>
            </>
        )
    }
}
export default Color(ListTodo);