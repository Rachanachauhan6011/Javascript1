// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraj","batman", "spiderman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);


//array method

// myArr.push(6);
// myArr.push(7);
// myArr.pop();


// myArr.unshift(9);
//  myArr.shift();
//  console.log(myArr.includes(9));
//  console.log(myArr.indexOf(3));

// console.log(myArr);

// const newArr = myArr.join()
// console.log(typeof(newArr));

// console.log("A" ,myArr);
// const myn1 = console.log(myArr.slice(1,3));

// console.log("B",myArr);

// const myn2 = console.log(myArr.splice(1,3));

// console.log(myArr);


const marble_heros = ["Thor" , "Iron man", "spider man"]
 
const dc_heros = ["Super man" ,"flash","batman"]

// marble_heros.push(dc_heros);
// console.log(marble_heros);
// console.log(marble_heros[3][2]);

const all_heros = marble_heros.concat(dc_heros);

console.log(all_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const useable_another_array = another_array.flat(Infinity);

console.log(useable_another_array);


// console.log(Array.isArray("rachana"));
// console.log(Array.from("rachana"));

// console.log(Array.from({name:"rachana"}));  //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1 , score2 , score3));







