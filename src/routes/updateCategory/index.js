var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const Category = require('../../modals/category/Category');
var router = express.Router();

router.put('/updateCategory/:id',verifyToken,  async (req, res) => {
    const id = req.params.id
    const data = req.body;
    const result = await Category.findByIdAndUpdate(id, data, { new: true })
    res.send(result)
}) 

module.exports = router