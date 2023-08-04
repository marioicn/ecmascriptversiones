const user = {username:"macv",age:26,country:"co"}

const {username,...values}=user

console.log(username)
console.log(values)