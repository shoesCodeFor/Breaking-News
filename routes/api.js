var express = require('express');
var router = express.Router();
var sources = require('../controller/index');

// TODO Refactor to a readable format
/* GET home page. */
router.get('/scrape', function(req, res, next) {
  sources.cnet(res);
});

// TODO make this modular
router.get('/articles', function(req, res, next) {
  sources.getNews(res);
});

// Get an article
module.exports = router;
