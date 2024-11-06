//import the db-products.js file
const products = require('../db/db-products.js')
const fs = require('fs')

//(index) Get all the products
const index = (req, res) => {
    res.json({ data: products, count: products.length })
}

// (show) get a single product by it's id
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

// (create) create new product
const store = (req, res) => {
    //add the resource to our array
    //console.log(req.body);
    // create a new product object
    const product = {
        id: products[products.length -1].id + 1 ,
        name: req.body.name,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
};
    //push it in the products array
    products.push(product)

    //save the resource in the db file
    fs.writeFileSync('./db/db-products.js', `module.exports = ${JSON.stringify(products, null, 4)}`)

    return res.status(201).json({
        status: 201,
        data: products,
        count: products.length
    })
}


module.exports = {
    index,
    show,
    store
}