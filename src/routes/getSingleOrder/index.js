var express = require('express');
const OrderedProduct = require('../../modals/orderedProduct/OrderedProduct');
var router = express.Router();

router.get('/singleOrder/:id', async (req, res) => {
    const _id = req.params.id;
    const result = await OrderedProduct.findById(_id)
    res.send(result);
})
module.exports = router