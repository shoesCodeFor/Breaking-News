var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://sankele:MelvinHasADBCluster!1@cluster0-hqrlz.mongodb.net/test?retryWrites=true";
MongoClient.connect(uri, {useNewUrlParser:true },function(err, client) {
   const collection = client.db("news").collection("articles");
   // perform actions on the collection object
   collection.find({}).toArray(function(err, result){
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
    }
    
    
   });
   
   client.close();
});