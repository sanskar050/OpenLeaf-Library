import React, { useState } from 'react'
import "./Header.css"
import searchLogo from "./search.png"
import logo from "./logo.png"
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {

  const [search, setSearch] = useState()
  const navigate = useNavigate()
  
   const search_book = () => {
    const trimmedSearch = search.trim()
    if (trimmedSearch) {
      navigate(`/search/${encodeURIComponent(trimmedSearch)}`)
    } else {
      alert("Please enter a search term.")
    }
  }

  return (
    <>
      <header className="header">

        <div className='mainHeader'>

          <NavLink to="/" className="No-Underline">
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
              <input onChange={(e) => setSearch(e.target.value)} className='searchArea' type='search' value={search} placeholder='Search' />
              <button onClick={search_book} className='searchIcon' type='button'><img src={searchLogo} alt='search' /></button>
            </div>
          </div>

        </div>

        <div className="navbar">

          <div className='lists'>
            <NavLink className={(e) => { return e.isActive ? "navFocus No-Underline" : "No-Underline" }} to="/"><li>Home</li></NavLink>
            <NavLink className={(e) => { return e.isActive ? "navFocus No-Underline" : "No-Underline" }} to="/books"><li>Books</li></NavLink>
            <NavLink className={(e) => { return e.isActive ? "navFocus No-Underline" : "No-Underline" }} to="/about"><li>About</li></NavLink>
            <NavLink className={(e) => { return e.isActive ? "navFocus No-Underline" : "No-Underline" }} to="/contact-us"><li>Contact Us</li></NavLink>
          </div>

          <div className='login'>
            <NavLink className={(e) => { return e.isActive ? "navFocus No-Underline" : "No-Underline" }} to="/login"><li>Login</li></NavLink>
          </div>

        </div>

      </header>
    </>
  )
}

export default Header