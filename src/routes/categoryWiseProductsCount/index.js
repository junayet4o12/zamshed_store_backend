var express = require('express');
const Products = require('../../modals/products/Products');
var router = express.Router();
router.get('/categoryWiseProductsCount/:category',  async (req, res) => {
    const category = req.params.category;
    const query = {category: category}
    const result = await Products.countDocuments(query)
    res.send({productQuantity: result})
})
module.exports = router