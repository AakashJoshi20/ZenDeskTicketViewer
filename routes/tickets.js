var express = require('express');
var router = express.Router();

var zendesk = require('node-zendesk');

// var config = require('config');
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
  client.tickets.list(function (err, req, result) {
    if (err) {
      res.status(err.statusCode)
      res.render('error', {error: err})
      return;
    }

    var page = reqo.query.page || 1;
    var numpages = Math.ceil(result.length/25);
    var pagedResults = result.slice(25*(page-1), 25*(page-1)+25)

    res.render('tickets', { tickets: pagedResults, numberofpages: numpages, pagenumber: page});
  });
});

module.exports = router;
