import React, { memo, useState } from 'react';

const Todo = memo((props) => {
    const { todo, getTodoById, editTodoId, onEditTodo, index, markCompleted, removeTodoList } = props;
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
            {!isEditing ?
                <div className="view">
                    <input
                        title={!todo.isCompleted ? "Mark done" : "Un mark done"}
                        type="checkbox"
                        checked={todo.isCompleted}
                        className="toggle"
                        onChange={() => markCompleted(todo.id)}
                    />
                    <label onDoubleClick={() => getTodoById(todo.id)} autoFocus={true}>{todo.text}</label>
                    <button title="Remove" className="destroy" onClick={() => {removeTodoList(todo.id)}}></button>
                </div>
                : (<input
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
                />)
            }

        </li>

    )
})

export default Todo