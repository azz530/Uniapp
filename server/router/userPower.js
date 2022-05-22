const express = require('express')
const router = express.Router();
const userPower = require('../routerHandle/userPower')

router.get('/getUserInfo',userPower.getUserInfo);

module.exports = router;