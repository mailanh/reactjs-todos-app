import React, { memo, useState } from 'react';

const Todo = memo((props) => {
    const { todo, getTodoById, editTodoId, onEditTodo, index, markCompleted } = props;
    const [text, setText] = useState(todo.text)
    const isEditing = editTodoId === todo.id
    const editTodo = () => {
        onEditTodo({
            ...todo,
            text
        }, index)
    }
    return (
        <li className={`${isEditing ? 'editing' : ''} ${todo.isCompleted ? 'completed' : ''}`}>
            { !isEditing ?
                <div className="view">
                    <input
                        type="checkbox"
                        defaultChecked={todo.isCompleted}
                        className="toggle"
                        onchange={() => markCompleted(todo.id)}
                    />
                    <label onDoubleClick={() => getTodoById(todo.id)}>{todo.text}</label>
                    <button className="destroy"></button>
                </div>
                : <input
                    type="text"
                    value={text}
                    className="edit"
                    onChange={(e) => setText(e.target.value)}
                    onBlur={editTodo}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            editTodo()
                        }
                    }}
                />
            }

        </li>

    )
})

export default Todo