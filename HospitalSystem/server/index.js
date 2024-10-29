const Joi = require("joi");
Joi.objectId = require("joi-objectId")(Joi);
const hero = require("./routes/home/hero");
const appointments = require("./routes/home/appointment");
const workingHours = require("./routes/home/workingHours");
const generalSettings = require("./routes/generalSettings");
const express = require("express");
const app = express();
app.use(express.json());

/*****************************************************/
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://asemyasser42:AySjWZpx9l8DZJ8t@hospitalsystem.aebye.mongodb.net/Home?retryWrites=true&w=majority&appName=HospitalSystem"
  )
  .then(() => {
    console.log("connecting to database");
  })
  .catch((err) => {
    console.error("could not connect to database", err);
  });

/*****************************************************/
//built-in middleware function:
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
/**************************************************************************************************/
// app.set("view engine", "pug");
app.set("views", "./views");
/**************************************************************************************************/
app.use("/api/hero", hero);
app.use("/api/appointments", appointments);
app.use("/api/workingHours", workingHours);
app.use("/api/generalSettings", generalSettings);
/**************************************************************************************************/
// npm i multer // this for image uploads
app.use("/uploads", express.static("uploads"));

// npm i joi-objectid
// npm i lodash    // this for dealing with arrays , objects
// npm i jsonwebtoken // this for json web token to generate tokens for authenticated users

//  $env:jwtPrivateKey:mySecretKey
/**************************************************************************************************/
// Environment Variables:
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`your server listening on port ${port}`);
});
