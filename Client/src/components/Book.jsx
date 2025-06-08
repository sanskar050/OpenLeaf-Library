import React from 'react'
import "./Book.css"

const Book = (props) => {
    return (
        <div className='book'>

            <div onClick={props.onClick} className='bookImg'>
                <img src={props.src} alt={props.alt}></img>
            </div>

            <div className="BookandAuthor">
                <div className='bookTitle'><b>Title:</b> {props.bookTitle}</div>
                <div className='author'><b>Author:</b> {props.authorName}</div>
            </div>
            
        </div>
    )
}

export default Book