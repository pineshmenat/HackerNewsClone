import React, { useContext } from 'react';
import {NavLink, BrowserRouter as Router } from 'react-router-dom'
import ThemeContext from '../context/theme'

const activeStyle = {
    color: "rgb(187, 46, 31)"
}
export default function Navbar() {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return(
        <nav className="row space-between">
            <ul className="row nav">
                <li><NavLink  exact activeStyle={activeStyle} className="nav-link" to="/">Top</NavLink></li>
                <li><NavLink activeStyle={activeStyle}  className="nav-link" to="/new">New</NavLink></li>
                <li><NavLink activeStyle={activeStyle}  className="nav-link" to="/best">Best</NavLink></li>
                <li><NavLink activeStyle={activeStyle}  className="nav-link" to="/ask">Ask</NavLink></li>
                <li><NavLink activeStyle={activeStyle}  className="nav-link" to="/show">Show</NavLink></li>
                <li><NavLink activeStyle={activeStyle}  className="nav-link" to="/job">Job</NavLink></li>
            </ul>
            <button className="btn-clear" onClick={toggleTheme}>
                {(theme === "dark") ? '🔆':'🌙'}
            </button>
        </nav>
    )
}