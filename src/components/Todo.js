import React, { memo } from 'react';

const Todo = memo((props) => {
    const { todo } = props
    return (
        <li>
            <div className="view">
                <input type="checkbox" checked={todo.isCompleted} className="toggle"/>
                <label>{todo.text}</label>
                <button className="destroy"></button>
            </div>
        </li>

    )
})

export default Todo