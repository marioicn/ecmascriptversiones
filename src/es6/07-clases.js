// declarando la classe
class User{}



//clase con metodo

class user{

    saludo(){
        return "hello"   
    }
}

const gndx=new user() // generando una instancia de un objeto

console.log(gndx.saludo())  //utillizando el metodo

const bebeloper= new user() // generando una instancia de un objeto

console.log(bebeloper.saludo()) //utillizando el metodo

//constructor

class mokepon{

    constructor(){
        console.log("nuevo usuario")
    }

    saludo(){
        return "hello"   
    }
}

const hipo =new mokepon()


// referencia this


class user{
    constructor(name){
        this.name=name;
    }
    speak(){
        return "hellow"
    }

    greeting(){
        return `${this.speak()} ${this.name}`;   
    }

}

const ana = new user("ana")

console.log(ana.greeting())

// setters getters

class Newperson{
    //constructor
    constructor(name, age){
        this.name=name
        this.age=age

    }

    //metodos

    speak(){
        return "hellow"
    }

    greeting(){
        return `${this.speak()} ${this.name}`;   
    }

    get uage(){
        return this.age
    }

    set uage(n){
        this.age=n
    }
}

const bebeloper69= new Newperson ("david",15)

console.log(bebeloper69.uage)
console.log(bebeloper69.uage=20)

