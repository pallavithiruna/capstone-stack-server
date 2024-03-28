const express = require("express");
const cors = require("cors");
// const path = require("path");
const app = express();
// const router = require("./routers");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
const router = require("./routers");


//db connection
const db = require("./db");
db.connect();


//middleware
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }));

app.use(express.json());

//headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

//api
app.use("/api", router);
app.get("*", (req, res) => {
    res.send("success")
  });

  //cors
  app.use(cors())

  //listen
  app.listen(PORT, () => {
    console.log(`Stack Overflow Clone API is running on PORT No- ${PORT}`);
  });