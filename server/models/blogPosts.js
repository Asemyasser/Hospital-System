const Joi = require("joi");
const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
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
});
const BlogPost = mongoose.model("BlogPost", blogPostSchema);

const validateBlogPost = (blogPost) => {
  const schema = Joi.object({
    title: Joi.string().min(5).max(255).required(),
    content: Joi.string().min(5).required(),
    date: Joi.date(),
  });

  return schema.validate(blogPost);
};

exports.BlogPost = BlogPost; // Export as object
exports.validateBlogPost = validateBlogPost;
