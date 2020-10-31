const router = require("express").Router();
const Item = require("../models/itemModel")
const auth = require("../middleware/auth");
const uploadImage = require("../middleware/uploadImage");

router.post("/add", auth, uploadImage.single("addImage"), async (req, res) => {
  try {
      const {
          addItem, 
          addQuantity,
          addImage,
          addUnit, 
          AddCategory
        } = req.body
        
    if (!addItem || !addQuantity) return res.status(400).json({ name: ["addItem", "addQuantity"], message: "can't be left empty" });

    if(addImage !== undefined){
      console.log(req.file);
    } 
      
    addImage === "item_defaultImage.jpg"
    console.log(addImage);
    

    
    
  
    // const newItem = new Item({
    //     title: addItem,
    //     imageFile: req.file.path,
    //     quantity: addQuantity,
    //     unitName: addUnit,
    //     categoryName: AddCategory,
    //     userId: req.user,
    // });

    // await newItem.save();

    return res.status(200).json("item saved");
  } catch (error) {
    return res.status(500).json({ err: { err: error.message } });
  }
});



module.exports = router;
