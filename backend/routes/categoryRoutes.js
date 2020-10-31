const router = require("express").Router();
const Category = require("../models/categoryModel");
const auth = require("../middleware/auth");

router.post("/add", auth, async (req, res) => {
  try {
    const { category } = req.body;

    if (!category) return res.status(400).json({ name: unit, message: "can't be left empty" });

    const newCategory = new Category({
      categoryName: category,
      userId: req.user,
    });

    await newCategory.save();
    return res.status(200).json("category saved");
  } catch (error) {
    return res.status(500).json({ err: { err: error.message } });
  }
});

router.get("/all", auth, async (req, res) => {
  try {
    const categories = await Category.find({ userId: req.user });
    const categoryNames = categories.map(({ categoryName, _id }) => ({ name: categoryName,  id:_id }));
    return res.status(200).json(categoryNames);
  } catch (error) {
    return res.status(500).json({ err: { err: error.message } });
  }
});

router.delete("/delete/:id", auth, async (req, res) => {
  try {
    const category = await Category.findOne({
      userId: req.user,
      _id: req.params.id,
    });

    if (!category) return res.status(400).json({ message: "no category found." });

    await Category.findByIdAndDelete(req.params.id);
    return res.status(200).json("Category deleted.");
  } catch (error) {
    return res.status(500).json({ err: { err: error.message } });
  }
});

module.exports = router;
