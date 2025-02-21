import Book from "../models/bookModel.js";


export const addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addReview = async (req, res) => {
  try {
    const { userId, username, review, rating } = req.body;
    const bookId = req.params.id;

    const book = await Book.findById(bookId);
    if (!book) return res.status(404).json({ message: "Book not found" });

    book.reviews.push({ userId, username, review, rating });

    const totalRatings = book.reviews.reduce((sum, r) => sum + r.rating, 0);
    book.rating = totalRatings / book.reviews.length;

    await book.save();
    res.status(200).json({ message: "Review added successfully", book });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};