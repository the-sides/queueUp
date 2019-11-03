var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next) {
  res.render('home', { title: 'qUp' });
});

router.get('/test',function(req, res, next){
  res.render('error', { title: 'testing env' });
});

router.post('/user', function(req, res){
  console.log(req.body)
})


module.exports = router;
