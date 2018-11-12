import React from 'react';

// Stateless funciton component
const Header = (props) => (
    <div>
        
        <div className="header">
            <div className="container">
                <h1 className="header__title">{props.title}</h1>
                {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
            </div>
        </div>
    </div>
);

// Header default props
Header.defaultProps = {
    title: "Tasksify"
};

export default Header;