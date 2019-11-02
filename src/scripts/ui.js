function updateUsers(data){
    console.log(`updating`, data)
}
function introduceMainUser(data){
    console.log(data.length)
    if(Number(data.length) === 1) data = data[0]
    else {
        console.error('Multiple main user entries found', data)
        return false;
    }
    console.log(`introducing ${data.discordName}`, data)
}
export {introduceMainUser, updateUsers}