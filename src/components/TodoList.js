import React, { memo } from 'react';
import Todo from './Todo';

const TodoList = memo(props => {
    const { todosList, isCheckAll, checkAllTodos } = props
    return (
        <section className="main">
            <input 
                className="toggle-all" 
                type="checkbox"
                checked={isCheckAll} 
                readOnly={true} 
            />
            <label htmlFor="toggle-all" onClick={checkAllTodos}></label>
            <ul className="todo-list">
                {
                    todosList.sort((a, b) => a.id > b.id ? 1:-1).map((todo, index) => <Todo key={`todo${todo.id}`} {...{ todo }} {...props} index={index} />)
                }
            </ul>
        </section>

    )
})

export default TodoList