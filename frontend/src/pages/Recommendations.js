import { useState } from "react";
import RecommendationForm from "../components/RecommendationForm";
import BookList from "../components/BookList";
import { getRecommendations } from "../api/api";

const Recommendations = () => {
  const [books, setBooks] = useState([]);

  const handleSearch = async (preferences) => {
    const data = await getRecommendations(preferences);
    console.log(data);
    setBooks(data);
  };

  return (
    <div>
      <h1>Get Book Recommendations</h1>
      <RecommendationForm onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
};

export default Recommendations;
