import React from 'react'
import "./Books.css"
import Book from './Book'

const Recommended_Books = () => {

  function openBook({authorName, bookTitle}) {
    const author_Name = authorName.replaceAll(" ", "_")
    const book_Title = bookTitle.replaceAll(" ", "_")
    const fileUrl = `/Recommended_Books/${author_Name}-${book_Title}.pdf`;
    const sliced = fileUrl.slice(19)
    const Name = sliced.replaceAll("_", " ")
    const bookName = Name.replaceAll("-", " - ")
    const viewerUrl = `/pdf-viewer.html?file=${encodeURIComponent(fileUrl)}&title=${encodeURIComponent(bookName)}`;
    window.open(viewerUrl, '_blank');
  }

  return (
    <div>
      <div className='bg-aqua'>
        <h1>RECOMMENDED BOOKS</h1>
      </div>
      <div className='recommended_books'>
        <Book onClick={() => openBook({ bookTitle: "The Fitness Mindset", authorName: "Brian Keane" })} src="https://m.media-amazon.com/images/I/71WimPxNUXL._UF1000,1000_QL80_.jpg" alt="image" bookTitle="The Fitness Mindset" authorName="Brian Keane" />
        <Book onClick={() => openBook({ bookTitle: "Prentice Hall World History", authorName: "David Harris" })} src="https://archive.org/services/img/michiganprentice0000elli/full/pct:200/0/default.jpg" alt="image" bookTitle="Prentice Hall World History" authorName="David Harris" />
        <Book onClick={() => openBook({ bookTitle: "Coraline", authorName: "Neil Gaiman" })} src="https://m.media-amazon.com/images/I/61IuYdR8loL.jpg" alt="image" bookTitle="Coraline" authorName="Neil Gaiman" />
        <Book onClick={() => openBook({ bookTitle: "Percy Jackson", authorName: "Rick Riordan" })} src="https://books.disney.com/content/uploads/2022/03/9781368051477.jpg" alt="image" bookTitle="Percy Jackson" authorName="Rick Riordan" />
        <Book onClick={() => openBook({ bookTitle: "Tarot Journal", authorName: "Theresa Reed" })} src="https://images.thenile.io/r1000/9781578638147.jpg" alt="image" bookTitle="Tarot Journal" authorName="Theresa Reed" />
        <Book onClick={() => openBook({ bookTitle: "The Fitness Mindset", authorName: "Brian Keane" })} src="https://m.media-amazon.com/images/I/71WimPxNUXL._UF1000,1000_QL80_.jpg" alt="image" bookTitle="The Fitness Mindset" authorName="Brian Keane" />
        <Book onClick={() => openBook({ bookTitle: "Prentice Hall World History", authorName: "David Harris" })} src="https://archive.org/services/img/michiganprentice0000elli/full/pct:200/0/default.jpg" alt="image" bookTitle="Prentice Hall World History" authorName="David Harris" />
        <Book onClick={() => openBook({ bookTitle: "Coraline", authorName: "Neil Gaiman" })} src="https://m.media-amazon.com/images/I/61IuYdR8loL.jpg" alt="image" bookTitle="Coraline" authorName="Neil Gaiman" />
        <Book onClick={() => openBook({ bookTitle: "Percy Jackson", authorName: "Rick Riordan" })} src="https://books.disney.com/content/uploads/2022/03/9781368051477.jpg" alt="image" bookTitle="Percy Jackson" authorName="Rick Riordan" />
        <Book onClick={() => openBook({ bookTitle: "Tarot Journal", authorName: "Theresa Reed" })} src="https://images.thenile.io/r1000/9781578638147.jpg" alt="image" bookTitle="Tarot Journal" authorName="Theresa Reed" />
      </div>
    </div>
  )
}

export default Recommended_Books