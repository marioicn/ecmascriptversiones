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

   // otra manera

   function anotherfuncions(){
    return new Promise(function(resolve,reject){
        if(true){
            resolve('heyy')
        }else{
            reject("whouu")
        }
    })

   }

   anotherfuncions()
    .then(response=> console.log(response))
    .catch(err=>console.log(err));
   

    // estudio

    let nombre ="mario"

    function versinombreescorrecto (){
        return new Promise((resolve,reject)=>{
            if(nombre=="mario"){
                resolve("si es")

            } else reject ("no es")
        })
    }

    versinombreescorrecto()
        .then(response=>console.log(response))
        .catch(err=>console.log(err))