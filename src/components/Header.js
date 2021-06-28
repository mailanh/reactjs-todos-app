import React, { memo, useState } from 'react';

const Header = memo(props => {
    const [text, setText] = useState('')
    const { addTodo } = props
    const onAddTodo = (e = {}) => {
        if (e.key === 'Enter' && text) {
            // console.log(text);
            addTodo({
                id: new Date().valueOf(),
                text: text,
                isCompleted: false
            })
            setText('')
        }
    }
    return (
        <header className="header">
            <h1>todos-list</h1>
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                value={text}
                onKeyPress={(e) => onAddTodo(e)}
                onChange={(e) => setText(e.target.value)} />
        </header>
    )
});

export default Header