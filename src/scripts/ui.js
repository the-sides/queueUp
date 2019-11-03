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
    let elm = document.querySelector('.avatar')
    let name = document.querySelector('.name')
    let status = document.querySelector('.status')
}
export {introduceMainUser, updateUsers}