const express = require('express'); //import express
const bodyParser = require('body-parser'); //import body-parser after installation

const app = express(); //create an instance of express, with this we can access all the http method like get, post etc

// const postRouter = require('./routes/post');
const api = require('./routes/api');

app.use(bodyParser.json());

app.use('/posts', api); //middleware

module.exports = app