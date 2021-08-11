import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Todo({ todos, updateTodo, removeTodo, completeTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);

        setEdit({
            id: null,
            value: ''
        });
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map(todo => (
        <div
            key={todo.id}
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        >
            <div onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className="delete-icon"
                >
                    Clear
                </RiCloseCircleLine>
                <TiEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className="edit-icon"
                >
                    Edit
                </TiEdit>
            </div>
        </div>
    ));
}

export default Todo;
