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



// estudio 

//desestructuracion
let frutas = ["peras","bananas","sandias"]
let mario ={nombre:"mario",edad:26}

let [c,d,e]=frutas
let {nombre,edad}=mario

console.log(c)
console.log(frutas[1])
console.log(nombre)
console.log(mario.edad)

//spread operator

let computador = {procesador:"ryzen",ram:"corsair"}
let monitor ="asus"

let computadortodoenuno={...computador,monitor}

console.log(computadortodoenuno)

//rest 

function titulonombre (...values){

    console.log("PRIMERLUGAR "+ values[0])
    console.log("segundo lugar " +values[1])

}


titulonombre("pepito","pepe")


// examen 



function solution(json1, json2) {
    let jsonuno = json1 || {
      name: "Mr. Michi",
      food: "Pescado"
    }
  
    let jasondos = json2 || {
      age: 12,
      color: "Blanco"
    }
  
    let fusion = { ...jsonuno, ...jasondos }
  
    console.log(fusion)
  }
  
  solution({
    name: "Bigotes",
    food: "Pollito"
  })







