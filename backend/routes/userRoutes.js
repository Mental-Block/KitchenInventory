const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

const User = require("../models/userModel");
const Category = require("../models/categoryModel");
const Unit = require("../models/unitModel");
const Item = require("../models/itemModel");

router.post("/register", async (req, res) => {
  try {
    let { registerEmail, registerPassword, confirmPassword, registerDisplayName } = req.body;

    if (!registerEmail || !registerPassword || !confirmPassword)
      return res.status(400).json({
        name: ["registerEmail", "registerPassword", "confirmPassword"],
        message: "Not all fields have been entered.",
      });

    if (!registerPassword.match(/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/))
      return res.status(400).json({
        name: "registerPassword",
        message: "Password must contain at least 1 letter, at least 1 number, and be longer than 8 characters",
      });

    if (registerPassword !== confirmPassword)
      return res.status(400).json({ name: "confirmPassword", message: "passwords don't match" });

    const existingUser = await User.findOne({ email: registerEmail });

    if (existingUser) return res.status(400).json({ name: "registerEmail", message: "this email already exists." });

    if (!registerDisplayName) registerDisplayName = "User";

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(registerPassword, salt);

    const newUser = new User({
      email: registerEmail,
      password: hashPassword,
      displayName: registerDisplayName,
    });

    await newUser.save();
    return res.json("Thanks for signing up!");
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { loginEmail, loginPassword } = req.body;

    if (!loginEmail || !loginPassword)
      return res.status(400).json({
        name: ["loginEmail", "loginPassword"],
        message: "Not all fields have been entered.",
      });

    const user = await User.findOne({ email: loginEmail });

    if (!user)
      return res.status(400).json({
        name: ["loginEmail", "loginPassword"],
        message: "Email or password is incorrect",
      });

    const isMatch = await bcrypt.compare(loginPassword, user.password);

    if (!isMatch)
      return res.status(400).json({
        name: ["loginEmail", "loginPassword"],
        message: "Email or password is incorrect",
      });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    return res.json({
      token,
      user: {
        id: user._id,
        displayName: user.displayName,
      },
    });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.status(200).json(true);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

router.delete("/delete", auth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user);
    await Category.findOneAndDelete({ userId: req.user });
    await Unit.findOneAndDelete({ userId: req.user })
    await Item.findOneAndDelete({ userId: req.user })

    return res.status(200).json("deleted user");
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

router.get("/user", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user);
    return res.json({
      displayName: user.displayName,
      id: user._id,
    });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

router.patch("/name", auth, async (req, res) => {
  try {
    let { changeName } = req.body

    if (!changeName) return res.status(400).json({
      name: "changeName",
      message: "Not all fields have been entered.",
    });

    await User.findOneAndUpdate({ _id: req.user }, { displayName: changeName });

    const user = await User.findById(req.user);

    return res.json({
      displayName: user.displayName,
      id: user._id,
    });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
})
module.exports = router;
