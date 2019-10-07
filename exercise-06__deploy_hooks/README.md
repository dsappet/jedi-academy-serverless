# Exercise 06 - Deploy hooks

One of the many plugins available for serverless is `serverless-plugin-canary-deployments` this plugin handles a bunch of different options including doing canary deploys. We will look at only 1 aspect in this exercise, that is the pre and post traffic hooks. 

## Getting started
We need a couple packages for this exercise 
``` 
npm install -D serverless-plugin-canary-deployments
npm install aws-sdk
```

In serverless.yml add the following to allow access to codedeploy. 
```
provider:
...
  iamRoleStatements:
    - Effect: "Allow" # For canary deploy plugin
      Action:
        - codedeploy:*
      Resource:
        - "*"
```

also add the following to include the plugin
```
plugins:
  - serverless-plugin-canary-deployments
```

## Hooking up the hooks

Under each of your function definitions in serverless.yml you add a `deploymentSettings` section to define how traffic is moved over to the new deployment. Also add in the functions section `preHook` and/or `postHook`. The value here points to a function the same way a lambda does under `handler`. 

## Inside the events 

You have to use the aws-sdk from inside the event hooks to call code deploy (the reason we needed the iam permissions) and tell it success or failure. See the `hooks.js` file.

## Where do I find more detailed documentation? 

* [AWS info on the hooks](https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html) - This provides good information on the flow of deployment and provides nice diagrams.
* [serverless-plugin-canary-deployments](https://github.com/davidgf/serverless-plugin-canary-deployments) - More details on the plugin and how to use it.