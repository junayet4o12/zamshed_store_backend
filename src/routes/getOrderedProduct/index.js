var express = require('express');
const OrderedProduct = require('../../modals/orderedProduct/OrderedProduct');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();

router.get('/getOrderedProduct', verifyToken, async (req, res) => {
    const result = await OrderedProduct.find()
    res.send(result)
})
module.exports = router