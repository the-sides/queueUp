let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let {router} = require('./router') 
let cors = require('cors')
const {Firestore} = require('@google-cloud/firestore');
const admin = require('firebase-admin');
const env = require('dotenv').config()

let serviceAccount = require('./keys/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

const usersRef = db.collection('users')
function updateUser(){
  return true
}
function createUser(users){
  let doc = usersRef.doc(user.discordName);
  console.log(users)
  let setData = doc.set({
    discordName: user.discordName,
    discordTag: user.discordTag,
    avatar : user.avatarURL,
    looking: user.looking,
  });
  console.log('\n\n\nCALL', setData)

}

let indexRouter = router;

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'pug');

app.use(cors({origin: true}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', indexRouter);

let users = []

app.use('/user', function(req, res){
  // console.log(req.body)
  console.log('see job')
  // let doc = usersRef.doc(user.discordName);
  let user = req.body

  // res.send('good job')

  // let setData = doc.set({
  //   discordName: user.discordName,
  //   discordTag: user.discordTag,
  //   avatar : user.avatarURL,
  //   looking: user.looking,
  // });
  for(let i = 0; i < 8; i++){
    console.log('\n\n\nCALL', i)
    // console.log(setData)
    // let setData = ({
    //   discordName: user[i].discordName,
    //   discordTag: user[i].discordTag,
    //   avatar : user[i].avatarURL,
    //   looking: user[i].looking,
    // });
    users.append(i)
    console.log('==============')
  }
  res.send('good job')

  // createUser(req.body)
})
  // let usersUpload = false
  // let usersWatch = setInterval(()=>{

  //   console.log(users)
    // let doc = usersRef.doc(user.discordName);
    // let setData = doc.set({
    //   discordName: user.discordName,
    //   discordTag: user.discordTag,
    //   avatar : user.avatarURL,
    //   looking: user.looking,
    // });
  //   usersUpload = true
    
  // }, 1200)
  // if(usersUpload)
  //   clearInterval(usersWatch)

app.use('/join', async function(req, res, next){
  const doc = db.doc('users');

  // Enter new data into the document.

  // helloWorld = req.body
  res.send('damn dawg')
  await updateUser()
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
