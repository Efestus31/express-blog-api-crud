//import the db-products.js file
const products = require('../db/db-products.js')
//import the fs metod
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
        //return a 404 error
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

    //return a success message
    //with the array + the addedd product
    return res.status(201).json({
        status: 201,
        data: products,
        count: products.length
    })
}
// (update) update a product by it's id
 const update = (req, res) => {
    //find the product by id
    const product = products.find(product => product.id === parseInt(req.params.id))
    //check if the user is updating the correct product
    if(!product) {
        return res.status(404).json({ error: `No product found with this id ${req.params.id}`})
    }
    //update the product
    product.title = req.body.title;
    product.slug = req.body.slug;
    product.content = req.body.content;
    product.image = req.body.image;
    product.tags = req.body.tags;

    //if some fiels are missing, we will not update them
    if(!req.body.title || !req.body.slug ||  !req.body.content || !req.body.image || !req.body.tags) {  
        //return an error message 400
        return res.status(400).json({ error: 'Some fields are missing'})
        }
        //save the resource in the db file
        fs.writeFileSync('./db/db-products.js', `module.exports = ${JSON.stringify(products, null, 4)}`)

    //return 201 status and the updated product
    return res.status(201).json({
        status: 201,
        data: products,
        count: products.length

    })

 }
// (delete) delete a product by it's id
 const destroy = (req, res) => {
    //find the product by id
    const product = products.find(product => product.id === parseInt(req.params.id))

    //check if the product exist
    if(!product){
        return res.status(404).json({ error: `No product found with the following id: ${req.params.id}`})
    }
    //we create a new array of resources without the product  (found by using the find method)
    const newProducts = products.filter(product => product.id !== parseInt(req.params.id))

    //update the file db-products.js 
    fs.writeFileSync('./db/db-products.js', `module.exports = ${JSON.stringify(newProducts, null, 4)}`)
    
    //return of the array
    return res.status(200).json({
        status: 200,
        data: newProducts,
        count: newProducts.length
    })
 }


    

//export the methods
module.exports = {
    index,
    show,
    store,
    update,
    destroy
}