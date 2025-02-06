//Encapsulation means that methods and variables are within the same class
//Making maintenance easier 

//Abstraction refers to the complexity of methods and properties being hidden within the class,
//which helps to make usage/interfacing easier and reduces impact of internal change as long as output is same

//Inheritance helps eliminate redundant code by letting derivative classes inherit the properties and methods of a parent class which they share

//Polymorphism is related to inheritance, subclasses or children redefine/override the definition by the parent

/*
const circle = {//Object literal syntax, only creates one instance
    radius:1,
    location:{
        x:1,
        y:1
    },
    draw: function() {
        console.log('draw')
    }
};//Object literal syntax, if an object has 1 or more method it has behavior
*/

//Factory Function
function createCircle(radius){
    return {
        radius,//same as radius:radius

        draw: function() {
            console.log('draw')
        }
}
}
const circle = createCircle(1);
circle.draw();

//Constructor Function
function Circle(radius){
    this.radius = radius//this references the object executing the code
    this.draw = function(){
        console.log('draw');
    }
}
const circle2 = new Circle(1);//by default this is the global object of the window,