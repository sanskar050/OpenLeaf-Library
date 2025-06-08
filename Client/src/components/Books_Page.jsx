import React from 'react'
import "./Books_Page.css"
import { NavLink } from 'react-router-dom'

const Books_Page = () => {
  return (
    <div className='books_page'>
      <h1>Books Pages:</h1>
      <NavLink to="/newly_added_books"><div>Newly Added Books</div></NavLink>
      <NavLink to="/recommended_books"><div>Recommended Books</div></NavLink>
      <NavLink to="/popular_books"><div>Popular Books</div></NavLink>
    </div>
  )
}

export default Books_Page