import React from 'react'
import "./Dashboard.css"
import profile_icon from "./profile.png"
import book from "./book.png"
import team from "./team.png"
import magazine from "./magazine.png"

const Dashboard = () => {
  return (
    <div>

      <div className="admin_header">

        <div className='admin_dashboard'>
            Admin Dashboard
        </div>

        <div className='profile'>
            <div className='admin_name'>Hi, Sanskar</div>
            <img className='admin_profile' src={profile_icon} alt="icon" />
        </div>

      </div>
      
      <div className='divider'></div>
      
      <div className="admin_boxes">

        <div className="box box1">
          <div>
            <h1>3</h1>
            <h4>Books</h4>
          </div>

          <div>
            <img className='book_icon' src={book} alt="book" />
          </div>
        </div>

        <div className="box box2">
          <div>
            <h1>2</h1>
            <h4>Members</h4>
          </div>

          <div>
            <img className='team_icon' src={team} alt="image" />
          </div>
        </div>

        <div className="box box3">
          <div>
            <h1>0</h1>
            <h4>Magazines</h4>
          </div>

          <div>
            <img className='magazine_icon' src={magazine} alt="image" />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashboard