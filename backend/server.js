const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('./public'));

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
  },
  (err) => {
    if (err) return console.error(err);
    console.log("MongoDb connection is good");
  }
);

app.use("/users", require("./routes/userRoutes"));
app.use("/units", require("./routes/unitRoutes"));
app.use("/categories", require("./routes/categoryRoutes"));
app.use("/items", require("./routes/itemRoutes"));

//app.use("/search", require("./routes/searchRoutes"));
//app.use("/contact", require("./routes/contactRoutes"));