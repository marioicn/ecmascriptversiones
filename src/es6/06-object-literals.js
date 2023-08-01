//enahceb objet literals

function newuser(user,age,country,uid){
    return{
        user,
        age,
        country,
        id:uid
    }
}

console.log(newuser('mario',34,"mx",1))