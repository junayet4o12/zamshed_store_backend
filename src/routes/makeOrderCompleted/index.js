var express = require('express');
const OrderedProduct = require('../../modals/orderedProduct/OrderedProduct');
var router = express.Router()
router.put('/makeOrderCompleted/:id', async (req, res) => {
    const id = req.params.id;
    updatedData = { stage: 'completed' }
    const result = await OrderedProduct.findByIdAndUpdate(id, updatedData, { new: true });
    res.send(result)
})

module.exports = router