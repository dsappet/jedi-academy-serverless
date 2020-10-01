# Jedi Academy Serverless Framework cli presentation excercises
This is a repo of code examples to go along with the Jedi Academy serverless framework presentation

## Exercise 01 - Hello World
Use the cli template to generate a new serverless project and deploy it to AWS. Invoke, update, and log the function. 

## Exercise 02 - Make the function event driven
Learn how to invoke a function when an http event is made. 

## Exercise 03 - Add some resources
Add an S3 bucket to serverless architecture and write a file to it from our lambda. All permissions associated with deploying and writing are included.

## Exercise 04 - Custom variables and organizing configuration
Use custom variables to avoid repeating hardcoded values as well as set up different values across environments with stage. 

## Exercise 05 - Using plugins
Quickly learn how to add one of the most useful plugins available.

## Exercise 06 - Deploy traffic hooks
Pre and post traffic hooks run lambda functions before and after traffic has been directed to a newly deployed lambda. This is great for running real e2e tests. Other tricky applications exist as well like "warming" a lambda before traffic is directed to it. This is great for lambdas that exist behind a VPC and require warming. 

## Exercise 07 - Protect your lambda with API Keys
Serverless provides a very simple and easy to use configuration for generating and implementing API Keys. 

# Future exercises
* Provisioning - keep warm lambdas for high availability

# The slides
<https://docs.google.com/presentation/d/13Ro7OQ60D_NOmgVO3vHbKHKpbb7bG5eIaaTS8jcotyI>
