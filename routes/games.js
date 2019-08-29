var api = require('./api')
var express = require('express');
var router = express.Router();

/**
 * All routes for this router will be under portal.playtable.com/games.
 */
/* GET games list. */
router.get('/', function(req, res, next) {
  api.makeAPIRequest(api.baseUri + '/games')
  .then(response => {
    res.json(response)
  })
  .catch(error => {
    res.send(error)
  })
});

module.exports = router;