const express = require("express");
const morgan = require("morgan");
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const app = express();

// connecting to MongoDB
const localDB = "mongodb://localhost/blog";
mongoose.connect(localDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log("connection to DB is secure...");
        app.listen(3000);
    })
    .catch(err => {
        console.log("Something Went wrong");
    });

app.set("view engine", "ejs");

// Middleware & Static files linking
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
    res.redirect("/blogs");
});
app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

// Blog routes
app.use('/blogs',blogRoutes);

// Page not found 404 route
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});