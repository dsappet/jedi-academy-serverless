// These are pre and post traffic hooks for the lambda
// https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html

const AWS = require('aws-sdk')
const codedeploy = new AWS.CodeDeploy({apiVersion: '2014-10-06'})
const lambda = new AWS.Lambda()

module.exports.pre = (event, context, callback) => {
  let deploymentId = event.DeploymentId
  let lifecycleEventHookExecutionId = event.LifecycleEventHookExecutionId

  console.log('Testing the lambda before we start shifting traffic...')

  let lambdaParams = {
		FunctionName: hello, // function to test
		InvocationType: "RequestResponse"
  }

  let lambdaResult = "Failed"
  lambda.invoke(lambdaParams, function(err, data) {
		if (err){	// an error occurred
			console.log(err, err.stack)
			lambdaResult = "Failed"
		}
		else{	// successful response
			var result = JSON.parse(data.Payload)
			console.log("Result: " +  JSON.stringify(result))

			// Check the response for valid results
			// The response will be a JSON payload with statusCode and body properties. ie:
			// {
			//		"statusCode": 200,
			//		"body": 'hello'
			// }
			if(result.statusCode == 200){	
				lambdaResult = "Succeeded";
				console.log ("Validation testing succeeded!");
			}
			else{
				lambdaResult = "Failed";
				console.log ("Validation testing failed!");
			}
    }
  })


  let params = {
      deploymentId: deploymentId,
      lifecycleEventHookExecutionId: lifecycleEventHookExecutionId,
      status: lambdaResult // status can be 'Succeeded' or 'Failed'
  }

  // Call codeDeploy to tell the lifecycle the results of the hook
  return codedeploy.putLifecycleEventHookExecutionStatus(params).promise()
    .then(data => callback(null, 'Validation test succeeded'))
    .catch(err => {
      console.log('CodeDeploy Status update failed')
      console.log(err, err.stack) 
      callback('Validation test failed')
    })
}

module.exports.post = (event, context, callback) => {
  let deploymentId = event.DeploymentId;
  let lifecycleEventHookExecutionId = event.LifecycleEventHookExecutionId;

  console.log('Traffic has shifted ...');

  let params = {
      deploymentId: deploymentId,
      lifecycleEventHookExecutionId: lifecycleEventHookExecutionId,
      status: 'Succeeded' // status can be 'Succeeded' or 'Failed'
  };

  return codedeploy.putLifecycleEventHookExecutionStatus(params).promise()
    .then(data => callback(null, 'Validation test succeeded'))
    .catch(err => callback('Validation test failed'));
} 