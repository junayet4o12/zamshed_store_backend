var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const OrderedProduct = require('../../modals/orderedProduct/OrderedProduct');
var router = express.Router();

router.delete('/deleteOrders/:id',verifyToken, async (req, res) => {
    const id = req.params.id
    const result = await OrderedProduct.findByIdAndDelete(id)
    res.send(result)
})

module.exports = router