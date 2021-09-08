var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({welcome: 'Welcome to the OpenSwap Community API'})
});


/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.json({users: []});
});

module.exports = router;
