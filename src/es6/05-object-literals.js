//enahceb objet literals ANTES

function newuser(user,age,country,uid){
    return{
        user:user,
        age:age,
        country:country,
        id:uid
    }
}



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


// antes de la actualizacion

let nombre="mario"
let edad=26

let objetomario={nombre:nombre,edad:edad}

console.log(objetomario)

// despues de la actualizacion

let nombre1="mario"
let edad1=27

let objetomario1={nombre1,edad1}

console.log(objetomario1)