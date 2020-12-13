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
      if (!addTitle || !addQuantity || !addDate) return res.status(400).json({ name: ["addTitle", "addDate", "addQuantity"], message: "can't be left empty" });

      if (req.files.addImage !== undefined) addImage = req.files.addImage[0].path
      else addImage = "images/default.png"

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

    if (!items) return res.status(400).json({ message: "no item found." });

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

router.patch("/edit/:id", auth, async (req, res) => {
  try {
    uploadImage(req, res, async (error) => {
      let {
        editTitle,
        editQuantity,
        editImage,
        prevImage,
        editDate,
        editUnit,
        editCategory
      } = req.body

      if (error) return res.status(400).json({ name: "editImage", message: error.message })

      if (req.files.editImage !== undefined && editImage !== String) {
        editImage = req.files.editImage[0].path

        if (prevImage !== "images/default.png") {
          fs.unlink(prevImage, (err) => {
            if (err) {
              console.error(err)
              return
            }
          })
        }
      }

      const filter = {
        userId: req.user,
        _id: req.params.id,
      }

      const update = {
        title: editTitle,
        expiration: editDate,
        imageUrl: editImage,
        quantity: editQuantity,
        unitName: editUnit,
        categoryName: editCategory,
        userId: req.user,
      }

      const newItem = await Item.findOneAndUpdate(filter, update);

      if (!newItem) return res.status(400).json({ message: "no item found." });

      return res.status(200).json("Item updated")
    })
  } catch (error) {
    return res.status(500).json({ err: { err: error.message } });
  }
})

module.exports = router;
