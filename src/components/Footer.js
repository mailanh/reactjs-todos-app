import React, { memo } from 'react';

const filterBtns =
    [
        {
            title: 'All',
            isActived: true,
            link: '',
            onClick: () => { }
        },
        {
            title: 'Active',
            isActived: false,
            link: 'active',
            onClick: () => { }
        },
        {
            title: 'Completed',
            isActived: false,
            link: 'completed',
            onClick: () => { }
        }
    ];

const Footer = memo((props) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>1</strong>
                <span> </span>
                <span>items</span>
                <span> left</span>
            </span>
            <ul className="filters">
                {
                    filterBtns.map(btn => {
                        return (<FilterBtn {...btn} />)
                    })
                }
            </ul>
            <button className="clear-completed">Clear completed</button>
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