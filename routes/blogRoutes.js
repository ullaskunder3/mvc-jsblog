const express = require("express");
const blogController = require('../controllers/blogControllers');
const router = express.Router();

// Blog route
router.get("/", blogController.blog_index);

router.post("/",blogController.blog_create_post);

router.get("/create", blogController.blog_create_get);

router.get("/:id", blogController.blog_detail);

router.delete("/:id", blogController.blog_delete);

module.exports = router;