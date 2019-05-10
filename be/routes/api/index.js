var express = require('express');
var createError = require('http-errors');
var router = express.Router();

/* GET home page. */
// router.get('/hello', function(req, res, next) {
//   res.send({msg: 'hello', a:1 })
// });
// router.post('/user', function(req, res, next) {
//   res.send({msg: 'hello', a:3 })
// });
// router.post('/hello', function(req, res, next) {
//   res.send({msg: 'hello', a:1 })
// });


router.use('/api1', require('./api1'))
router.use('/api2', require('./api2'))
router.use('/user', require('./user'))

router.get('*', function(req, res, next) {
  next(createError(404, '그런 api 없어요'))
});

module.exports = router;
