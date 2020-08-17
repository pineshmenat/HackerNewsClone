import React, { useContext } from 'react';
import {NavLink, BrowserRouter as Router } from 'react-router-dom'
import ThemeContext from '../context/theme'

const activeStyle = {
    color: "rgb(187, 46, 31)"
}
export default function Navbar() {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return(
        <nav className="flex justify-between">
            <ul className="flex list-none">
                <li><NavLink  exact activeStyle={activeStyle} className="no-underline mr-3 font-bold text-lg" to="/">🔝 Top</NavLink></li>
                <li><NavLink activeStyle={activeStyle}  className="no-underline mr-3 font-bold text-lg" to="/new">🆕 New</NavLink></li>
                <li><NavLink activeStyle={activeStyle}  className="no-underline mr-3 font-bold text-lg" to="/best">🌟 Best</NavLink></li>
                <li><NavLink activeStyle={activeStyle}  className="no-underline mr-3 font-bold text-lg" to="/ask">🙋‍♂️ Ask</NavLink></li>
                <li><NavLink activeStyle={activeStyle}  className="no-underline mr-3 font-bold text-lg" to="/show">📢 Show</NavLink></li>
                <li><NavLink activeStyle={activeStyle}  className="no-underline mr-3 font-bold text-lg" to="/job">📭 Jobs</NavLink></li>
            </ul>
            <button className="bg-transparent rounded-none text-3xl" onClick={toggleTheme}>
                {(theme === "dark") ? '🔆':'🌙'}
            </button>
        </nav>
    )
}