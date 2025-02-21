import User from "../models/userModel.js";

export const savePreferences = async (req, res) => {
  try {
    const { username, email, preferences } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ username, email, preferences });
    } else {
      user.preferences = preferences;
    }

    await user.save();
    res.status(200).json({ message: "Preferences saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};