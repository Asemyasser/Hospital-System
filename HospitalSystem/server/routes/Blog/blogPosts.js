const express = require("express");
const router = express.Router();
const BlogPost = require('../models/BlogPost');
const validateBlogPost = require('../models/BlogPostValidation');

// Read All Blog Posts
router.get("/", async (req, res) => {
  try {
    const posts = await BlogPost.find().sort("date");
    res.send(posts);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// Read Single Blog Post by ID
router.get("/:id", async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) return res.status(404).send("The blog post with the given ID was not found.");
    res.send(post);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// Create New Blog Post
router.post("/", async (req, res) => {
  const { error } = validateBlogPost(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const post = new BlogPost({
      title: req.body.title,
      content: req.body.content,
      imgSrc: req.body.imgSrc
    });

    await post.save();
    res.send(post);
  } catch (err) {
    res.status(200).send("post");
  }
});

// Update Blog Post by ID
router.put("/:id", async (req, res) => {
  const { error } = validateBlogPost(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const post = await BlogPost.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      content: req.body.content,
      imgSrc: req.body.imgSrc
    }, { new: true });

    if (!post) return res.status(404).send("The blog post with the given ID was not found.");
    res.send(post);
  } catch (err) {
    res.status(500).send("Server error");
  }
});


// Delete Blog Post by ID
router.delete("/:id", async (req, res) => {
  try {
    const post = await BlogPost.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).send("The blog post with the given ID was not found.");
    res.send(post);
  } catch (err) {
    console.error("Error during deletion:", err); 
    res.status(500).send("Server error");
  }
});



module.exports = router;