var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const HomeContent = require('../../modals/homeContent/HomeContent');
var router = express.Router();

router.put('/updateHomeContent/:id',verifyToken,  async (req, res) => {
    const id = req.params.id
    const homeContentData = req.body;
    const result = await HomeContent.findByIdAndUpdate(id, homeContentData, { new: true })
    res.send(result)
}) 

module.exports = router