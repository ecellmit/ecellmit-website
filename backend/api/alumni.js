const express = require("express");
const Alumni = require("../schema/Alumni");

const router = express.Router();

// route to fetch alumni details by year
router.get("/:year", async (req, res) => {
    try {
        let alumni = await Alumni.find({
            year: req.params.year
        }).sort({ sortOrder: 1 });

        if(!alumni) {
            res.status(401).send({ success: false, message: "No Alumni found" });
        }

        res.status(200).send({ success: true, data: alumni });
    } catch (error) {
        res.status(500).send({ success: false, message: "Server error" })
    }
})

// route to add alumni details
router.post("/", (req, res) => {
    try {
        let alumni = new Alumni({
            name: req.body.name,
            position: req.body.position,
            year: req.body.year,
            photo: req.body.photo,
            social: {}
        });
        if(req.body.instagram) alumni.social.instagram = req.body.instagram;
        if(req.body.linkedin) alumni.social.linkedin = req.body.linkedin;
        if(req.body.email) alumni.social.email = req.body.email;
        alumni.save().then(() => {
            res.status(200).send({ success: true, message: "Created alumni" });
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, message: "Server error" })
    }
})

module.exports = router