// ways to create a string
// " " ' ' ` `
let a = '20';
console.log(typeof(a));

// undefined, null, not defined------------------------------------------------------------------------------------
// undefined 
// we get undefined when we try to access a variable without intializing it 
let b;
console.log(b); //undefined

// undefined
// var
console.log(cde);
var cde = 0;


// let and const => because of temporal dead zone
// ReferenceError: Cannot access 'def' before initialization 
// const
// console.log(def);
// const def = 0;

// ReferenceError: Cannot access 'abc' before initialization
// let
// console.log(abc);
// let abc = 0;


// not defined
// when there is no such varibles is present 
// console.log(c);

 
// falsy or boolean operations
var n;
console.log(n);//undefined

let u;
console.log(u);//undefined
console.log(typeof(u));//undefined

// null
// null expresses a lack of identification, indicating that a variable points to no object.

// c does not exist. It is not defined and has never been initialized:
// console.log(c); //refrence error Cannot access 'c' before initialization

// c is known to exist now but it has no type or value:
const c = null;
console.log(c); // null

// ---------------------------------------------------------------------------------------------


// data types -----------------------------------------------------------------------------------
// primitive and non-primitive

// primitive----
// number
    console.log(typeof(1)); //number
    console.log(typeof(1.1));//number
    console.log(typeof(-0.9));//number
    console.log(typeof(10.2));//number

// String
    console.log(typeof("a"));//string
    console.log(typeof('a'));//string
    console.log(typeof(`a`));//string
    console.log(typeof('&'));//string

// boolean
    console.log(typeof(false)); //boolean
    console.log(typeof(true)); //boolean


// console.log(d);// not defined

// undefined
let d ;
console.log(d); //undefined
console.log(typeof(d)); //undefined

// truthy & falsy values
if(null){
    // 0 
    console.log("inside if 0");//falsy value

    // 1
    console.log("inside if 1");// truthy value

    // -1
    console.log("inside if -ve value"); //truthy value

    // 'abc'
    console.log('except abc all other values will be falsy '); // truthy

    // undefined
    console.log("undefined"); //falsy

    console.log("null"); //falsy


}

// --------------------------------------------------------------------------------

// operators----
// airthemetic logical non-airth

console.log(2**3); //8 => 2^3

console.log("2" == 2); //true
//  only look for values, internal typecasting

console.log("2" === 2); //false
// look for both, values as well as datatypes

