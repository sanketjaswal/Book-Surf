import Book from "../models/bookModel.js";  
export const getRecommendations = async (req, res) => {  
  try {
    const {title, genres, authors, minRating } = req.body; 

    console.log("req.body",req.body);

    const buildQuery = ({ title, genres, authors, minRating }) => {
      const filters = [];
    
      if (title) filters.push({ title: { $regex: title, $options: "i" } });
      if (genres?.length) filters.push({ genre: { $in: genres } });
      if (authors?.length) filters.push({ author: { $in: authors } });
      if (minRating) filters.push({ rating: { $gte: minRating } });
    
      return filters.length > 0 ? { $and: filters } : {};
    };

    const query = buildQuery({ title, genres, authors, minRating });

    console.log("query",query);

    const recommendations = await Book.find(query).limit(10);



    res.status(200).json(recommendations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
