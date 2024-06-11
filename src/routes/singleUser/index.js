var express = require('express');
const Users = require('../../modals/users/Users');
var router = express.Router();
router.get('/singleUser/:email', async (req, res) => {
    console.log(req?.headers?.authorization);
    const email = req.params.email;
    const query = {email: email}
    const result = await Users.findOne(query);
    res.send(result);
})
module.exports = router