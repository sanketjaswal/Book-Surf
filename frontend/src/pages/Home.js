import { useEffect, useState } from "react";
import { getBooks } from "../api/api";
import BookList from "../components/BookList";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooks();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Available Books</h1>
      <BookList books={books} />
    </div>
  );
};

export default Home;
