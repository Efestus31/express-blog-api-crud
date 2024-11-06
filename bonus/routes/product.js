//import express and create the router instance
const express = require('express')
const router = express.Router()
//import the controller to handle the routes
const productsController = require('../controller/products-controller.js')


//(index) Get all the rpoducts
router.get('/', productsController.index);

// (show) get a single product by it's id
router.get('/:id', productsController.show);



module.exports = router