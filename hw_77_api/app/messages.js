const multer  = require('multer');
const path = require('path');
const config = require('../config');
const express = require('express');
const fileDb = require('../fileDb');
const nanoid = require('nanoid');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, config.uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

router.get('/', (req, res) => {
    res.send(fileDb.getItems());
});


router.post('/', upload.single('image'), (req, res) => {
    const message = req.body;
    if(req.file){
        message.image = req.file.filename;
    }
    message.id = nanoid();
    fileDb.addItem(message);
    res.send({message: "Ok"});
});

module.exports = router;