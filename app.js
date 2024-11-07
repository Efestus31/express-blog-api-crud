//import express
const express = require('express')
const app = express()
//import routes
const postRouter = require('./routes/posts.js')
//import middleware for error handling
const notFound = require('./middlewares/notFound.js') 
//import middleware to log requests
const loggerMiddleware = require('./middlewares/loggerMiddleware.js')
//middleware to handle CORS
app.use(express.json())

//import HOST & PORT from .env file
const host = process.env.HOST;
const port = process.env.PORT;

//static page
app.get('/', (req, res) => {
    res.send(' Benvenuto nel mio blog!')
});

app.listen(port, (req, res) => {
    console.log(`Server is running at ${host}:${port}`);
});

app.use('/posts', loggerMiddleware);

app.use('/posts', postRouter);

//this need to be placed after all the routes are defined
// so to be our last call.
app.use(notFound);
