// //let, const
// let score;
// score = 10;
// console.log(score);

// //Strings, Numbers, Boolean, null, undefined, Symbol
// const name = "John";
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof y);

// //Concatenation
// console.log("My name is name and I am age");
// console.log("My name is " + name + " and I am " + age);
// //Template String
// console.log(`My name is ${name} and I am ${age}`);
// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello);

// const s = "Hello World!";
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.substring(0, 8).toUpperCase());
// console.log(s.split(""));

// const t = "technologyy, computers, laptop";
// console.log(t.split(" "));

// //Arrays - variables that hold multiple values

// const numbers = new Array(1, 2, 3, 4, 5);
// console.log(numbers);

// const fruits = ["apples", "bananas", "oranges", 10, true];
// fruits[3] = "avocado";
// fruits.push("mangos");
// fruits.unshift("strawberries");
// fruits.pop();
// console.log(Array.isArray());
// console.log(fruits.indexOf("oranges"));
// console.log(fruits);

// //Object literals

// const person = {
//   firstName: "Maria",
//   lastName: "Santos",
//   age: 25,
//   hobbies: ["jogging", "playing Ukulele", "reading"],
//   address: {
//     street: "via melorio",
//     city: "Naples",
//     state: "IT",
//   },
// };
// console.log(person.firstName, person.address);
// console.log(person.hobbies[1]);

// const {
//   firstName,
//   lastName,
//   address: { city },
// } = person;
// console.log(firstName);
// console.log(city);

// person.email = "maria@mail.com";
// console.log(person);

// const todos = [
//   {
//     id: 1,
//     text: "learning JS",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "learning React",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: "learning MongoB",
//     isCompleted: false,
//   },
// ];
// console.log(todos);
// console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// //For Loop
// for (let i = 0; i <= 10; i++) {
//   console.log(`For Loop Number:${i}`);
// }

// //While Loop
// let i = 0;
// while (i < 10) {
//   console.log(`While Loop Number:${i}`);
//   i++;
// }

// //Loop through arrays
// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }

// for (let todo of todos) {
//   console.log(todo.id);
// }

// //forEach, map, filter are high order array methods

// todos.forEach(function (todo) {
//   console.log(todo.text);
// });

// //map returns an array
// const todoText = todos.map(function (todo) {
//   return todo.text;
// });
// console.log(todoText);

// const todoCompleted = todos
//   .filter(function (todo) {
//     return todo.isCompleted === true;
//   })
//   .map(function (todo) {
//     return todo.text;
//   });
// console.log(todoCompleted);

// const b = 5;
// const c = 11;

// if (b > 4 && c > 10) {
//   console.log("b is more than 5 or c is less than 10");
// }

// const d = 8;

// const color = d > 10 ? "red" : "blue";
// // const color = "green";
// console.log(color);

// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "blue":
//     console.log("color is blue");
//   default:
//     console.log("color is NOT red or blue");
//     break;
// }

// function addNums(num1 = 1, num2 = 1) {
//   return num1 + num2;
// }

// console.log(addNums(5, 5));

// //Arrow function
// const addNum = (num1) => num1 + 5;
// console.log(addNum(5));

// //Object oriented programming. Constructor Function
// // function Person(firstName, lastName, dob) {
// //   this.firstName = firstName;
// //   this.lastName = lastName;
// //   this.dob = new Date(dob);
// // }

// // Person.prototype.getBirthYear = function () {
// //   return this.dob.getFullYear();
// // };
// // Person.prototype.getFullName = function () {
// //   return `${this.firstName} ${this.lastName}`;
// // };

// //class
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }
//   getBirthYear() {
//     return this.dob.getFullYear();
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// //Istantiate object
// const person1 = new Person("Marc", "Maxim", "2017-12-26");
// const person2 = new Person("Joy", "Smith", "26-12-1965");

// console.log(person1);
// console.log(person2.getFullName());
// // console.log(person1.getFullName())

// //DOM
//Single element selectors
// console.log(document.getElementById("my-form"));
// console.log(document.querySelector("h1"));

// //Multiple element selectors
// console.log(document.querySelectorAll(".item"));
// console.log(document.getElementsByTagName("li"));

// const items = document.querySelectorAll(".item");
// items.forEach((item) => console.log(item));

// const ul = document.querySelector(".items");
// // ul.remove();
// // ul.lastElementChild.remove();
// // ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "Brad";
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

// const btn = document.querySelector(".btn");
// btn.style.background = "red";

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<h1>Hello</h1>";
// });

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value}:${emailInput.value}`)
    );
    userList.appendChild(li);

    //Clear Fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
