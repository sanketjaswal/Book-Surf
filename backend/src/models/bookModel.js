import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, index: true },
  author: { type: String, required: true },
  genre: [{ type: String, required: true }],
  rating: { type: Number, default: 0 },
  reviews: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      username: { type: String },
      review: { type: String },
      rating: { type: Number, min: 0, max: 5 },
    },
  ],
});

const Book = mongoose.model("Book", bookSchema);

export default Book;