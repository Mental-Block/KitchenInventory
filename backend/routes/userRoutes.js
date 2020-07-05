const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  try {
    const PASSWORDLENGTH = 5;
    let { email, password, passwordCheck, displayName } = req.body;

    if (!email || !password || !passwordCheck)
      return res
        .status(400)
        .json({ message: "Not all fields have been entered." });
    if (password.length < PASSWORDLENGTH)
      return res
        .status(400)
        .json({ message: "Password needs to be at least 5 characters long." });
    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ message: "enter in the same password twice." });

    const existingUser = await User.findOne({ email: email });

    if (existingUser)
      return res.status(400).json({ message: "this email already exists." });

    if (!displayName) displayName = "User";

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: hashPassword,
      displayName,
    });

    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(400)
        .json({ message: "Not all fields have been entered." });

    const user = await User.find({ email: email });
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch || !user)
      return res
        .status(400)
        .json({ message: "Username or password is incorrect" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({
      token,
      user: {
        id: user._id,
        displayName: user.displayName,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

router.delete("/delete", auth, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

router.post("/tokenIsValid", async (req, res) => {
  const token = req.header("x-auth-token");
  const verified = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(verified._id);

  if (!verified || !token || !user) return res.json(false);
  return res.json(true);
});

module.exports = router;
