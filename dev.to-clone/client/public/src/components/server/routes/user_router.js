const express = require('express');
const registeruser = require('../controllers/user_controller');

const route = express.Router();

route.post('/registeruser',registeruser)
registeruser = require('../controllers/user_controller')
