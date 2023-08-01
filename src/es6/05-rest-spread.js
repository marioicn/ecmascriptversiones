//arrays destructuracion

let fruits = ['apple','banana']
let [a,b]=fruits

console.log(a,fruits[1])

//Objets destructuracion

let user ={username:'mario', age:30}

let {username,age}=user

console.log(username,user.age)


//spread operator


let person ={name:'mario', age:28}
let contry ='col'

let data = {...person,contry, id:125}

console.log(data)

//reset

function suma(num,... values){

    console.log(values)
    console.log(num+values[0])

    return num + values[0]
}

suma(1,2,3,4)



