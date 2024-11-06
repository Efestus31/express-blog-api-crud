//import express and create the router instance
const express = require('express')
const router = express.Router()
//import the controller to handle the routes
const productsController = require('../controller/products-controller.js')


//(index) Get all the rpoducts
router.get('/', productsController.index); // /products

// (show) get a single product by it's id
router.get('/:id', productsController.show); // /products/1

// (create) create new product
router.post('/', productsController.store) // /products

// (update) update existing product
router.put('/:id', productsController.update); // /products/:id

// (delete) delete a product by it's id
router.delete('/:id', productsController.destroy); // /products/:id



module.exports = router
