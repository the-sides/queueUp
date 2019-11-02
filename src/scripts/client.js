import {db, dataRequest} from './db'
import {introduceMainUser, updateUsers} from './ui'
console.log('client side script. reporting for duty', db)

// Define user database table to request from
const usersQuery = db.collection('users')

// Setup user info request
const userAutho = new URLSearchParams(document.location.search).get("user")
const mainUserQuery = usersQuery.where("authoToken","==",userAutho)

// Request user info
dataRequest(mainUserQuery).then(data=>introduceMainUser(data))

// Seak database update loop
usersQuery.onSnapshot(function(querySnapshot) {
        querySnapshot.forEach(function(elm) {
            updateUsers(elm.data());
        });
    })