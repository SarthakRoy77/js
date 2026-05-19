//JavaScript objects = A collection of related properties and/or methods.
//                      Can represent real-world objects e.g. (people, products, places)
//                      object = {key:value,
//                                function()}

const person1 = {
    firstName: "Sarthak",
    lastName: "Roy",
    age: 40,
    isEmployed: false,
    sayHello: function(){
        console.log('Hello! I am Sarthak Roy.');
    }
}

console.log(person1.age);
person1.sayHello();


//this = reference to object where THIS is used
//      (the object depends on the immediate context)
//      person.name = this.name

const person2 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function() {
        console.log(`HI! I am ${this.name}`);//THIS takes the object in immediate context ,
        // if THIS/objectName is not it would create a reference error
    }
};

person2.sayHello();

//THIS in GEC would return the window object, do not use it with arrow functions!!!

//constructor = a special method for defining methods and properties of objects

function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

const Car1 = new Car("Ford", "Mustang", 2024, "red");
console.log(Car1.make);
console.log(Car1.model);
console.log(Car1.year);
console.log(Car1.color);

// class = (E26 feature) provides a more structural and cleaner way to
//           work with objects compared to traditional constructor function
//          and also helps with new concepts that are to be learned.
//          e.x. static keyword, encapsulation, inheritance

class Product{
    constructor(name1, price){
        this.name1 = name1;
        this.price = price;}

        displayProduct(){
            console.log(`Product Name: ${this.name1}`);
            console.log(`Product Price: $${this.price}`);
        }
}

const Product1 = new Product("Shirt", 19.99)
Product1.displayProduct();

// static keyword = defines properties or methods that belong to a class itself rather than
//                  the objects created by the class(class owns anything static, not the objects)

class CircleUtil{
    static PI = 3.14159;

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return 2 * Math.pow(radius, 2);
    }
}

console.log(CircleUtil.PI);
console.log(CircleUtil.getCircumference(10));
console.log(CircleUtil.getArea(10));

// inheritance = allows a new class to inherit properties and method from
//               an existing class (parent -> child).Helps with code reusability
class Animal{
    alive = true;
    name;
    eat(){
        console.log(`This ${this.name} is eating`);
    };
}


class Rabbit extends Animal{
    name = "Rabbit";
}
const rabbit = new Rabbit(); //

rabbit.eat();
console.log(rabbit.alive);

//super keyword = is used in classes to call the constructor and access
//                  the properties and methods of a parent class (superclass)

class domesticAnimal {
    name;

    constructor(name) {
        this.name = name;
    }

    describe() {
        console.log(`My name is ${this.name}`);
    }
}

class domesticDog extends domesticAnimal {
    speed;
    age;

    constructor(name, speed, age) {
        super(name);
        this.speed = speed;
        this.age = age;
    }
}

class domesticFish extends domesticAnimal {
    swimSpeed;
    age;

    constructor(name, swimSpeed, age) {
        super(name);
        this.swimSpeed = swimSpeed;
        this.age = age;
    }
}

class domesticHawk extends domesticAnimal {
    flySpeed;
    age;

    constructor(name, flySpeed, age) {
        super(name);
        this.flySpeed = flySpeed;
        this.age = age;
    }
}

const Tommy = new domesticDog("Tommy", 16, 5);
Tommy.describe();

const Rohu = new domesticFish("Rohu", 36, 1);
Rohu.describe();

const GodEagle = new domesticHawk("GodEagle", 30, 7);
GodEagle.describe();

//getters and setters = These are used in object validation

//Setters
class Rectangle{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        } else {
            console.error("Width must be positive");
        }
    }
    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        }
        else{
            console.error("Height must be positive");
        }

    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

}

const rectangleObject = new Rectangle(-23, -10);
console.log(rectangleObject.height);
console.log(rectangleObject.width);

//arrays of objects

const fruits = [   {name: "apple" , color : "red", calories: 95 },
                                {name: "banana" , color : "yellow", calories: 105},
                                {name: "pineapple" , color : "brown", calories: 47},
                                {name: "orange" , color : "orange", calories: 82},
                                {name: "guava" , color : "green", calories: 54}];

console.log(fruits[0].name);
// We can use the array methods on array of objects


// Date objects = are Objects that contain values that represent times and dates.
//                  These date objects can be changed and formatted .

let date = new Date();
console.log(date);

//Date arguments = (year, month, day, hour, minute, second, ms ) , note that the month is an array so Jan is 0 and the time passed
//                  as an argument should be in military system

//Example
let customDate = new Date(2026, 6, 16, 23, 7,9, 8);
console.log(customDate);

// We can also retrieve values from date objects an example is :

month = date.getMonth();
hours = date.getHours(); // and so on remember there is no pattern in function name and year is 'FullYear'



