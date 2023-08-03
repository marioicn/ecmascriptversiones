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