var express = require('express');
var router = express.Router();
var fs = require('fs');

// Create a new client

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'qUp'});
});

router.get('/party?*', function(req, res, next) {
  res.render('party', { title: 'qUp', svg:{
    crown: fs.readFileSync('dist/svgs/crown.svg', 'utf8')
  } });
});

router.get('/test',function(req, res, next){
  res.render('error', { title: 'testing env' });
});




module.exports = {router};
