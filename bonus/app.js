const express = require('express')
const app = express()

//import the db-products.js file
const products = require('./db/db-products.js');


app.listen(3000, () => {
    console.log('Server is running on port 3000');  
})

//(index) Get all the rpoducts
app.get('/products', (req, res) => {
    res.json({ data: products, count: products.length })
});

// (show) get a single product by it's id
app.get('/products:id', (req, res) =>{
    //find the product by id
    const product = products.find(product => product.id === parseInt(req.params.id))

    if(!product){
       return res.status(404).json({ error: `No product found with this id: ${req.params.id}`})
    }
    return res.status(200).json({ data: product})
})