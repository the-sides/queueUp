import {db, dataRequest} from './db'
import {introduceMainUser, updateUsers} from './ui'
console.log('client side script. reporting for duty', db)

function run() {
    // Define user database table to request from
    const usersQuery = db.collection('users')

    // Setup user info request
    const uq = new URLSearchParams(document.location.search)
    const mainUserQuery = usersQuery.where("discordName","==",uq.get('user'))

    // Request user info
    dataRequest(mainUserQuery).then(data=>introduceMainUser(data))

    // Seak database update loop
    usersQuery.onSnapshot(function(querySnapshot) {
            querySnapshot.forEach(function(elm) {
                if(elm.data()['discordName'] !== uq.get('user'))
                    updateUsers(elm.data());
            });
        })
}
document.addEventListener('DOMContentLoaded', run)