import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text) {
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }

    const updateTodo = (todoId, newTodo) => {
        if (!newTodo.text) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newTodo : item)));
    }

    const removeTodo = id => {
        const newTodos = [...todos].filter(todo => todo.id !== id);

        setTodos(newTodos);
    }

    const completeTodo = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });

        setTodos(updatedTodos);
    }

    return (
        <div className="todo-list">
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                updateTodo={updateTodo}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
            />
        </div>
    );
}

export default TodoList;
