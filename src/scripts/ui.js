function updateUsers(data){
    console.log(`updating`, data)
}
function introduceMainUser(data){
    console.log(data)
    if(Number(data.length) === 1) data = data[0]
    else {
        console.error('Multiple main user entries found', data)
        return false;
    }
    let root = document.querySelector('.mainUser')
    let avatar = root.querySelector('.avatar img')
    let name = root.querySelector('.text .name')
    let status = root.querySelector('.text .status')
    // data

    avatar.src = data['avatar']
    console.log(name)
    name.textContent = data['discordName']
    if(data['status'] !== undefined){
        status.textContent = data['status']
    }
}
export {introduceMainUser, updateUsers}