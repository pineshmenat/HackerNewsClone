import React from 'react';
import {NavLink, BrowserRouter as Router } from 'react-router-dom'
import {ThemeConsumer} from '../context/theme'

const activeStyle = {
    color: "rgb(187, 46, 31)"
}
export default function Navbar() {
    return(
        <ThemeConsumer>
            {({theme, toggleTheme}) => (
                <nav className="row space-between">
                    <ul className="row nav">
                        <li><NavLink  exact activeStyle={activeStyle} className="nav-link" to="/">Top</NavLink></li>
                        <li><NavLink activeStyle={activeStyle}  className="nav-link" to="/new">New</NavLink></li>
                    </ul>
                    <button className="btn-clear" onClick={toggleTheme}>
                        {(theme === "dark") ? '💡':'🔦'}
                    </button>
                </nav>
            )}
        </ThemeConsumer>
    )
}