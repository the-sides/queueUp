var express = require('express');
var router = express.Router();
let setupDump, updateBlip, helloWorld

// Create a new client

/* GET home page. */
router.get('/*', function(req, res, next) {
  res.render('home', { title: 'qUp' });
});

router.get('/test',function(req, res, next){
  res.render('error', { title: 'testing env' });
});

router.post('/user', function(req, res, next){
  console.log(req.body)
  setupDump = req.body
  res.send('good job')
})



module.exports = {router, setupDump};
