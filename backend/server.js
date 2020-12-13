const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path")
const fs = require("fs");
//const { createProxyMiddleware } = require('http-proxy-middleware');


require("dotenv").config();

const app = express();

// app.use(
//   '/api/**',
//   createProxyMiddleware({
//     target: "http://localhost:5000/",
//     "secure": false,
//     "changeOrigin": true,
//     pathRewrite: { "^/api/": "/api/" },
//   })
// );

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('./public'));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../", "frontend/", "dist")));
  app.get("/*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../", "frontend/", "dist/", "index.html")
    );
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

//set up mongoose
console.log("connecting to MongoDb");
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  (err) => {
    if (err) return console.error(err);
    console.log("MongoDb connection is good");
  }
);

app.get("/images/:fileName", async (req, res) => {
  try {
    const { fileName } = req.params;

    const mime = {
      jpg: 'image/jpg',
      jpeg: 'image/jpeg',
      png: 'image/png',
    };

    const file = path.join(__dirname + /images/ + fileName);
    const type = mime[path.extname(file).slice(1)] || 'text/plain';

    const s = fs.createReadStream(file);

    s.on('open', () => {
      res.set('Content-Type', type);
      s.pipe(res);
    });

    s.on('error', () => {
      res.set('Content-Type', 'application/json');
      return res.status(404).json("404 not found");
    });
  } catch (error) {
    return res.status(500).json({ err: { err: error.message } });
  }
})
app.use("/users", require("./routes/userRoutes"));
app.use("/units", require("./routes/unitRoutes"));
app.use("/categories", require("./routes/categoryRoutes"));
app.use("/items", require("./routes/itemRoutes"));
//app.use("/contact", require("./routes/contactRoutes"));