console.log('Hello World');
let name = 'Joe';
console.log(name); //same traditional variable naming convention

let firstName = 'Rodolfo';
let laastName = 'Gonzalez'
console.log(firstName,lastName);

const interestRate = 0.3;//Constant types in js 
//console.log(interestRate);

//Primitive types
let aname = 'Yeah'; //string literal
let age = 19;//number literal
let isEmployed = false; //boolean literal 
let lastName = undefined; //undefined and null are types and values
let selectedColor = null;

//Javascript has dynamic typing, so during runtime, it can change based on assignment 
//number encompasses integer,decimal all numbers

//REFERENCE TYPES: Objects, Arrays, Functions 
//OBJECTS
let person = {
    name: 'Rudy',age:19
};//object literal, assigning the key value pairs concretely 
//console.log(person)//will print it out with the same notation as declared

//Accessing individual values

//Dot Operator
//console.log(person.name);
person.name = 'John';

//Bracket Notation
let selection = 'name';//If user determines property to be selected at runtime bracket useful
person['name'] = 'Mary';//If name of target property is unknown at runtime
//console.log(person.name);


//ARRAYS
let selectedColors = ['red','blue'];//array is an object
selectedColors[2]='green';//length and object types in arrays in js are both dynamic
console.log(selectedColors[0].length);//Since arrays are predefined objects, they have intrinsic methods

//FUNCTIONS
function greet(name,lastName){
    console.log('Hello '+name+' '+lastName);
}
greet('John','Pork');

function square(number){
    return number*number;
}
let num = square(2);
console.log(square(2));

