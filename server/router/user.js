const express = require('express')
const router = express.Router();
const user = require('../routerHandle/user')

router.post('/nameValidator',user.nameValidator);
router.post('/register',user.register);
router.post('/login',user.login);

module.exports = router;