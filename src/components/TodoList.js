import React, { memo } from 'react';
import Todo from './Todo';

const TodoList = memo(props => {
    const { todosList } = props
    return (
        <section className="main">
            <input className="toggle-all"/>
            <label htmlFor="toggle-all"></label>
            <ul className="todo-list">
                {
                    todosList.map(todo => <Todo {...{todo}} />)
                }
                {/* <Todo /> */}
            </ul>
        </section>

    )
})

export default TodoList