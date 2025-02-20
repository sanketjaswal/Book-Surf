import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true , index: true},
  author: { type: String, required: true },
  genre: [{ type: String, required: true }],
  rating: { type: Number, default: 0 },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;