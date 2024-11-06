const express = require('express')
const app = express()

//import the controller
const productsController = require('./controller/products-controller.js')


app.listen(3000, () => {
    console.log('Server is running on port 3000');  
})

//(index) Get all the rpoducts
app.get('/products', productsController.index);

// (show) get a single product by it's id
app.get('/products/:id', productsController.show);
