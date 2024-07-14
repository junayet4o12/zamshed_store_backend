var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const HomeContent = require('../../modals/homeContent/HomeContent');
var router = express.Router();

router.put('/updateHomeContent/:id',verifyToken,  async (req, res) => {
    const id = req.params.id
    const homeContentData = req.body;
    console.log(id,homeContentData);
    const result = await HomeContent.findByIdAndUpdate(id, homeContentData, { new: true })
    console.log(result);
    res.send(result)
}) 

module.exports = router