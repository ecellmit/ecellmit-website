const express = require("express");
const Fame = require("../schema/Fame");

const router = express.Router();

// route to fetch hall of fame members' details
router.get("/:year", async (req, res) => {
    try {
        let fame = await Fame.find({
            year: req.params.year
        });

        if(!fame) {
            res.status(401).send({ success: false, message: "Invalid year" });
        }

        res.status(200).send({ success: true, data: fame });
    } catch (error) {
        res.status(500).send({ success: false, message: "Server error" })
    }
})

// route to add hall of fame members' details
router.post("/", (req, res) => {
    try {
        let fame = new Fame({
            startup: req.body.startup,
            logo: req.body.logo,
            founders: req.body.founders,
            website: req.body.website,
        });
        fame.save().then(() => {
            res.status(200).send({ success: true, message: "Added new wall of fame entry" });
        }).catch((err) => {
            console.log(err);
            res.status(400).send({ success: false, message: "Error fetching wall of fame" });
        })  
    } catch (error) {
        res.status(500).send({ success: false, message: "Server error" })
    }
})

module.exports = router