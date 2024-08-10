var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const Category = require('../../modals/category/Category');
var router = express.Router();

router.post('/addCategory', verifyToken,  async (req, res) => {
    const data = req.body;
    const result = await Category.create(data)
    res.send(result)
}) 

module.exports = router