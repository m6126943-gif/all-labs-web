console.log("this is written using js.js file");

let n = 13;
console.log(n);
let m = 7;
console.log(m);
m = String(m);
console.log(typeof m);

let numFromStr = "13.4pt";
numFromStr = parseFloat(numFromStr);
console.log(numFromStr);

console.log("4" + 2);
console.log("4" - 2);
console.log("4" * 2);
console.log("4" / 2);
console.log("4" % 2);
console.log("4" ** 2);
console.log(4 + 2 + "px");
console.log("px" + 4 + 2);
console.log("__________________");

console.log("5" > 2);
console.log("5" < 2);
console.log("5" >= 5);
console.log("5" <= 2);
console.log("5" == 5);
console.log("5" === 5);
console.log("5" != 5);
console.log("5" !== 5);
console.log("__________________");

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

if (5 < 2) {
    console.log("5 is less than 2");
} else {
    console.log("5 is not less than 2");
}
console.log("__________________");

let temp = 0;
if (temp >= 100) {
    console.log("The water is boiling");
} else if (temp < 100 && temp > 60) {
    console.log("The water is hot");
} else if (temp <= 20 && temp >= 10) {
    console.log("The water is cold");
} else {
    console.log("The water is frozen");
}

let result;
if (temp >= 100) {
    result = "The water is boiling";
} else if (temp < 100 && temp > 60) {
    result = "The water is hot";
} else if (temp <= 20 && temp >= 10) {
    result = "The water is cold";
} else {
    result = "The water is frozen";
}
console.log(result);

result = (temp >= 100) ? "The water is boiling" : "not boiling";
console.log(result);

let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;  
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Unknown day";
}
console.log("Today is " + day);
console.log("__________________");

for (let i = 1; i <= 5; i++) {
    console.log("Iteration " + i);
}
console.log("__________________");

let w = 1;
while (w < 4) {
    console.log("While Iteration " + w);
    w++;
}
console.log("__________________");

let k = 1;
do {
    console.log("Do-while Iteration " + k);
    k++;
} while (k < 4);
console.log("__________________");
console.log("  ");
console.log("  ");

function hello() {
    console.log("hello"); 
}
hello();

function add(n1 = 0, n2 = 0) {
    const result = n1 + n2;
    return result; 
}
console.log(add(1, 5)); 

const y = function() {
    console.log("hi");
};
y();

function callAnotherfa(Fn) {
    console.log("this is the ca..");
    Fn();
}

callAnotherfa(function() {
    console.log("this is the an..");
    let n = 2;
});

callAnotherfa(y);

let t = 0;
do {
    console.log("Second do-while Iteration " + t);
    t++;
} while (t < 3);
console.log(t);

let arr = [100, 200, 300, 400, 500, "hi", "hello"];
console.log(arr);
console.log(arr[6]);
arr[0] = "hifff";
console.log(arr[0]);
console.log(arr.length);

arr.pop();
console.log(arr);
console.log(arr.length);

arr.push(90, 40);
console.log(arr);
console.log(arr.length);

arr.splice(4, 1, 55);
console.log(arr);
console.log(arr.length);

arr.splice(3, 0, 450);
console.log(arr);
console.log(arr.length);

arr.shift();
console.log(arr);
console.log(arr.length);

arr.unshift(9);
console.log(arr);
console.log(arr.length);

arr.unshift(9, 10, 20, 40, 20, 50, 50, 64, 30, 30);
console.log(arr);
console.log(arr.length);
console.log("---------------");

console.log(arr.indexOf(40));
console.log(arr.indexOf(15421));
console.log(arr.indexOf(20));
console.log(arr.lastIndexOf(20));

console.log("---------------");

const miniarr = arr.slice(2, 5);
console.log(miniarr);

const arrNum3 = [1, 2, 3];
const arrNum4 = [4, 5, 6];
const newarr = arrNum3.concat(arrNum4);
console.log(newarr);
console.log("---------------");

let arrNames = ["welcom", "ali", "and", "ahmad"];
let joinedNames = arrNames.join("+ ");
console.log(joinedNames);

let strarr = ["apple", "banana", "orange"];
console.log(strarr.join(", "));

let arr5 = [10, 2, 5];
arr5.sort((a, b) => b - a);
console.log(arr5);

for (let i = 0; i < strarr.length; i++) {
    console.log(strarr[i]);
}
strarr.forEach(function(element) {
    console.log(element);
});
for (const element of strarr) {
    console.log(element);
}

const obj1 = document.getElementById("first");
console.log(obj1);

const obj2 = document.getElementsByClassName("container1")[0];
console.log(obj2);

const obj3 = document.getElementsByTagName("h2")[2];
console.log(obj3);

const obj4 = document.querySelector("#first");
console.log(obj4);

if (obj1) {
    obj1.innerHTML = "first <a href='#'>link</a>";
} else {
    console.warn('Element with id "first" not found');
}

const obj5 = document.getElementsByClassName("input")[0];
if (obj5) {
    obj5.setAttribute("type", "password");
    console.log(obj5);
    obj5.setAttribute("placeholder", "enter your password");
} else {
    console.warn('Element with class "input" not found');
}

if (obj2) {
    obj2.style.background = "yellow";
} else {
    console.warn('Element with class "container1" not found');
}

const obj7 = document.getElementsByTagName("button")[0];
if (obj7) {
    obj7.addEventListener("click", function() {
        alert("you clicked me");
    });
} else {
    console.warn('Button element not found');
}

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    welcome: function() {
        console.log("Welcome " + this.firstName + " " + this.lastName);
    }   
};

person.welcome();
console.log(person.firstName);
console.log(person.age);
person.age = 31;
console.log(person.age);
person.major = "Computer Science";
console.log(person);

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

const person2 = {};
Object.assign(person2, person, { major: "Mathematics" });
console.log(person2);

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.welcome = function() {
        console.log("Welcome " + this.firstName + " " + this.lastName);
    };  
}

const person3 = new Person("Alice", "Smith", 28);
person3.welcome();

let P1 = new Person("Bob", "Johnson", 35);
P1.welcome();
let P2 = new Person("Charlie", "Brown", 22);
P2.welcome();

console.log("__________________");
console.log("  ");
console.log("  ");

function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {
    console.log(this.name + " makes a noise.");
};

function Dog(name) {
    Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log(this.name + " barks: Woof! Woof!");
};

const myDog = new Dog("Rex");
myDog.speak();
myDog.bark();

class AnimalClass {
    constructor(name) {
        this.name = name;
    }
    
    sound() {
        console.log(this.name + " makes a noise.");
    }
}

class Dog1 extends AnimalClass {
    constructor(name, type) {
        super(name);
        this.type = type;
    }
    sound() {
        console.log(this.name + " barks: Woof! Woof!");
    }
    getInfo() {
        console.log(`${this.name} is a ${this.type}`);
    }
}

const dog1 = new Dog1("Buddy", "Labrador");
dog1.sound();
dog1.getInfo();
console.log("__________________");
console.log("  ");
console.log("  ");

const str = JSON.stringify(person);
console.log(str);

const parsedObj = JSON.parse(str);
console.log(parsedObj);
