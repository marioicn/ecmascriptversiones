const fnAsync=()=>{
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=> resolve("async!!"),2000)
        :reject(new Error("error!"));
    })

}

const anotherfn = async ()=>{
    const somethig=await fnAsync();
    console.log(somethig)
    console.log("hello!")
}

console.log("before")
anotherfn()
console.log("after")


//estudiar

const ciudades = ["pasto","bogota"]
const error ="errorrrrr"
function imprimir(){
    setTimeout(()=>{
        return ciudades
    },2000)
}

console.log(imprimir())


function consolear(){
    return new Promise((resolve, reject) => {
        if(ciudades==0){
            reject(error)
        }
        setTimeout(()=>{
            resolve(ciudades)
        },3000)
    })
}

consolear()
.then((resolve)=>console.log(resolve))
.catch((resolveerror)=>console.log(resolveerror))





