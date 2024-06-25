var express = require('express');
const Products = require('../../modals/products/Products');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();
router.get('/singleProduct/:id', verifyToken, async (req, res) => {
    const id = req.params.id
    const result = await Products.findById(id)
    res.send(result)
})
module.exports = router