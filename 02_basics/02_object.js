//singleton
//Object.create

// object literals

const mySym = Symbol("key1");
const JsUser = {
    name: "Rachana",
    [mySym]: "mykey1",
    "full name ": "Rachana Chauhan",
    age: 19,
    location: "jaipur",
    email: "ra@gmail.com",
    isLoggedIn: false,
    lastLoggedDay: ["Monday","Tuesday"]
}

// console.log(JsUser.email);

// console.log(JsUser["email"]);   // this is the way of access object value
// console.log(JsUser["full name "]);

// console.log(JsUser[mySym]);

JsUser.email = "rachana@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "rachana@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello JS User ${this.name}`);
}

console.log(JsUser.greeting());
