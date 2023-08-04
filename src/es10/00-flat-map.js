//flat

const array = [1,1,2,3,4,[1,3,4,5,6,[1,2,4]]]

console.log(array)
console.log(array.flat(3))


//flatmap

const array2=[1,2,3,4]

console.log(array2.flatMap(v=>[v,v]))


const nombres=["mario","alejandro"]


console.log(nombres.flatMap(v=>[v,v]))

