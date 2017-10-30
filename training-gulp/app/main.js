var login = require('./login.js');

function myLogin(name , password){
    console.log(login(name, password));
}

function add(a,b){
    console.log("进行 add()");
    return a+b;
}

module.exports = {
    add:add,
    myLogin:myLogin
}