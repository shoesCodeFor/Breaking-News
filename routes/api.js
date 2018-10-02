var express = require('express');
var router = express.Router();
var sources = require('../controller/index');


/* GET home page. */
router.get('/scrape', function(req, res, next) {
  sources.cnet(res);
});

router.get('/articles', function(req, res, next) {
  sources.getNews(res);
});

module.exports = router;
