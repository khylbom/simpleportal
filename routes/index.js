var api = require('./api')
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  api.makeAPIRequest(api.baseUri + '/games')
  .then(response => response.json())
  .then(data => res.json(data))
  .catch(error => res.send(error))
});

module.exports = router;
