const list = new Set()

list.add('item1');
list.add('item2').add("item3")

console.log(list)

//estudio


const listadeanimales= new Set()

listadeanimales.add("perro")
listadeanimales.add("gato").add("caballo")   //listas no permiten elementos duplicados, no hay orden

console.log(listadeanimales)


const arreglodeanimales=[]

arreglodeanimales.push("perro","gato","caballo") //arreglos permiten elementos duplicados,  hay orden

console.log(arreglodeanimales)


const objetoanimales = {perro:"perro",gato:"gato"} //objetos

console.log(objetoanimales)
