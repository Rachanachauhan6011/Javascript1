



const id = Symbol('123');

const anotherId = Symbol('123');

console.log(id === anotherId);


const bigNumber =  3446789090043356788n


//Primitive datatype  =>   7 type =  number, string , boolean, bigint, null , undefined , Symbol

// Reference(Non- primitive ) =>   array,  object, function


const heros = ["shaktiman" ,"naagraj", "doga"]

let myObj = {
    nmae: "rachana",
    age: 19,
}


const myfunction = function(){
console.log("hello world");

}


console.log(typeof myfunction)



// ------------------------------------------------------------
// memory allocation

// stack(Primitive)    ,     Heap(non-primitive)

let username = "rachana"

let anotherusername = username 

anotherusername = "rachanachauhan";

console.log(username);
console.log(anotherusername);



let userOne = {
    email:"rach@gmail.com",
    upi:"user@google.com"
}


let userTwo = userOne;

userTwo.email = "rachana@gmail.com";

console.log(userOne.email)
console.log(userTwo.email);