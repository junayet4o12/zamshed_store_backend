var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();

router.put('/updateHomeContent/:id',verifyToken,  async (req, res) => {
    const id = req.params.id
    const homeContentData = req.body;
    const result = await Products.findByIdAndUpdate(id, homeContentData, { new: true })
    res.send(result)
}) 

module.exports = router