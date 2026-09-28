

// primitive (call by value - matlb copy data jayega origional value kbhi nhi jayega)
//7 types : String, Number, Boolean, null, undefined, Symbol
const id = Symbol('123') //it gives uniqueness to every id
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 789456123321654987n




// Non-primitive(Refrance)
// Arrays, Objects, Functions

// Arrays
const heros = ["Ashu", "Ankit", "Abhinav", "Afaraj"]
// Object 
let myObj = {
    name: "Ashu",
        age: 21
}
//functions
let = function(){
    console.log("Hello world");
    
}

//javascript master = objects mastery + browser events mastry