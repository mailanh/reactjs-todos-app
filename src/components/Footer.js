import React, { memo } from 'react';

const Footer = memo((props) => {
    const { filterTodoList, status, clearCompleteTodoList, numOfTodos, numOfTodosLeft } = props;
    const filterBtns =
        [
            {
                title: 'All',
                isActived: status === 'ALL',
                link: '',
                onClick: () => filterTodoList('ALL')
            },
            {
                title: 'Active',
                isActived: status === 'ACTIVE',
                link: 'active',
                onClick: () => filterTodoList('ACTIVE')
            },
            {
                title: 'Completed',
                isActived: status === 'COMPLETED',
                link: 'completed',
                onClick: () => filterTodoList('COMPLETED')
            }
        ];
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{numOfTodosLeft}</strong>
                <span> </span>
                <span>{numOfTodosLeft <= 1 ? 'item' : 'items'}</span>
                <span> left</span>
            </span>
            <ul className="filters">
                {
                    filterBtns.map(btn => {
                        return (<FilterBtn key={`btn${btn.title}`} {...btn} />)
                    })
                }
            </ul>
            {numOfTodos > numOfTodosLeft && <button className="clear-completed" onClick={clearCompleteTodoList}>Clear completed</button>}

        </footer>
    )
})

const FilterBtn = memo(props => {
    const { title, isActived, link, onClick } = props
    return (
        <>
            <li>
                <a href={`#/${link}`} className={`${isActived ? 'selected' : ''}`} onClick={onClick} >
                    {title}
                </a>
            </li>
            <span></span>
        </>

    );
});

export default Footer