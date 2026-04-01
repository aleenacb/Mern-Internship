const express = require('express')
const {registerUser, getUsers, getUserById, deleteUser, updateUser, Login, getProfile, updateProfile} = require('../controllers/user_controller')
const auth = require("../middleware/Auth")
const route = express.Router()

route.post('/registerUser', registerUser)
route.post('/Login',Login)
route.get('/getUsers', getUsers)
route.get('/getUserById/:id', getUserById)
route.delete('/deleteuserbyid/:id', deleteUser)
route.put('/updateUser/:id', updateUser)
route.get('/getProfile/', auth, getProfile)
route.put('/updateProfile', auth, updateProfile)
module.exports = route
