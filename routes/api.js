var express = require('express');
var router = express.Router();
var PublicController = require('../Controllers/PublicController');
var UserController = require('../Controllers/UserController');

router.get('/', PublicController.index);
router.get('/users', UserController.index);

module.exports = router;
