'use strict';
let AWS = require('aws-sdk');

module.exports.hello = async (event, context) => {

  return {
    statusCode: 200,
    body: JSON.stringify('HELLO WORLD')
  }
   
};

