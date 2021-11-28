var express = require('express');
var router = express.Router();

var zendesk = require('node-zendesk');

var client = zendesk.createClient({
  username:  'aakashjoshi167@gmail.com',
  token:     'YTr9P4kwDcVW7bnC1j2QkNxiWMLNooJRUeSBDtPl',
  remoteUri: 'https://aakashjoshi.zendesk.com/api/v2'
});

/* GET home page. */
router.get('/', function(reqo, res, next) {
  res.render("loading");
});

module.exports = router;
