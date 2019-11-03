function updateUsers(data){
    console.log(`updating`, data)
    let copy = document.getElementsByClassName('mainUser')[0].cloneNode(true)
    copy.classList.remove('mainUser')
    let root = document.querySelector('.partyPanel')

    let avatar = root.querySelector('.avatar img')
    let name = root.querySelector('.text .name')
    let status = root.querySelector('.text .status')

    avatar.src = data['avatar']
    console.log(name)
    name.textContent = data['discordName']
    if(data['status'] !== undefined){
        status.textContent = data['status']
        name.classList.remove('center')
        status.classList.remove('hide')
    }
    else{
        name.classList.add('center')
        status.classList.add('hide')
    }

    root.appendChild(copy)
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


    avatar.src = data['avatar']
    console.log(name)
    name.textContent = data['discordName']
    if(data['status'] !== undefined){
        status.textContent = data['status']
    }
    else{
        name.classList.add('center')
        status.classList.add('hide')
    }
}
export {introduceMainUser, updateUsers}