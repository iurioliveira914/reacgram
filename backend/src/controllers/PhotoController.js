const Photos = require("../models/Photo")

const mongoose = require("mongoose")

// Insert a photo, with an user related to it
async function insertPhoto(req, res) {
    const  { title }  = req.body
    const image = req.file.filename

    console.log(req.body)

    res.send("Photo insert")
}

module.exports = {
    insertPhoto,
}
