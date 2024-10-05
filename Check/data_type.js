// #primitive

// 7 types : String ,number , boolean , null , undefined , Symbol-to make value unique , bigInt
//Reference type(Non- primitive)

const score = 100
const scoreValue = 100.3
const isLoggedIn = false 
const outsideTemp = null

let userEmail = undefined
const id = Symbol('1234')
const anotherId =Symbol('1234')
console.log(id === anotherId);
console.log(id == anotherId);


const bigNumber = 31234567890000987654321n



//Array , Objects, Funtions

const heros = ["shaktiman","naagraj", "doga"];
let myObj = {
    name :"vaibhav",
    age : "22"
}

const myFunction = function() {
    console.log("Hello world");
    
}

console.log(typeof myFunction);


//++++++++++++++++++++++++++++++++++++++++++++++++++++


//stack(Primitive) , Heap(Non-Primitive)

let myYoutubeName ="vaibhav ambilkar"
let anotherName = myYoutubeName
anotherName = "chaiAurCode"
console.log(anotherName);// value will be change

console.log(myYoutubeName);

let User = {
    email:"ambilkarvaibhav@gmail.com",
    upi:"vam@ybl"
}


let User2 = User
User2.email = "hitesh@gmail.com"
console.log(User2.email);
console.log(User.email);//both will be change

