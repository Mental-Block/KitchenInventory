const router = require("express").Router();
const Unit = require("../models/unitModel");
const auth = require("../middleware/auth");

router.post("/add", auth, async (req, res) => {
  try {
    const { unit } = req.body;

    if (!unit) return res.status(400).json({ name: "unit", message: "can't be left empty" });

    const newUnit = new Unit({
      unitName: unit,
      userId: req.user,
    });

    await newUnit.save();
    return res.status(200).json("unit saved");
  } catch (error) {
    return res.status(500).json({ err: { err: error.message } });
  }
});

router.get("/all", auth, async (req, res) => {
  try {
    const units = await Unit.find({ userId: req.user });
    const unitNames = units.map(({ unitName, _id }) => ({ name: unitName, _id: _id }));

    return res.status(200).json(unitNames);
  } catch (error) {
    return res.status(500).json({ err: { err: error.message } });
  }
});

router.delete("/delete/:id", auth, async (req, res) => {
  try {
    const unit = await Unit.findOne({
      userId: req.user,
      _id: req.params.id,
    });

    if (!unit) return res.status(400).json({ message: "no unit found." });

    await Unit.findByIdAndDelete(req.params.id);
    return res.json("Unit deleted.");
  } catch (error) {
    return res.status(500).json({ err: { err: error.message } });
  }
});

module.exports = router;
