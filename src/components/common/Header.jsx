import React from 'react'
import { NavLink } from 'react-router'
function Header() {
  return (
            <header className="bg-blue-500 text-white p-4">
                <nav className="flex justify-between">
                    <h1 className="text-xl font-bold">Student Fees Management</h1>
                    <ul className="flex space-x-4">
                        <li>
                            <NavLink to="/" className="hover:underline">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" className="hover:underline">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" className="hover:underline">Register</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
  )
}

export default Header
