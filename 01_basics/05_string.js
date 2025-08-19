const name = "rachana"
const repoCount = 50

//console.log(name + repo + "value");

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`); //String interpolation

const heros = new String('batman')
console.log(heros[0]);
console.log(heros.length)
console.log(heros.toUpperCase())
console.log(heros.charAt(2))
console.log(heros.indexOf("t"))
console.log(heros.__proto__);

const newHeros = heros.substring(0,3)
console.log(newHeros);

const anotherHeros = heros.slice(-8 , 4)
console.log(anotherHeros);

const newStringOne = "  Rachana   "

console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://rachana.com%20rachanachauhan"
 console.log(url.replace('%20','-'))
//  console.log(url.replaceAll)
console.log(url.includes('rachana'))
console.log(url.includes('hide'))

const newStringTwo = "rachana-chauhan"

console.log(newStringTwo.split('-'))

