var express = require('express');
var router = express.Router();
var PublicController = require('../Controllers/PublicController');
var UserController = require('../Controllers/UserController');
var TradeController = require('../Controllers/TradeController');

router.get('/', PublicController.index);

/* User Routes */
router.get('/users', UserController.index);
router.get('/users/register', UserController.register);

/* Trade Routes */
router.get('/trades', TradeController.index);
router.post('/trade', TradeController.save);

module.exports = router;
