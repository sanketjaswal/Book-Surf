import React from "react";
import "../styles/BookList.css";

const BookList = ({ books }) => {
    return (
      <div className="book-list">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book._id} className="book-card">
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Genres: {book.genre.join(", ")}</p>
              <p>Rating: {book.rating} ⭐</p>
            </div>
          ))
        ) : (
          <p>No recommendations found.</p>
        )}
      </div>
    );
  };
  
  export default BookList;
  