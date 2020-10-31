const multer = require("multer")
const path = require("path")

    const storage = multer.diskStorage({
      destination : "images/",
      filename: (req, file, cb) => {
        cb(null, "item_" + file.originalname)
      }
    })

  const uploadImage = multer({
    storage: storage,
    limits: {
      fileSize: 5 *1024 * 1024,
      files: 1,
    },
    onError: () => {},
    fileFilter: (req, file, cb) => {
      const fileTypes = /jpg|jpeg|png/
      const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
      const mimeType = fileTypes.test(file.mimetype);
      
      if(file.originalname === "item_default.png")cb({ name: "addImage", message: "this file name is already taken" })
      else if(extName && mimeType) return cb(null, true)
      else return cb({ name: "addImage", message: "needs to be a .jpg, .jpeg or .png." })
    }
  })

module.exports = uploadImage;
