const express = require('express');
const {registeruser, getUser, getuserbyid, deleteuser, updateuser} = require('../controllers/user_controller');

const route = express.Router();

route.post('/registeruser',registeruser)
// registeruser = require('../controllers/user_controller')
route.get('/getUser', getUser)
route.get('/getuserbyid/:id',getuserbyid)
route.delete('/deleteuser/:id', deleteuser)
route.put('/updateuser/:id', updateuser)
module.exports = route

/*const express = require("express");

const { registerUser, getUsers } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registeruser);

router.get("/users", getUsers);

module.exports = router;*/
