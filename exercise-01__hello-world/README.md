# Part 01 - Hello World
This is the first step in serverless. Use a template to generate a couple files from the cli.
## What we did 
In this exercise we used the cli to generate some boilerplate for us. Then we added a small function and some console logs to demonstrate the log tailing and searching of serverless. We deployed just the function code changes to the lambda and invoked the new code while watching the tailed logs. 

### What serverless commands did we use?
- serverless deploy function -f hello
- serverless logs -f hello -t
- serverless logs -f hello --filter Error