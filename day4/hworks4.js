// bubble sort
let list = [1, 4, 2, 67, 33, 23, 36, 9];
let len = list.length;
let swapped;
for (let i = 0; i < len; i++) {
  swapped = false;
  for (let j = 0; j < len - 1; j++) {
    if (list[j] > list[j + 1]) {
      temp = list[j];
      list[j] = list[j + 1];
      list[j + 1] = temp;
      swapped = true;
    }
  }
}

console.log(list);
// excercise  1.	for and Object
const product = {
  name: "Xiaomi rice cooker",
  price: 1700,
  brand: "Xiaomi",
  color: "White",
};
for (let x in product) {
  console.log(x);
}
for (let x in product) {
  console.log(`${x}: ${product[x]}`);
}

// excercise 2.	Learn about destructuring object in the following tutorials:
const task = {
  subject: "Implement login feature",
  createdBy: "Hoang Ngoc Duc",
  assignTo: "Nguyen Phuong Nam",
  dueDate: "2019-10-08T18:00:24+0000",
  expectedHours: 0.5,
};
let { subject, dueDate, assignTo } = task;
console.log(task);

// excercise 4.	Initialize an object to represent a dictionary, with properties as keyword and values as explanation, the initial values are from this table
const devDictionary = {
  debug:
    "The process of figuring out why your program has a certain error and how to fix it",
  done:
    "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
  defect: "The formal word for ‘error’",
  pm:
    "The short version  of Project Manager, the person in charge of the final result of a project",
  ui: "UI means User Interface",
  UX:
    "mean User Experience, are the process to define how your products looks and feels",
};
alert("Hi there, this is dev dictionary");
const keyword = prompt(" enter a keyword");
if (keyword in devDictionary) {
  alert(`${keyword} \n${devDictionary[keyword]}`);
} else {
  let change = prompt(`We could not find: ${keyword}, leave your explanation`);
  while (!change) {
    change = prompt(`We could not find: ${keyword}, leave your explanation`);
  }
  devDictionary[keyword] = change;
  alert(`Done`);
  alert(`${keyword}\n${devDictionary[keyword]}`);
}
// excercise 5.	Initialize a variable named products, containing an array of products, each product has a name, price, brand, category, and color
let products = [
  {
    name: "Xiaomi portable charger 20000mah",
    brand: "Xiaomi",
    price: 428,
    color: "White",
    category: "Charger",
  },
  {
    name: "VSmart Active 1",
    brand: "VSmart",
    price: 5487,
    color: "black",
    category: "Phone",
  },
  {
    name: "IPhone X",
    brand: "Apple",
    price: 21490,
    color: "Gray",
    category: "Phone",
  },
  {
    name: "Samsung Galaxy A9",
    brand: "Samsung",
    price: 8490,
    color: "Blue",
    category: "Phone",
  },
];
// 5.1 .Print/log name and price of all the products out
for (let i in products) {
  let { name, price } = products[i];
  console.log(`name: ${name}`);
  console.log(`price: ${price}`);
}
// 5.2.	Write a script printing/logging out the products with their number, then print/logging out the details of a product with its position entered by users
for (let i in products) {
  let { name, price } = products[i];
  console.log(`#${Number(i) + 1} name: ${name}`);
  console.log(`price: ${price}`);
}
let leng = products.length;
while (true) {
  const productPos = Number(prompt("Enter product position"));
  if (productPos > 0 && productPos <= leng) {
    prod = products[productPos - 1];
    for (let j in prod) {
      console.log(`${j}: ${prod[j]}`);
    }
    break;
  } else alert(" can't find ");
}
// 5.3.	Write a script printing/logging out the products based on category input by users
const catSearch = prompt("Enter your category?");
for (let i = 0; i < leng; i++) {
  if (products[i].category == catSearch) {
    console.log(`Name: ${products[i].name}`);
    console.log(`Price: ${products[i].price}`);
  }
}
// 5.4. Add providers to each product

products[0].provider = ["phukienzero", "dientuccc"];
products[1].provider = ["tgdd", "ddghn", "vhstore"];
products[2].provider = ["tgdd"];
products[3].provider = ["tgdd"];
for (let i = 0; i < leng; i++) {
  console.log(`#${i + 1}. ${products[i].name}`);
  console.log(`    Price: ${products[i].price}`);
  console.log(`    Providers: ${products[i].provider}`);
}
// 5.5.	(Optional) Search the products based on the wanted provider entered by users, if you need more directions, find the hints at the end of this homework

const provWant = prompt("Enter provider").toLowerCase();

for (let i = 0; i < leng; i++) {
  if (products[i].provider.indexOf(provWant) > 0) {
    let searchItem = products[i];
    for (let property in searchItem) {
      console.log(`${property}: ${searchItem[property]}`);
    }
  }
}
//6.	Write a script to store and process the learning tasks to become a front-end developer
let frontDev = [
  { task: "HTML", complete: false },
  { task: "CSS", complete: false },
  { task: "Basics of Javascript", complete: false },
  { task: "Node Package Manager(npm)", complete: false },
  { task: "Git", complete: false },
];
console.log(
  `Hi there, this is your learning  tasks to front-end develop career: `
);
for (let i in frontDev) {
  let { task, complete } = frontDev[i];
  console.log(`${Number(i) + 1} task: ${task}`);
  console.log(`complete: ${complete}`);
}
// 6.2.3.4.5

// 7.	Given the object
// Move the turtle to the provided position, use penup() and pendown() to NOT leave any traces
const pos = {
  x: 200,
  y: 50,
};
penup();
rt(90);
fd(pos.x);
lt(90);
fd(pos.y);

// 8.	Use JS Turtle, to draw a square at position (x, y) with size width

const square = {
  x: 100,
  y: 50,
  width: 20,
};
penup();
rt(90);
fd(square.x);
lt(90);
fd(square.y);
pendown();
for (let i = 0; i < 4; i++) {
  fd(square.width);
  rt(90);
}
//9.	//Use JS Turtle, to draw a rectangle at position (x, y) with size width and height

const rect = {
  x: 100,
  y: 50,
  width: 20,
  height: 40,
};
penup();
rt(90);
fd(rect.x);
lt(90);
fd(rect.y);
pendown();
for (let i = 0; i < 2; i++) {
  fd(rect.height);
  rt(90);
  fd(rect.width);
  rt(90);
}
