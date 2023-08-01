//Antes de Ecmascript 6
function newUser (name,age,country){

    var name = name || 'Mario'

    var age = age || 34

    var country = country || 'Col'

    console.log(age,name,country)


}

newUser()

newUser('Alejandro',30,"Mex")

//Despues de Ecmascript 6

function newAdmin(name='Mario',age='31',country="Col"){
    console.log(age,name,country)
}
newAdmin()

newAdmin('Alejandro',29,'Mex')

