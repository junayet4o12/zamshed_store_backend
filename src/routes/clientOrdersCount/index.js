// clientOrdersCount
var express = require('express');
const OrderedProduct = require('../../modals/orderedProduct/OrderedProduct');
var router = express.Router();
router.get('/clientOrdersCount', async (req, res) => {
    const precessingQuery = { stage: 'processing' }
    const completedQuery = { state: 'completed' }
    const precessingResult = await OrderedProduct.countDocuments(precessingQuery)
    const completedResult = await OrderedProduct.countDocuments(completedQuery)
    const all = await OrderedProduct.countDocuments()
    res.send({ all: all, onProcessing: precessingResult, completed: completedResult })
})
module.exports = router