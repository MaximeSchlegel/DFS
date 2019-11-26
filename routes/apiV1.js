var express = require('express');

var winston = require('../logger/winston');
var data = require('../data/data_storage');


var router = express.Router();

router.get("/", (req, res) => {
    res.send(data.getAllComments());
});

router.post("/", (req, res) => {
    winston.info("post: " + JSON.stringify(req.body));
    data.setCommentByPseudo(req.body.pseudo, req.body.message);
    res.send("CREATE a comment");
});

router.get("/:pseudo", (req, res) => {
    res.send(data.getCommentByPseudo(req.params.pseudo));
});

router.post("/:pseudo", (req, res) => {
    data.setCommentByPseudo(req.params.pseudo, req.body);
    res.send("UPDATE with pseudo " + req.params.pseudo);
});

router.delete("/:pseudo", (req, res) => {
    data.deleteCommentByPseudo(req.params.pseudo)
    res.send("DELETE comment with pseudo " + req.params.pseudo);
});


module.exports = router;