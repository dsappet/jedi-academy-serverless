'use strict';

module.exports.hello = async (event, context) => {
  if(!isItSaturday()) {
    console.log('Error: day is not Saturday');
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

function isItSaturday() { 
  var day = new Date().getDay();
  console.log(day);
  if(day == 'Saturday') return true;

  return false;
}
