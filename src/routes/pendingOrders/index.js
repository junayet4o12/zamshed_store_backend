var express = require('express');
const OrderedProduct = require('../../modals/orderedProduct/OrderedProduct');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();

router.get('/pendingOrders', verifyToken, async (req, res) => {
    const pendingQuery = { stage: 'pending' }
    const result = await OrderedProduct.find(pendingQuery)
    res.send(result)
})
module.exports = router