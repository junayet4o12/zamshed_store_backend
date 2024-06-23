var express = require('express');
const Products = require('../../modals/products/products');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();

router.post('/addProducts', verifyToken,  async (req, res) => {
    const productData = req.body;
    const result = await Products.create(productData)
    res.send(result)
}) 

module.exports = router