var express = require('express');
var api_helper = require('./api_helper')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  api_helper.makeAPICall('http://api-stage-b.us-west-1.elasticbeanstalk.com/api/v1/games')
  .then(response => {
    res.json(response)
  })
  .catch(error => {
    res.send(error)
  })
});

module.exports = router;