var express = require('express');

var winston = require('../logger/winston');
var mongo = require('../data/Mongo_Handler');

var router = express.Router();

router.get("/", (req, res) => {
    res.send("API is working");
});

// Get the comments collection
router.get("/comments", (req, res) => {
    res.send("API is working");
});

//Add a comment to the collection
router.post("/comments", (req, res) => {
    res.send("API is working");
});

//get the comment of <pseudo>
router.get("/:pseudo", (req, res) => {
    res.send(data.getCommentByPseudo(req.params.pseudo));
});

//add a comment with <pseudo>
router.post("/:pseudo", (req, res) => {
    data.setCommentByPseudo(req.params.pseudo, req.body);
    res.send("UPDATE with pseudo " + req.params.pseudo);
});

//delete the comment with <pseudo>
router.delete("/:pseudo", (req, res) => {
    data.deleteCommentByPseudo(req.params.pseudo)
    res.send("DELETE comment with pseudo " + req.params.pseudo);
});


module.exports = router;