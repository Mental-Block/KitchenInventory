const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
  destination: "images/",
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const limits = {
  fileSize: 5 * 1024 * 1024,
  files: 1,
}

const uploadImage = multer({
  storage: storage,
  limits: limits,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpg|jpeg|png/
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);

    if (file.originalname === "default.png") return cb(new Error("this file name is already in use"), false)
    if (!extName && !mimeType) return cb(new Error("needs to be a .jpg, .jpeg or .png."), false)
    cb(null, true)
  },
}).single('addImage')



module.exports = uploadImage;
