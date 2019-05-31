# Exercise 05 - Using plugins
There is a huge community of serverless plugins covering a wide variety of functionality. One key plugin is serverless-plugin-optimize which drastically reduces the file size of the uploaded lambda without the need to explicitly handle excludes manually. 

npm i serverless-plugin-optimize -D

add the following to serverless.yml
plugins:
  - serverless-plugin-optimize

Notice the size of the zip uploaded has reduced from around 7MB to less than 1k
`Serverless: Uploading service hello-world.zip file to S3 (869 B)...`