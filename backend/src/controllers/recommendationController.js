import Book from "../models/bookModel.js";
import User from "../models/userModel.js";
export const getRecommendations = async (req, res) => {
  try {
    const { userId, title, genres, authors, minRating } = req.body;

    let userPreferences = { genres: [], authors: [] };

    if (userId) {
      const user = await User.findById(userId);
      if (user) {
        userPreferences = user.preferences;
      }
    }

    const buildQuery = ({ title, genres, authors, minRating }) => {
      const filters = [];

      if (title) filters.push({ title: { $regex: title, $options: "i" } });
      if (genres?.length) filters.push({ genre: { $in: genres } });
      if (authors?.length) filters.push({ author: { $regex: authors , $options: "i"} });
      if (minRating) filters.push({ rating: { $gte: minRating } });

      return filters.length > 0 ? { $and: filters } : {};
    };

    const query = buildQuery({ title, genres, authors, minRating });

    console.log("query", query);

    const recommendations = await Book.find(query).limit(10);

    res.status(200).json(recommendations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
