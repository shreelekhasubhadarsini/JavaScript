//primitive
//7 types: String, Number, Boolean , null , undefined, Symbol,BigInt

const score = 100
const scoreValue =100.3

//console.log(typeof score);
//console.log(typeof scoreValue);

const isLoggedIn = false
const outsideTemp= null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 345677643245456565759n;//BigInt


// Reference (Non primiive)
// Array , Objects , Functions

const heros = ["shaktiman", "ninjahatori" , "doga"];
let myObj = {
    name: "Shreelekha",
    age: 26,
}

const myFunction = function(){
    console.log("Hello World");
    
}

/*console.log(typeof bigNumber);
console.log(typeof anotherId);
console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof isLoggedIn);
console.log(typeof userEmail);*/

//Stack (primitive ) , Heap(Non-Primitive)
let myYoutubename = "shreelekhadotcom"

let anothername = myYoutubename

anothername = "chaiaurcode"

//console.log(myYoutubename);
//console.log(anothername);


let userOne ={
   email : "user@google.com",
   upi: "user@ybl"

}

let userTwo = userOne

console.log(userTwo.email);
 userTwo.email= "shree@google.com"
 console.log(userOne.email);
 console.log(userTwo.email);