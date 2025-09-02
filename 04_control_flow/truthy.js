// const balance = 1000
// if (balance > 500) console.log("test") , console.log("test2")

const emptObj = {}

if(Object.keys(emptObj).length === 0){
    console.log("Object is empty");
}

// Nullish coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
//val1 = null ?? 10;
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1)


// Ternary operator

//condition ? true : false
const iceTeaPrices = 100
iceTeaPrices >= 80 ? console.log("more than 80") : console.log("less than 80")