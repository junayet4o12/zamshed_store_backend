var express = require('express');
const Users = require('../../modals/users/Users');
const checkDuplicateUser = require('../../middlewares/checkDuplicateUsers');
var router = express.Router();

router.post('/addUsers', async (req, res) => {
    const user = req?.body;
    const existingUser = await checkDuplicateUser(user)
    if (existingUser) {
        return res.send({ message: ' user already exists' })
        
    }
    const result = await Users.create(user)
    res.send(result)
})

module.exports = router