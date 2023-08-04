async function* anotherGenerator(){
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
}

const other = anotherGenerator()

other.next().then(res=>console.log(res.value))
other.next().then(res=>console.log(res.value))
other.next().then(res=>console.log(res.value))


async function arrayofnames(arr){
    for await(let value of arr){
        console.log(value)
    }
}

const names= arrayofnames(["mario","alejandro"])

console.log("after")

