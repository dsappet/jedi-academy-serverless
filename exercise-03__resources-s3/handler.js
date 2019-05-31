'use strict';
let AWS = require('aws-sdk');

module.exports.hello = async (event, context) => {

  let s3 = new AWS.S3();

  console.log(process.env.BUCKET);
  
  let filename = `${new Date().getUTCMilliseconds()}.txt`;

  let params = {
    Body: 'success', 
    Bucket: process.env.BUCKET, 
    Key: filename,
    ContentType: 'text/plain'
   };
   let obj = await s3.putObject(params).promise().then((data) => {
     console.log(data);
   }).catch( err => { 
     console.log(err, err.stack);
   })
   
   

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

