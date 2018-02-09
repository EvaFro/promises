/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  var temp;
  fs.readFile(filePath, (err, data)=>{
    if (data) {
      temp = data.toString().split('\n')[0];
    }
    callback(err, temp);
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request(url, (err, res, body)=>{
    let code;
    if (res) {
      code = res.statusCode;
    }
    callback(err, code);
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
