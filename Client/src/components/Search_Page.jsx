import React from 'react'
import { useParams } from 'react-router-dom'
import Book from './Book'

const Searched_Page = () => {
  const {book} = useParams()

  return (
    <div className='searchPageBook'>
      <h1>Search Results for: " {book} "</h1>
      <div className="flex">
        <Book/>
          <div className="searchPageBookOverview">
            The Law of Attraction
          </div>
      </div>
    </div>
  )
}

export default Searched_Page