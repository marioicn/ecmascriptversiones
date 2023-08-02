function* iterrate(array){
    for( let value of array){
        yield value;
    }
}


const it = iterrate(["oscar","david","jen"])

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)