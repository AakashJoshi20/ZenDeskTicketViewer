var express = require('express');
var router = express.Router();

var zendesk = require('node-zendesk');
var config  = require('dotenv').config;

var client = zendesk.createClient({
  username: process.env.username,
  token: process.env.token,
  remoteUri:  process.env.remoteUri
});

/* GET home page. */
router.get('/', function(reqo, res, next) {
  res.render("loading");
});

module.exports = router;
