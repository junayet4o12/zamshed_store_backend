var express = require('express');
const OrderedProduct = require('../../modals/orderedProduct/OrderedProduct');
var router = express.Router();

router.get('/completedOrders', async (req, res) => {
    const completedQuery = { stage: 'completed' }
    const result = await OrderedProduct.find(completedQuery)
    res.send(result)
})
module.exports = router