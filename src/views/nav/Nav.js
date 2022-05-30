import React from 'react';
import {
    Link, NavLink
} from 'react-router-dom';

import './Nav.scss';

class Nav extends React.Component {

    render() {
        return (
            <div className="topnav">
                <NavLink to="/home" activeclassname="active">Home</NavLink>
                <NavLink to="/todo" activeclassname="active">ToDos</NavLink>
                <NavLink to="/about" activeclassname="active">About</NavLink>
            </div>
        )
    }

}

export default Nav;
