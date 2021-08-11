import React, { useLayoutEffect, useRef, useState } from 'react';

function TodoForm(props) {
    const [text, setText] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setText(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: text
        });

        setText('');
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit
                ? (
                    <>
                        <input
                            type="text"
                            placeholder="Update your item"
                            value={text}
                            name="text"
                            className="todo-input edit"
                            onChange={handleChange}
                            ref={inputRef}
                            autoComplete="off"
                        />
                        <button className="todo-button edit">Update</button>
                    </>
                )
                : (
                    <>
                        <input
                            type="text"
                            placeholder="Add a todo"
                            value={text}
                            name="text"
                            className="todo-input"
                            onChange={handleChange}
                            ref={inputRef}
                            autoComplete="off"
                        />
                        <button className="todo-button">Add todo</button>
                    </>
                )}
        </form>
    );
}

export default TodoForm;
