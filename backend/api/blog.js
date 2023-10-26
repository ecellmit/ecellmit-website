const express = require("express");
const Blog = require("../schema/Blog");

const router = express.Router();

// route to fetch blog pins
router.get("/", async (req, res) => {
    try {
        let blogs = await Blog.find({});

        if(!blogs) {
            res.status(401).send({ success: false, message: "Cannot find blogs" });
        }

        res.status(200).send({ success: true, data: blogs });
    } catch (error) {
        res.status(500).send({ success: false, message: "Server error" })
    }
})

// route to add new blog pin
router.post("/", (req, res) => {
    try {
        let blog = new Blog({
            articleName: req.body.articleName,
            photo: req.body.photo,
            writers: req.body.writers,
            // date: req.body.date,
            url: req.body.url,
            excerpt: req.body.excerpt,
        });
        blog.save().then(() => {
            res.status(200).send({ success: true, message: "Added new blog" });
        }).catch((err) => {
            console.log(err);
            res.status(400).send({ success: false, message: "Error creating blog" });
        })  
    } catch (error) {
        res.status(500).send({ success: false, message: "Server error" })
    }
})

module.exports = router