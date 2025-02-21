import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  preferences: {
    genres: [{ type: String }],
    authors: [{ type: String }],
  },
  ratedBooks: [
    {
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
      rating: { type: Number, min: 0, max: 5 },
      review: { type: String },
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;