import React, { memo } from 'react';

const Header = memo( () => {
    return (
        <header className="header">
            <h1>Todos-list</h1>
            <input
                className="new-todo"
                placeholder="What needs to be done?"/>
        </header>
    )
});

export default Header