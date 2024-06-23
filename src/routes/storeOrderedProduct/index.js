// storeOrderedProduct
var express = require('express');
const OrderedProduct = require('../../modals/orderedProduct/OrderedProduct');
var router = express.Router();

router.post('/storeOrderedProduct',  async (req, res) => {
    const productData = req.body;
    const result = await OrderedProduct.create(productData)
    res.send(result)
}) 

module.exports = router