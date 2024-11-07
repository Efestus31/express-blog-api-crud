const express = require('express')
const app = express()

//import the router
const productsRoutes = require('./routes/product.js')
const notFoundMiddleware = require('./middlewares/notFound.js')
const loggerMiddleware = require('./middlewares/logger.js')
// middlewere
app.use(express.json())


app.listen(3000, () => {
    console.log('Server is running on port 3000');  
})
app.use('/products', loggerMiddleware)

app.use('/products', productsRoutes);

app.use(notFoundMiddleware);
// app.use('/products', (req, res, next) => {
//     throw new Error("You broke everything dude! 💥");
//   }); 



app.use((err, req, res, next) => {
    //console.log("Error: ", err.message);
    // this prints the stack trace of the error
    console.error(err.stack);
    res.status(500).send({
      message: "Something went wrong",
      error: err.message
    })
  });