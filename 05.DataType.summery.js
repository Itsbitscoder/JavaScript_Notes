// primitive

// 7 Types : String, Number, Boolearn, nul, undefined, Symbol, BigInt.

const score = 100 // dynamically Type
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const BigNumber = 23255532543424568n



//Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Kunal",
    age:18,
}

const myFunction = function() {
    console.log("Kunal");
}



//************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "JdKunal"

let anothername = myYoutubeName
anothername = "Kunal"

// console.log(anothername);
// console.log(myYoutubeName);

let user1 = {
    email: "google.con",
    upi: "kunal@ybl"
}

let user2 = user1

user2.email ="fb@gmal.com" 

console.log(user1.email);
console.log(user2.email);
//ANS come same bacuse of heap memory