import React from 'react'
import "./Section.css"
import ViewAll from './ViewAll'
import { NavLink } from 'react-router-dom'
import Book from './Book'

function Section1() {

  function openBook({authorName, bookTitle}) {
    const author_Name = authorName.replaceAll(" ", "_")
    const book_Title = bookTitle.replaceAll(" ", "_")
    const fileUrl = `/Newly_Added_Books/${author_Name}-${book_Title}.pdf`;
    const sliced = fileUrl.slice(19)
    const Name = sliced.replaceAll("_", " ")
    const bookName = Name.replaceAll("-", " - ")
    const viewerUrl = `/pdf-viewer.html?file=${encodeURIComponent(fileUrl)}&title=${encodeURIComponent(bookName)}`;
    window.open(viewerUrl, '_blank');
  }

  return (
    <div className='newlyAddedBooksSection'>
      <div className='newlyAddedBooksTitle'>
        <h2>NEWLY ADDED BOOKS</h2>
        <NavLink to="/newly_added_books"><ViewAll /></NavLink>
      </div>
      <div className='newlyAddedBooks'>
        <Book onClick={() => openBook({ bookTitle: "The Law of Attraction", authorName: "Esther Hicks" })} src="https://m.media-amazon.com/images/I/81GIw10hEaL.jpg" alt="image" bookTitle="The Law of Attraction" authorName="Esther Hicks" />
        <Book onClick={() => openBook({ bookTitle: "Handbook of Medicinal Herbs", authorName: "James A. Duke" })} src="https://m.media-amazon.com/images/I/81G4nX+zuaL._UF1000,1000_QL80_.jpg" alt="image" bookTitle="Handbook of Medicinal Herbs" authorName="James A. Duke" />
        <Book onClick={() => openBook({ bookTitle: "Dragonlance Shadow of The Dragon Queen 7", authorName: "Justice Arman" })} src="https://online.anyflip.com/njbp/apfm/files/large/25844815ef22e3af9886770de27406ea.jpg?1685636859" alt="image" bookTitle="Dragonlance - Shadow of The Dragon Queen 7" authorName="Justice Arman" />
        <Book onClick={() => openBook({ bookTitle: "How to Start a Business Analyst Career", authorName: "Laura Brandenburg" })} src="https://m.media-amazon.com/images/I/61yP54nbeKL.jpg" alt="image" bookTitle="How to Start a Business Analyst Career" authorName="Laura Brandenburg" />
        <Book onClick={() => openBook({ bookTitle: "African Holistic Health", authorName: "Llaila O. Afrika" })} src="https://m.media-amazon.com/images/I/71ZCeIDqqXS.jpg" alt="image" bookTitle="African Holistic Health" authorName="Llaila O. Afrika" />
        <Book onClick={() => openBook({ bookTitle: "Between Death and Life", authorName: "Dolores Cannon" })} src="https://m.media-amazon.com/images/I/913w40JBCwL.jpg" alt="image" bookTitle="Between Death and Life" authorName="Dolores Cannon" />
      </div>
    </div>
  )
}

export default Section1