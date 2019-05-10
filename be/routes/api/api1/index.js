var express = require('express');
var createError = require('http-errors');
var router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {
  res.send({ msg: 'api1', a: 1})
});
module.exports = router;
