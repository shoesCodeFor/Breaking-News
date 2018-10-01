const cheerio = require('cheerio');
const axios = require('axios');

const getDP = ()=>{
    axios.get("https://www.denverpost.com/business/colorado-technology/").then(function(response) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      console.log(response.data);
      var $ = cheerio.load(response.data);

      // Now, we grab every h2 within an article tag, and do the following:
      $("h4.entry-title").each(function(i, element) {
        // Save an empty result object
        var result = {};

        // Add the text and href of every link, and save them as properties of the result object
        result.title = $(this)
          .children("a.article-title")
          .text();
        result.link = $(this)
          .children("a.article-title")
          .attr("href");
        console.log(result);
      //   db.Article.create(result)
      //     .then(function(article) {
      //       console.log(article);
      //     })
      //     .catch(function(err) {
      //       // If an error occurred, send it to the client
      //       return res.json(err);
      //     });
      });
  });
};

const cnet = ()=>{
  let results = [];
  axios.get("https://www.cnet.com/news/").then(function(response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    // console.log(response.data);
    var $ = cheerio.load(response.data);

    // Now, we grab every h2 within an article tag, and do the following:
    $("div.assetBody").each(function(i, element) {
      // Save an empty result object
      var result = {};

      // Add the text and href of every link, and save them as properties of the result object
      result.image = $(this)
        .children("a.assetThumb")
        .html().split("src=\"")[1].split("\"")[0];
      result.link = `https://www.cnet.com${$(this)
        .children("a.assetThumb")
        .attr("href")}`;
      result.title = $(this)
        .children("div.assetText")
        .text().trim();  
      console.log(result);
      results.push(result);
    //   db.Article.create(result)
    //     .then(function(article) {
    //       console.log(article);
    //     })
    //     .catch(function(err) {
    //       // If an error occurred, send it to the client
    //       return res.json(err);
    //     });
    });
    console.log("**************________***************");
    console.log(results);
});
};
// axios.get("https://www.cnet.com/news/").then(function(response) {
//     // Then, we load that into cheerio and save it to $ for a shorthand selector
//     // console.log(response.data);
//     var $ = cheerio.load(response.data);

//     // Now, we grab every h2 within an article tag, and do the following:
//     $("div.assetBody").each(function(i, element) {
//       // Save an empty result object
//       var result = {};

//       // Add the text and href of every link, and save them as properties of the result object
//       result.image = $(this)
//         .children("a.assetThumb")
//         .html().split("src=\"")[1].split("\"")[0];
//       result.link = `https://www.cnet.com${$(this)
//         .children("a.assetThumb")
//         .attr("href")}`;
//       result.title = $(this)
//         .children("div.assetText")
//         .text().trim();  
//       console.log(result);
//     //   db.Article.create(result)
//     //     .then(function(article) {
//     //       console.log(article);
//     //     })
//     //     .catch(function(err) {
//     //       // If an error occurred, send it to the client
//     //       return res.json(err);
//     //     });
//     });
// });
cnet();