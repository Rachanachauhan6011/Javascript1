// Dates

let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());

let mycreateDate = new Date(2025 , 7 ,22)
// console.log(mycreateDate.toString());

let mycreateDate2 = new Date(2025 , 7 , 22 ,8 , 20)
// console.log(mycreateDate2.toLocaleString());

let myTimeStamp =  Date.now();
// console.log(myTimeStamp);

// console.log(mycreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday : "long",
})
console.log(newDate.toString())




