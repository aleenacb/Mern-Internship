const express = require('express');
const { addProduct, getProducts, UpdateProduct, deleteProduct } = require('../controllers/ProductController');
const upload = require('../middleware/imageUpload')
const route = express.Router()

route.post('/addProduct', upload.single('productimage'), addProduct)
route.get('/getProducts', getProducts)
route.put('/UpdateProduct/:id', upload.single('productimage'), UpdateProduct)  // ✅ added upload middleware
route.delete('/deleteProduct/:id', deleteProduct)

module.exports = route
