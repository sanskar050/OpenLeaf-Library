import React from 'react'
import "./Header.css"
import searchLogo from "./search.png"
import logo from "./logo.png"
import { NavLink } from 'react-router-dom'

const Header = () => {

  function search() {
    let searched_book_name = document.querySelector(".searchArea").value
  }

  return (
    <>
      <header className="header">

        <div className='mainHeader'>

          <NavLink to="/home" className="No-Underline">
            <div className='logoAndName'>
              <img src={logo} alt='logo'></img>
              <div className='libraryName'>
                <div>OpenLeaf</div>
                <div>Library</div>
              </div>
            </div>
          </NavLink>

          <div className='searchBar'>
            <div>
              <input className='searchArea' type='search' placeholder='Search'></input>
              <NavLink to="/search/book"><button onClick={search} className='searchIcon' type='button'><img src={searchLogo} alt='search' /></button></NavLink>
            </div>
          </div>

        </div>

        <div className="navbar">

          <div className='lists'>
            <NavLink className={(e) => { return e.isActive ? "navFocus No-Underline" : "No-Underline" }} to="/home"><li>Home</li></NavLink>
            <NavLink className={(e) => { return e.isActive ? "navFocus No-Underline" : "No-Underline" }} to="/books"><li>Books</li></NavLink>
            <NavLink className={(e) => { return e.isActive ? "navFocus No-Underline" : "No-Underline" }} to="/about"><li>About</li></NavLink>
            <NavLink className={(e) => { return e.isActive ? "navFocus No-Underline" : "No-Underline" }} to="/contact-us"><li>Contact Us</li></NavLink>
          </div>

          <div className='login'>
            <NavLink className={(e) => { return e.isActive ? "navFocus No-Underline" : "No-Underline" }} to="/"><li>Logout</li></NavLink>
          </div>

        </div>

      </header>
    </>
  )
}

export default Header