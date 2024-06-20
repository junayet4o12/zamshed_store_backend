var express = require('express');
const OrderedProduct = require('../../modals/orderedProduct/OrderedProduct');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router()
router.put('/makeOrderCompleted/:id',verifyToken, async (req, res) => {
    const id = req.params.id;
    updatedData = { stage: 'completed' }
    const result = await OrderedProduct.findByIdAndUpdate(id, updatedData, { new: true });
    res.send(result)
})

module.exports = router