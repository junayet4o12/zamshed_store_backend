// clientOrdersCount
var express = require('express');
const OrderedProduct = require('../../modals/orderedProduct/OrderedProduct');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();
router.get('/clientOrdersCount', verifyToken, async (req, res) => {
    const pendingQuery = { stage: 'pending' }
    const precessingQuery = { stage: 'processing' }
    const completedQuery = { stage: 'completed' }
    const pendingResult = await OrderedProduct.countDocuments(pendingQuery)
    const precessingResult = await OrderedProduct.countDocuments(precessingQuery)
    const completedResult = await OrderedProduct.countDocuments(completedQuery)
    const all = await OrderedProduct.countDocuments()
    res.send({ all: all, pending: pendingResult, onProcessing: precessingResult, completed: completedResult })
})
module.exports = router