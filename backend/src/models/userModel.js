import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  preferences: {
    genres: [String],
    authors: [String],
  },
});

const User = mongoose.model("User", userSchema);

export default User;