var express = require('express');
const OrderedProduct = require('../../modals/orderedProduct/OrderedProduct');
var router = express.Router();

router.get('/onProcessingOrders', async (req, res) => {
    const precessingQuery = { stage: 'processing' }
    const result = await OrderedProduct.find(precessingQuery)
    res.send(result)
})
module.exports = router