// const tinderUser = new Object()  // singleton object

const tinderUser = {}
tinderUser.id = "123abcd",
tinderUser.name = "Rachana",
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "rachana@gmail.com",
    fullName: {
           userFullName: {
            firstName: "Rachana",
            lastName: "Chauhan"
           }
    }
 }
// console.log(regularUser.fullName.userFullName.firstName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const newObj = Object.assign({}, obj1, obj2, obj3)
const newObj = {...obj1 , ...obj2 , ...obj3}

// console.log(newObj)

// console.log(tinderUser);
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const users = [
    {
        id:1,
        email:"ra@gmail.com",
    },
     {
        id:1,
        email:"ra@gmail.com",
    },
     {
        id:1,
        email:"ra@gmail.com",
    },
     {
        id:1,
        email:"ra@gmail.com",
    },

]

// console.log(users[1].email)

const course = {
    coursename: "Js in hindi",
    prices: 999,
    courseInstructor: "Rachana"
}

// course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor);

// const navbar = ({company})=>{ // using in react

// }

// navbar(company = "Rachana")


// {
//     "name": "Rachana",
//     "coursenmae": "Js in hindi",
//     "prices": "free",
// }


