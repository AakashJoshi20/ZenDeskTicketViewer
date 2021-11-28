var zendesk = require('node-zendesk');

var client = zendesk.createClient({
  username:  'aakashjoshi167@gmail.com',
  token:     'YTr9P4kwDcVW7bnC1j2QkNxiWMLNooJRUeSBDtPl',
  remoteUri: 'https://aakashjoshi.zendesk.com/api/v2'
});


client.tickets.list(function (err, req, result) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Got " + result.length + " tickets")
  console.log(JSON.stringify(result[0], null, 2, true));//gets the first page
});
