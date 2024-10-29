const Joi = require("joi");
Joi.objectId = require("joi-objectId")(Joi);
const hero = require("./routes/home/hero");
const appointments = require("./routes/home/appointment");
const workingHours = require("./routes/home/workingHours");
const generalSettings = require("./routes/generalSettings");
const express = require("express");
const app = express();
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const blogPosts = require('./routes/Blog/blogPosts');
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
app.use(express.json());
app.use(logger);
app.use(errorHandler);
/**************************************************************************************************/
// app.set("view engine", "pug");
app.set("views", "./views");
app.set("view engine", "pug");
/**************************************************************************************************/
app.use("/api/hero", hero);
app.use("/api/appointments", appointments);
app.use("/api/workingHours", workingHours);
app.use("/api/generalSettings", generalSettings);
app.use("/api/blogPosts", blogPosts);
/**************************************************************************************************/
app.use("/uploads", express.static("uploads"));
/**************************************************************************************************/
// Environment Variables:
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`your server listening on port ${port}`);
});
