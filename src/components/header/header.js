import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';


const Header = () => {
    return (
        <div>
            <header>
                <h1>RESTy</h1>
            </header>
            <nav>
                <ul>
                    <li>
                        <NavLink data-testid="homelink" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink data-testid="historylink" to="/history">History</NavLink>
                    </li>
                    <li>
                        <NavLink data-testid="helplink" to="/help">Help</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;