const express = require('express')
const { registerUser, getUsers, getUserById, deleteUser, updateUser, Login, getProfile, updateProfile } = require('../controllers/user_controller')
const auth = require("../middleware/Auth")
const multer = require("multer")          // ✅ Add this
const route = express.Router()

// ✅ Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
})
const upload = multer({ storage })

// ✅ Routes
route.post('/registerUser', registerUser)
route.post('/Login', Login)
route.get('/getUsers', getUsers)
route.get('/getUserById/:id', getUserById)
route.delete('/deleteuserbyid/:id', deleteUser)
route.put('/updateUser/:id', updateUser)
route.get('/getProfile', auth, getProfile)
route.put('/updateProfile', auth, upload.fields([
  { name: "profileimage", maxCount: 1 },
  { name: "coverimage", maxCount: 1 }
]), updateProfile)

module.exports = route
