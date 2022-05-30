import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AddToDoComponent extends React.Component {

    state = {
        title: ''
    }

    handleOnChange = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    handleAddNewToDo = () => {

        const title = this.state.title;
        if (!title) {
            toast.error('Title must not be empty!');
            return;
        }
        const newToDo = {
            id: this.props.lastId + 1,
            title: title
        }
        this.props.addNewToDo(newToDo);
        this.setState({
            title: ''
        });
    }

    render() {
        return (
            <div className="add-todo">
                <input type="text" value={this.state.title} onChange={event => this.handleOnChange(event)}/>
                <button className = "btn-add" type = "button" onClick = {this.handleAddNewToDo}>Add</button>
                <ToastContainer/>
            </div>
        )
    }
}

export default AddToDoComponent;
