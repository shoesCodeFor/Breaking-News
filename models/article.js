var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title:  {
      type: String,
      unique: true
    },
    author: String,
    body:   String,
    comments: [{ body: String }],
    date: { type: Date, default: Date.now },
  });

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;