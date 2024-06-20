var express = require('express');
const Users = require('../../modals/users/Users');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router();
router.get('/admin/:email', async (req, res) => {
    const email = req.params.email;
    const query = { email: email, isAdmin: true }
    const user = await Users.findOne(query);
    const isAdmin = user ? true : false
    res.send({ isAdmin });
})
module.exports = router