const user ={
   username: "Rachana",
   price: 1000,

   welcomeMassage: function(){
   //  console.log(`${this.username}, welcome to website`)
   //  console.log(this)
   }
}
// user.welcomeMassage();
// user.username = "Rachana chauhan"
// user.welcomeMassage();


// const emp = function one(){
//    let username = "Rachana"
//    console.log(this.username);
// }
// one()
 
// const emp = () =>{
//    let username = "Rachana"
//     console.log(this);
// }
// emp()

// const addTwo = (num1,num2) =>{
//    return num1 + num2;
// }
// const addTwo = (num1,num2) => num1 + num2;

// const addTwo = (num1,num2) => (num1 + num2);

const addTwo = (num1,num2) => ({username: "Rachana"});


console.log(addTwo( 4, 5))



