var express = require('express');
const Category = require('../../modals/category/Category');
var router = express.Router();

router.get('/singleCategory/:id', async (req, res) => {
    const _id = req.params.id;
    const result = await Category.findById(_id)
    res.send(result);
})
module.exports = router