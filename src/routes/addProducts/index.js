var express = require('express');
const Products = require('../../modals/products/products');
var router = express.Router();

router.post('/addProducts',  async (req, res) => {
    const productData = req?.body;
    console.log(productData);
    const result = await Products.create(productData)
    res.send(result)
}) 

module.exports = router