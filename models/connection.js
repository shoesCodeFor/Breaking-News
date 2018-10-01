require('dotenv').config();
var mongoose = require("mongoose");

// Requiring the `Example` model for accessing the `examples` collection
var Article = require("./article");

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@cluster0-hqrlz.mongodb.net/news?retryWrites=true`, { useNewUrlParser: true });

var data = {
    title: "Some guy poops",
    author: "Shoe", 
    body:"Poopin aint easy", 
  };

  

const addArticle = article =>{
    Article.create(article)
        .then(function(data) {
            // If saved successfully, print the new Example document to the console
            console.log(data);
        })
        .catch(function(err) {
            // If an error occurs, log the error message
            console.log(err.message);
        });
};

const getArticles = () => {
    Article.find({}, function (err, data){
        if(err){
            console.log(err.message);
        }
        else{
            console.log(data);
        }    
    });
};

const updateArticle = (id, comment, res = null) => {
    Article.update(
        {_id: id }, 
        { $push: { comments: comment }}
    ).then((err, response)=>{
        if(err){
            console.log(err.message);
        }
        else{
            console.log(response);
        }
    })};


const deleteArticles = article => {

};

const deleteComment = (articleID, commentID, res = null) => {
    Article.findById(articleID).then(
        data => {data.comments.id(commentID).remove()}
    );
};
// getArticles();
// updateArticle('5bb193b25a251cb2a653f40b', {body:'A new comment'});
deleteComment('5bb193b25a251cb2a653f40b', '5bb1acdbb36294420347b4c0');