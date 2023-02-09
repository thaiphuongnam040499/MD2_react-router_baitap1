import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const styleNav = ({ isActive }) => {
        return {
            backgroundColor: isActive ? 'blue' : 'white',
            color: isActive ? 'white' : 'black'
        }
    }
    return (
        <div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <NavLink to={'/'} style={styleNav} className="nav-link active" aria-current="page" href="#">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/about'} style={styleNav} className="nav-link" href="#">
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/user'} style={styleNav} className="nav-link" href="#">
                        User
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/contact'} style={styleNav} className="nav-link" href="#">Contact</NavLink>
                </li>
            </ul>
        </div>
    )
}
