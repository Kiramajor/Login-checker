let button = document.querySelector('#btn');
let displayUser = document.querySelector('.displayUser');
let displayPass = document.querySelector('.displayPass');
let userName = document.querySelector('#username');
let passWord = document.querySelector('#password'); 

let dataBase = [
    {
    name: 'tari',
    password: 'samwise',
    gender: 'female',
},{
    name: 'sam',
    password: '123456',
    gender: 'male',
},{
    name: 'ola',
    password: 'hillarion',
    gender: 'male',
}
];

button.addEventListener('click', function(){
    if (signIn(userName.value, passWord.value)) {
       displayUser.innerHTML = 'Hey welcome to my timeline';
       displayPass.innerHTML = `Author by ${userName.value}`;
    } else{
        alert('incorrect details, try again')
    }  
})

function signIn(username, password){
    for (let i = 0; i < dataBase.length; i++) {
       if (dataBase[i].name === username && dataBase[i].password === password) {
        return true;
       }
    }
    return false;
}