import { useState } from "react";
import axios from "axios";
import "../styles/AddUser.css";

const AddUser = ({ onUserAdded }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState("");

  const handleGenreChange = (e) => {
    const selectedGenres = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setGenres(selectedGenres);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
      preferences: {
        genres,
        authors: authors ? authors.trim().split(",") : [""],
      }
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/users/preferences",
        userData
      );
      alert("User added successfully!");
      onUserAdded(response.data);
      setUsername("");
      setEmail("");
      setGenres([]);
      setAuthors("");
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>Select Preferred Genres:</label>
      <select onChange={handleGenreChange} className="genre">
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
        placeholder="Preferred authors (comma-separated)"
        value={authors}
        onChange={(e) => setAuthors(e.target.value)}
      />

      <button type="submit">Save User</button>
    </form>
  );
};

export default AddUser;
