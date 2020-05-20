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
                <ul className="nav">
                    <li><NavLink  exact activeStyle={activeStyle} className="nav-link" to="/">Top</NavLink></li>
                    <li><NavLink activeStyle={activeStyle}  className="nav-link" to="/new">New</NavLink></li>
                    <button onClick={toggleTheme}>
                        {(theme === "dark") ? '💡':'🔦'}
                    </button>
                </ul>
            )}
        </ThemeConsumer>
    )
}