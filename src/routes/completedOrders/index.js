var express = require('express');
const OrderedProduct = require('../../modals/orderedProduct/OrderedProduct');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();

router.get('/completedOrders', verifyToken, async (req, res) => {
    const completedQuery = { stage: 'completed' }
    const result = await OrderedProduct.find(completedQuery)
    res.send(result)
})
module.exports = router