const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const { builtinModules } = require("module");

dotenv.config();

const users = require("./routers/api/userRouter");
const customer = require("./routers/api/customerRouter");

//Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client.build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//Server setup
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost3000"],
  })
);

//Connecting to MongoDB
mongoose.connect(
  process.env.MONGO_DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDB!");
  }
);

//Setting up routes
app.use("/auth", require("./routers/api/userRouter"));
app.use("/customer", require("./routers/api/customerRouter"));
