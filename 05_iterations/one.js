// for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value: ${i}`)
    for (let j = 1; j <= 10; j++) {
       console.log(` ${i} * ${j} = ${i * j}`);
        
    }
    
}
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
}


for (let index = 1; index <= 20; index++) {
if (index == 5){
    console.log("5 is detected");
   continue;
}
    console.log(`Value of i is ${index}`);
    
}