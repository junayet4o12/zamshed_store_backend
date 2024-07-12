var express = require('express');
const HomeContent = require('../../modals/homeContent/HomeContent');
var router = express.Router();
router.get('/homeContent', async (req, res) => {
    const result = await HomeContent.find()
    res.send(result);
})
module.exports = router