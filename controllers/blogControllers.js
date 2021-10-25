const Blog = require("../models/blog")

const blog_index = (req, res) => {
    Blog.find()
        .sort({ ceatedAt: -1 })
        .then((result) => {
            res.render("index", { blogs: result, title: "All Blogs" });
        })
        .catch((err) => {
            console.log(err);
        });
}
const blog_detail = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render("details", { blog: result, title: "Blog details" });
        })
        .catch((err) => {
            console.log(err);
        });
}

const blog_create_get = (req, res) => {
    res.render("create", { title: "create a new blog" });
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);
    blog
        .save()
        .then((result) => {
            res.redirect("/blogs");
        })
        .catch((err) => {
            console.log(err);
        });
}
const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: "/blogs" });
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = {
    blog_index,
    blog_detail,
    blog_create_get,
    blog_create_post,
    blog_delete
}