const User = require("../models/userModel");

exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.params.id, age: { $gt: 21 } });

    if (!user) {
      return res
        .status(404)
        .json({ error: "User not found or under age limit." });
    }

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
