var express = require('express');
const Products = require('../../modals/products/products');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();

router.put('/updateProducts/:id',verifyToken,  async (req, res) => {
    const id = req.params.id
    const productData = req?.body;
    const result = await Products.findByIdAndUpdate(id, productData, { new: true })
    res.send(result)
}) 

module.exports = router