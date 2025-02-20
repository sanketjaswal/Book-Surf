import { useState } from "react";

import "../styles/RecommendationForm.css";

const RecommendationForm = ({ onSearch }) => {
  const [title, setTitle] = useState("");
  const [genres, setGenres] = useState("");
  const [authors, setAuthors] = useState("");
  const [minRating, setMinRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
      title: title.trim(), 
      genres: genres.trim(),
      authors: authors.trim(),
      minRating: minRating ? parseFloat(minRating) : 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
       <input
        type="text"
        placeholder="Search by book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />


      <select
        id="genres"
        value={genres}
        onChange={(e) => setGenres(e.target.value)}
        placeholder="Select a genre"
      >
        <option value="">Select a genre</option>
        <option value="Dystopian">Dystopian</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Mystery">Mystery</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Romance">Romance</option>
        <option value="Cyberpunk">Cyberpunk</option>
        <option value="Self-Help">Self-Help</option>
      </select>

      <input
        type="text"
        placeholder="Preferred authors"
        value={authors}
        onChange={(e) => setAuthors(e.target.value)}
      />

      <input
        type="number"
        placeholder="Minimum Rating (0-5)"
        value={minRating}
        onChange={(e) => setMinRating(e.target.value)}
        min="0"
        max="5"
        step="0.1"
      />

      <button type="submit">Get Recommendations</button>
    </form>
  );
};

export default RecommendationForm;
