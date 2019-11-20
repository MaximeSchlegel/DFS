const express = require('express');

const winston = require('../config/winston');


const router = express.Router();

router.get('/', function(req, res) {
    winston.info(JSON.stringify(req.query));
    res.render('comments', {qs: req.query});
});


module.exports = router;