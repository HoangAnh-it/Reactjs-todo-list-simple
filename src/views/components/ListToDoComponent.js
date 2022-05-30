import React from 'react';
import AddToDoComponent from './AddToDo.js';
import './ListToDo.scss';
 import {toast } from 'react-toastify';

class ListToDoComponent extends React.Component {

    state = {
        listToDos: [
            {id: '1', title: 'Doing homeWork'},
            {id: '2', title: 'Folding blanket'},
            {id: '3', title: 'Take the chopsticks'},
        ],

        editToDo: {},
        lastId: 3,
    }

    addNewToDo = (todo) => {
        const currentToDo = this.state.listToDos;
        this.setState({
            listToDos: [...currentToDo, todo],
            lastId: this.state.lastId + 1,
        });
        toast.success("Add successfully");
    }

    deleteToDo = (toDoId) => {
        const newToDoList = this.state.listToDos.filter(todo => todo.id !== toDoId);
        this.setState({
            listToDos: newToDoList
        });
        toast.success("delete successfully");
    }

    changeToEdit = (todo) => {
        this.setState({
            editToDo: todo
        });
    }

    cancel = () => {
        this.setState({
            editToDo: {}
        })
    }

    saveEdit = () => {
        const index = this.state.listToDos.findIndex(item => item.id === this.state.editToDo.id);
        const listCopy = [...this.state.listToDos];
        listCopy[index].title = this.state.editToDo.title;
        this.setState({
            listToDos: listCopy,
            editToDo: {}
        });
        toast.success(`Update successfully`);
    }

    handleOnChange = (event) => {
        const newEditToDo = { ...this.state.editToDo };
        newEditToDo.title = event.target.value;
        this.setState({
            editToDo: newEditToDo
        });
    }
    
    render() {

        const { listToDos } = this.state;
        const isEditing = Object.keys(this.state.editToDo) !== 0;

        return (
            <>
                <div>LIST</div>
                <div className="list-todo-container">
                    <AddToDoComponent lastId={this.state.lastId} addNewToDo={this.addNewToDo} />
                    <div className="list-todo-content">
                        {
                            listToDos && listToDos.length > 0 &&
                            listToDos.map((todo, index) => {
                                return (
                                    <div key={todo.id}>
                                        {isEditing && this.state.editToDo?.id === todo.id ?
                                            <>
                                                <span className="title-todo">{index + 1}. <input value={this.state.editToDo.title} onChange={event => this.handleOnChange(event)} /></span>
                                                <button className="btn-edit" onClick={() => this.saveEdit()}>Save</button>
                                                <button className="btn-cancel" onClick={this.cancel}>Cancel</button>
                                            </>
                                            :
                                            <>
                                                <span className="title-todo">{index + 1}. {todo.title}</span>
                                                <button className="btn-edit" onClick={() => this.changeToEdit(todo)}>Edit</button>
                                            </>
                                        }
                                        <button className="btn-delete" onClick={() => this.deleteToDo(todo.id)}>Delete</button>
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

export default ListToDoComponent;
