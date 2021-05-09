1. Introduction
This backend server is developed according to the requirements given by the Channel Nine Company.
Written by Weiliang Liang.

2.Tools
This project is written completely using backend Node.js + express. NPMs include testing framework
mocha,chai and supertest,logging tools morgan,parser tools body-parser and lodash etc.

IDE: VSCode + ESLint extension installed and enabled.
Dev Environment: Mac OSX.
Node.js version: 13.14.0
Express version: 4.17.1

3.Project/Code Structure
./data - Includes test data.
./lib  - Includes modules used by the project
./logs - Includes logs files.
./node_modules - Includes node modules installed
./test - Includes testing scripts.
         I have included both unit testing and integration testing scripts.
./package.json - Includes a list of node dependency packages.
./index.js - Includes the code for the main server.

4.Execution
First you need to install Node.js. Then run npm install under the project root directory to install any node 
dependency libraries.

Under the project root directory again run "sudo node index.js". Note that running this command as a system
superuser is recommended because the requirements implicitly said that this server should be running in port 80.

Otherwise could simple run "npm start" under the project root could start the server.
For testing scripts simply run "npm test" under the project root.

5.Deployment
This server is also deployed in AWS EC2.
You can access this service at http://ec2-3-26-0-123.ap-southeast-2.compute.amazonaws.com/

6.Github
You can see the source code under the following github link:
https://github.com/welian0006g/channel_nine_project

7.Version
1.0.0

8.Q&A
Please see "answers.txt". It includes questions and answers related to the project.



