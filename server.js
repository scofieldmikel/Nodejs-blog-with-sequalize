// This is where i write my server

const http = require('http'); //import http
const app = require('./app'); //impaort app from app.js file
const port = 3000; //define a port

const server = http.createServer(app); //create the server

server.listen(port); //Listen to the defined port