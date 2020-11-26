const router = require("express").Router();
const Item = require("../models/itemModel")
const auth = require("../middleware/auth");
const uploadImage = require("../middleware/uploadImage");
const fs = require("fs");

router.post("/add", auth, async (req, res) => {
  try {
    uploadImage(req, res, async (error) => {
      let {
        addTitle,
        addQuantity,
        addImage,
        addDate,
        addUnit,
        addCategory
      } = req.body

      if (error) return res.status(400).json({ name: "addImage", message: error.message })
      if (!addTitle || !addQuantity || !addDate) return res.status(400).json({ name: ["addItem", "addQuantity"], message: "can't be left empty" });

      if (!req.file) addImage = "images/default.png"
      else addImage = req.file.path

      const newItem = new Item({
        title: addTitle,
        expiration: addDate,
        imageUrl: addImage,
        quantity: addQuantity,
        unitName: addUnit,
        categoryName: addCategory,
        userId: req.user,
      });

      await newItem.save();
      return res.status(200).json("item saved");
    })
  } catch (error) {
    return res.status(500).json({ err: { err: error.message } });
  }
});

router.get("/all", auth, async (req, res) => {
  try {
    const items = await Item.find({ userId: req.user });
    // const ItemNames = units.map(({ unitName }) => ({ name: unitName }));

    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({ err: { err: error.message } });
  }
})

router.post("/category", auth, async (req, res) => {
  try {
    const { categoryName } = req.body
    const items = await Item.find({ userId: req.user, categoryName: categoryName });

    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({ err: { err: error.message } });
  }
})

router.delete("/delete/:id", auth, async (req, res) => {
  try {
    const item = await Item.findOne({
      userId: req.user,
      _id: req.params.id,
    });

    const { imageUrl } = item

    if (imageUrl !== "images/default.png") {
      fs.unlink(imageUrl, (err) => {
        if (err) {
          console.error(err)
          return
        }
      })
    }

    if (!item) return res.status(400).json({ message: "no item found." });

    await Item.findByIdAndDelete(req.params.id);
    return res.status(200).json("item deleted.");
  } catch (error) {
    return res.status(500).json({ err: { err: error.message } });
  }
});

module.exports = router;
