import {db, dataRequest} from './db'
console.log('client side script. reporting for duty', db)

// Define user database table to request from
const users = db.collection('users')

// Setup user info request
const userAutho = new URLSearchParams(document.location.search).get("user")
let query = users.where("authoToken","==",userAutho)

// Request user info
dataRequest(query).then(data=>console.log(data))