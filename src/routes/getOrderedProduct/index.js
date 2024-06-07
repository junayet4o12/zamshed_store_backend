var express = require('express');
const OrderedProduct = require('../../modals/orderedProduct/OrderedProduct');
var router = express.Router();

router.get('/getOrderedProduct',  async (req, res) => {
    const result = await OrderedProduct.find()
    res.send(result)
})
module.exports = router