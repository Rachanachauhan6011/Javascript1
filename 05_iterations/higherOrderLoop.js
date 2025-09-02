// for of
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num)
}
const greetings = "hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United state of America")
map.set('Fr', "France")
map.set('UK', "United Kingdom")
//console.log(map)
for (const [key, value] of map) {
    // console.log(key, ':-',value)
}

// const myObject = {
//     'game1': "NFS",
//     'game2': "Spinderman"
// }
// for (const [key , value] of myObject) {
//      console.log(key, ':-',value)
// }


// ++++++++++++++for in loop +++++++++++++++++++++++

const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swipt by apple",
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "rb", "java", "cpp", "py"];
for (const key in programming) {
    //console.log(programming[key])
}

// +++++++++++++++++++++++for each loop ++++++++++++++++++++++
const coding = ["js", "java", "ruby", "python", "cpp"]

// coding.forEach( function (items){
// console.log(items);

// })

// coding.forEach( (items)=>{
//     console.log(items);
// })

function printMe(items) {
    console.log(items)
}
// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr)
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName)
})