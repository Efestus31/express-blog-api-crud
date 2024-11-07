const express = require('express')
const app = express()
app.use(express.json())
const postRouter = require('./routes/posts.js')
const notFound = require('./middlewares/notFound.js') 


const host = process.env.HOST;
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send(' Benvenuto nel mio blog!')
});

app.listen(port, (req, res) => {
    console.log(`Server is running at ${host}:${port}`);
});

app.use('/posts', postRouter);

//this need to be placed after all the routes are defined, so to be our last call.
app.use(notFound);
