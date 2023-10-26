const express = require("express");
const Team = require("../schema/Team");

const router = express.Router();

// route to fetch board members' details
router.get("/board", async (req, res) => {
    try {
        let team = await Team.find({});

        if(!team) {
            res.status(401).send({ success: false, message: "No team members found" });
        }

        res.status(200).send({ success: true, data: team });
    } catch (error) {
        res.status(500).send({ success: false, message: "Server error" })
    }
})

// route to add board members' details
router.post("/board", (req, res) => {
    try {
        let team = new Team({
            name: req.body.name,
            position: req.body.position,
            photo: req.body.photo,
            social: {}
        });
        if(req.body.instagram) team.social.instagram = req.body.instagram;
        if(req.body.linkedin) team.social.linkedin = req.body.linkedin;
        if(req.body.email) team.social.email = req.body.email;
        team.save().then(() => {
            res.status(200).send({ success: true, message: "Created team member" });
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, message: "Server error" })
    }
})

module.exports = router