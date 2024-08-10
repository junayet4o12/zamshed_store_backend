var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const Category = require('../../modals/category/Category');
var router = express.Router();

router.delete('/deleteCategory/:id',verifyToken, async (req, res) => {
    const id = req.params.id
    const result = await Category.findByIdAndDelete(id)
    res.send(result)
})

module.exports = router