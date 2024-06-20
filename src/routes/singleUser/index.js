var express = require('express');
const Users = require('../../modals/users/Users');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();
router.get('/singleUser/:email', verifyToken, async (req, res) => {
    const email = req.params.email;
    const query = { email: email }
    const result = await Users.findOne(query);
    res.send(result);
})
module.exports = router