const anotherFuncion =()=>{
    return new Promise((resolve, reject) => {
        if(false){
            resolve('hey')
        } else{
            reject('whoooo')
        }
    })
}

anotherFuncion()
   .then(response=> console.log(response))
   .catch(err => console.log(err));


   