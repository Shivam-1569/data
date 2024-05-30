import React from 'react'
import "./Header.scss"
import { Link} from 'react-router-dom'
import logo from "./logo.png"
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
        <nav className="navBar">
            <img src={logo} alt="netflix logo" />

            <div className="nav">
              <Link to="/">Home</Link>
              <Link to="/tvshow">TV Shows</Link>
              <Link to="/movies">Movies</Link>
            </div>

            <FaSearch />
        </nav>
        
  )
}

export default Header