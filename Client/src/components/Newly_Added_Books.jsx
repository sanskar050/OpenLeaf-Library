import React from 'react'
import "./Books.css"
import Book from './Book'

const Newly_Added_Books = () => {
  
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
    <div>
      <div className='bg-aqua'>
        <h1>NEWLY ADDED BOOKS</h1>
      </div>
      <div className='newly_added_books'>
        <Book onClick={() => openBook({ bookTitle: "The Law of Attraction", authorName: "Esther Hicks" })} src="https://m.media-amazon.com/images/I/81GIw10hEaL.jpg" alt="image" bookTitle="The Law of Attraction" authorName="Esther Hicks" />
        <Book onClick={() => openBook({ bookTitle: "Handbook of Medicinal Herbs", authorName: "James A. Duke" })} src="https://m.media-amazon.com/images/I/81G4nX+zuaL._UF1000,1000_QL80_.jpg" alt="image" bookTitle="Handbook of Medicinal Herbs" authorName="James A. Duke" />
        <Book onClick={() => openBook({ bookTitle: "Dragonlance Shadow of The Dragon Queen 7", authorName: "Justice Arman" })} src="https://m.media-amazon.com/images/I/71oY-2fWclL._AC_UF1000,1000_QL80_.jpg" alt="image" bookTitle="Dragonlance - Shadow of The Dragon Queen 7" authorName="Justice Arman" />
        <Book onClick={() => openBook({ bookTitle: "How to Start a Business Analyst Career", authorName: "Laura Brandenburg" })} src="https://m.media-amazon.com/images/I/61yP54nbeKL.jpg" alt="image" bookTitle="How to Start a Business Analyst Career" authorName="Laura Brandenburg" />
        <Book onClick={() => openBook({ bookTitle: "African Holistic Health", authorName: "Llaila O. Afrika" })} src="https://m.media-amazon.com/images/I/71ZCeIDqqXS.jpg" alt="image" bookTitle="African Holistic Health" authorName="Llaila O. Afrika" />
        <Book onClick={() => openBook({ bookTitle: "The Law of Attraction", authorName: "Esther Hicks" })} src="https://m.media-amazon.com/images/I/81GIw10hEaL.jpg" alt="image" bookTitle="The Law of Attraction" authorName="Esther Hicks" />
        <Book onClick={() => openBook({ bookTitle: "Handbook of Medicinal Herbs", authorName: "James A. Duke" })} src="https://m.media-amazon.com/images/I/81G4nX+zuaL._UF1000,1000_QL80_.jpg" alt="image" bookTitle="Handbook of Medicinal Herbs" authorName="James A. Duke" />
        <Book onClick={() => openBook({ bookTitle: "Dragonlance Shadow of The Dragon Queen 7", authorName: "Justice Arman" })} src="https://m.media-amazon.com/images/I/71oY-2fWclL._AC_UF1000,1000_QL80_.jpg" alt="image" bookTitle="Dragonlance - Shadow of The Dragon Queen 7" authorName="Justice Arman" />
        <Book onClick={() => openBook({ bookTitle: "How to Start a Business Analyst Career", authorName: "Laura Brandenburg" })} src="https://m.media-amazon.com/images/I/61yP54nbeKL.jpg" alt="image" bookTitle="How to Start a Business Analyst Career" authorName="Laura Brandenburg" />
        <Book onClick={() => openBook({ bookTitle: "African Holistic Health", authorName: "Llaila O. Afrika" })} src="https://m.media-amazon.com/images/I/71ZCeIDqqXS.jpg" alt="image" bookTitle="African Holistic Health" authorName="Llaila O. Afrika" />
      
        </div>
    </div>
  )
}

export default Newly_Added_Books