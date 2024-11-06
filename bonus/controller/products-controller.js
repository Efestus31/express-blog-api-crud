//import the db-products.js file
const products = require('../db/db-products.js')

//(index) Get all the products
const index = (req, res) => {
    res.json({ data: products, count: products.length })
}

const show = (req, res) =>{
    //find the product by id
    const product = products.find(product => product.id === parseInt(req.params.id))
    //check if the product exists
    if(!product){
       return res.status(404).json({ error: `No product found with this id: ${req.params.id}`})
    }
    //return the selected product
    return res.status(200).json({ data: product})
}


module.exports = {
    index,
    show
}