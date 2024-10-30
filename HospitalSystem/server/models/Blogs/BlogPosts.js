const mongoose = require("mongoose");

const BlogPost = mongoose.model(
  "BlogPost",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
    },
    content: {
      type: String,
      required: true,
      minlength: 5,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  })
);

module.exports = BlogPost;
