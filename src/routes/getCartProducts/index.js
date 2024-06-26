var express = require('express');
const Products = require('../../modals/products/Products');
const mongoose = require('mongoose');
var router = express.Router();
router.post('/cartProducts', async (req, res) => {
    const body = req.body;
    const ObjectIdArray = body.map(id => new mongoose.Types.ObjectId(id))
    const result = await Products.find({ _id: { $in: ObjectIdArray } })
    res.send(result);
})
module.exports = router