// function hello(){
//     console.log("H");
//     console.log("E");
//     console.log("L");
//     console.log("L");
//     console.log("o");
    
// }

// hello()

// function addTwoNumber(number1, number2){
//  console.log( number1 + number2);
 
// }

function addTwoNumber(number1, number2){
//  let result = number1 + number2
//  return result;
return number1 + number2
 
}
const result = addTwoNumber(3,4)

// console.log("Result:",result);

function userLoginMessage(username){
    if(!username){
        console.log("Please enter a username ")
        return
    }
return `${username} just logged in`
}

console.log(userLoginMessage())


function calculateCartPrices(...num1){
  return num1
}

console.log(calculateCartPrices(200, 300, 400))

const user ={
  username: "Rachana",
  prices: 200,
}

function handleObject(anyobject){
  console.log(`User name is ${anyobject.username} and price is ${anyobject.prices}`)
}
// handleObject(user)
handleObject({
    username: "Rach",
    prices: 199,
})


const arr = [100, 200, 300, 400];
 function handleArray(getarr){
    console.log(`second element of array is ${getarr[1]}`)
 }
//  handleArray(arr)
handleArray([100, 200, 300, 400])