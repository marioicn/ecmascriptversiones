const promisone= new Promise((resolve, reject) => {
    reject("reject")
})

const promisedos=new Promise((resolve, reject) => {
    resolve("resolve")
})

const promisetres=new Promise((resolve, reject) => {
    resolve("resolve")
})



Promise.allSettled([promisone,promisedos,promisetres])
.then(res => console.log(res))