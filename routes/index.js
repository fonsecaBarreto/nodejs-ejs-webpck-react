var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

 //test if eja title entries will be diferente dev from prod
module.exports = router;
