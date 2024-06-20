var express = require('express');
const OrderedProduct = require('../../modals/orderedProduct/OrderedProduct');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();

router.get('/getOrderedProductByEmail/:email',verifyToken, async (req, res) => {
    const email = req.params.email;
    const query = { clientEmail: email }
    const result = await OrderedProduct.find(query)
    const reversedResult = result.reverse();
    res.send(reversedResult);
})
module.exports = router