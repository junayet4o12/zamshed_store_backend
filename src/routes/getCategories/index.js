var express = require('express');
const Category = require('../../modals/category/Category');
var router = express.Router();
router.get('/categories', async (req, res) => {
    const result = await Category.find()
    res.send(result);
})
module.exports = router