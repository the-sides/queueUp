var express = require('express');
var router = express.Router();
let setupDump, updateBlip, helloWorld
let quickstart = require('./dbPoster')

const {Firestore} = require('@google-cloud/firestore');

// Create a new client
const firestore = new Firestore();


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

router.post('/join', async function(req, res, next){
  const doc = firestore.doc('users');

  // Enter new data into the document.
  async function quickstart(){
    return await doc.set({
      title: 'Welcome to Firestore',
      body: 'Hello World',
    });
  }

  helloWorld = req.body
  await quickstart().then(data=>{console.log(data)})
  res.send('damn dawg')
})


module.exports = {router, setupDump};
