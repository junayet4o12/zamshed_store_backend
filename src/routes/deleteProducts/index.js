var express = require('express');
const Products = require('../../modals/products/products');
var router = express.Router();

router.delete('/deleteProducts/:id', async (req, res) => {
    const id = req.params.id
    const result = await Products.findByIdAndDelete(id)
    res.send(result)
})

module.exports = router