var express = require('express');
const Users = require('../../modals/users/Users');
var router = express.Router();

router.put('/updateSingleUsers/:id',  async (req, res) => {
    const id = req.params.id
    const updatedData = req?.body;
    const result = await Users.findByIdAndUpdate(id, updatedData, { new: true })
    res.send(result)
}) 

module.exports = router