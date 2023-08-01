var lastname = "mario" //declaramos y asignamos la variable
lastname="alejandro" // reasignamos el valor

console.log(lastname)


let fruit = "apple" // declarar y asignar la variable
fruit="kiwi" // reasignamos el valor

console.log(fruit)


const animal ="dog" // declaramos y asignamos
animal="cat" // con const no se puede reasignar un valor, genera error

console.log(animal)



const fruits = ()=>{
    if (true) {
        var fruit1="apple" //existe de forma global, function scope
        let fruit2="kiwi" // existe solo en el bloque que son declaradas, blacks cope
        const fruit3="banana" // existe solo en el bloque que son declaradas, blacks cope
    }

    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}

fruits()



