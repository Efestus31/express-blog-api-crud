const express = require('express')
const app = express()

//import the router
const productsRoutes = require('./routes/product.js')
// middlewere
app.use(express.json())


app.listen(3000, () => {
    console.log('Server is running on port 3000');  
})

app.use('/products', productsRoutes)