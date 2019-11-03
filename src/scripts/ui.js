function updateUsers(data){
    console.log(`updating`, data)
    deleteIfRenewed(data)
    let copy = document.getElementsByClassName('mainUser')[0].cloneNode(true)
    copy.classList.remove('mainUser')
    let root = document.querySelector('.partyPanel')

    let avatar = copy.querySelector('.avatar img')
    let name = copy.querySelector('.text .name')
    let status = copy.querySelector('.text .status')
    copy.classList.remove('looking')
    copy.classList.remove('busy')
    if(data['looking']){
        copy.classList.add('looking')
    }
    if(data['busy']){
        copy.classList.add('busy')
    }

    avatar.src = data['avatar']

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

function deleteIfRenewed(user){
    console.log(`finding other ${user['discordName']}`)
    let cards = document.querySelectorAll('.card');
    [...cards].forEach(element => {
        let name = element.querySelector('.name').textContent
        if(name == user['discordName']){
            element.parentNode.removeChild(element)
            console.log('existing card', element.parentNode)
        }
    });

}

function introduceMainUser(data){
    console.log('Party leader',data)
    if(Number(data.length) === 1) data = data[0]
    else {
        console.error('Multiple main user entries found', data)
        return false;
    }
    let root = document.querySelector('.mainUser')
    let avatar = root.querySelector('.avatar img')
    let name = root.querySelector('.text .name')
    let status = root.querySelector('.text .status')

    if(data['looking'] == true){
        root.classList.add('looking')
    }

    avatar.src = data['avatar']
    console.log(data)
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