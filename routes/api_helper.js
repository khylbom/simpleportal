const request = require('request')

module.exports = {
  /**
   * This method returns a promise
   * which gets resolved or rejected base
   * on the result from the API
   */
  makeAPICall : function(url) {
    return new Promise((resolve, reject) => {
      request(url, { json: true}, (err, res, body) => {
        if (err) reject(err)
        resolve(body)
      });
    })
  }
}