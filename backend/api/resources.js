const express = require("express");
const Resources = require("../schema/Resources");

const router = express.Router();

// route to fetch resources details by resource type
router.get("/:type", async (req, res) => {
    try {
        let reso = await Resources.find({
            category: req.params.type
        });

        if(!reso) {
            res.status(401).send({ success: false, message: "Invalid category" });
        }

        res.status(200).send({ success: true, data: reso });
    } catch (error) {
        res.status(500).send({ success: false, message: "Server error" })
    }
})

// route to add resources
router.post("/", (req, res) => {
    try {
        let resource = new Resources({
            category: req.body.category,
            photo: req.body.photo,
            heading: req.body.heading,
            subheading: req.body.subheading,
            tags: req.body.tags,
            urlLink: req.body.urlLink
        });
        resource.save().then(() => {
            res.status(200).send({ success: true, message: "Added new resource" });
        }).catch((err) => {
            console.log(err);
            res.status(400).send({ success: false, message: "Error fetching resource" });
        })  
    } catch (error) {
        res.status(500).send({ success: false, message: "Server error" })
    }
})

module.exports = router