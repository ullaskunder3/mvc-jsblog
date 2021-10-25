const express = require("express");
const Blog = require("../models/blog")
const router = express.Router();

// Blog route
router.get("/", (req, res) => {
  Blog.find()
    .sort({ ceatedAt: -1 })
    .then((result) => {
      res.render("index", { blogs: result, title: "All Blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/create", (req, res) => {
  res.render("create", { title: "create a new blog" });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog details" });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;