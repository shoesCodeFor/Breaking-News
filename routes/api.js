var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/articles', function(req, res, next) {
  res.json();
});

module.exports = router;
