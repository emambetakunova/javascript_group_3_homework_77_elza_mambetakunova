import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './MainNav.css';


class Nav extends Component {
    render() {
        return (
            <nav className="MainNav">
                <h3 className="Logo">Messages</h3>
                <NavLink className="NavLink"   activeClassName="Active" exact={true} to="/">Messages</NavLink>
                <NavLink className="NavLink"  activeClassName="Active" to="/messages/new">Add new message</NavLink>
            </nav>
        );
    }
}

export default Nav;