function* iterrate(array){
    for( let value of array){
        yield value;
    }
}


const it = iterrate(["oscar","david","jen"])

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)

//estudio
function* getId(array) {
    for (let value of array) {
      yield value
    }
  }
  
  const generador = getId([1, 2, 3])
  const generador2 = getId(["AX6SF5S", "G7QNW01", "KH3BR02"])
  
  console.log(generador.next().value)
  console.log(generador.next().value)
  console.log(generador.next().value)
  
  console.log(generador2.next().value)
  console.log(generador2.next().value)
  console.log(generador2.next().value)