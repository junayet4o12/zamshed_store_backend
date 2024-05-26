var express = require('express');
const Products = require('../../modals/products/products');
var router = express.Router();
router.get('/allProducts',  async (req, res) => {
    const result = await Products.find()
    res.send(result)
})
module.exports = router