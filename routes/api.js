const request = require('request')
const fetch = require('node-fetch')

module.exports = {
  baseUri : 'http://api-stage-b.us-west-1.elasticbeanstalk.com/api/v1',
  /**
   * This method returns a promise which gets resolved 
   * or rejected base on the result from the API.
   * 
   * Implemented with request
   */
  makeAPIRequest : function(apiEndpoint) {
    return new Promise((resolve, reject) => {
      request(apiEndpoint, { json: true}, (err, res, body) => {
        if (err) reject(err)
        resolve(body)
      });
    })
  },

  /**
   * This method does the exact same thing and returns a promise 
   * which gets resolved or rejected base on the result from the API.
   * 
   * Implemented with node-fetch
   */
  makeAPICall : function(apiEndpoint) {
    return new Promise((resolve, reject) => {
      fetch(apiEndpoint, {
        method: 'GET',
        json: true
      })
      .then(response => resolve(response))
      .catch(error => {
        console.log('Error making API request: ' + error);
        reject(error);
      })
    });
  }
}