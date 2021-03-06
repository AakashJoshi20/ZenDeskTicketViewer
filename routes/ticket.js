var express = require('express');
var router = express.Router();

var zendesk = require('node-zendesk');


var config = require('dotenv').config()
//...
// var zendeskconf = config.get('zendesk');
var client = zendesk.createClient({
  username: process.env.username,
  password: process.env.password,
  remoteUri:  process.env.remoteUri
});

/* GET home page. */
router.get('/', function(reqo, res, next) {
  var id = reqo.query.id;
  console.log("ID:-",id)
  client.tickets.show(id, function (err, req, result) {
    if (err) {
      res.status(err.statusCode)
      res.render('error', {error: err})
      return;
    }

    client.tickets.getComments(id, function (err, req, resultComments) {
      if (err) {
        res.status(err.statusCode)
        res.render('error', {error: err})
        return;
      }
      //res.end(JSON.stringify(resultComments[0].comments, null, 4))

      console.log("Testing:",resultComments)
      var commentList = resultComments[0].comments;
      //Remove first element, as it is the description
      commentList.shift();

      res.render('ticket', { ticket: result, listofcomments: commentList});
      //res.end(JSON.stringify(resultComments, null, 4))
    });
  });
});

module.exports = router;
