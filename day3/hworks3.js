// excercise 1. varible swap
// example 1: varible swap use  Destructuring assignment
let a = 3;
let b = 4;
[a,b] = [b,a];
console.log(a,b);
//  example 2:varible swap use Temporary variable
let temp;
temp = a;
a=b;
b=temp;
console.log(a,b);

// excercise 2.	Split String into Array
const greeting = 'Hello beauty there';
const  res = greeting.split(" ");
console.log(res);

// excercise 3
const array = [4, 5, 7, -8];
console.log(...array);
//  excercise 4.4.	Write a script to simulate a clothes shop, asking and performing certain tasks from users
let items = [' Jeans ', ' T-Shirt ', ' Socks ']
let itemPanel = prompt('Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?').toUpperCase();
 
    if (userOption === 'c')  {
        const newItem = prompt('Enter the name of the new item');
        alert(`Done`);
        items.push(newItem);
        
    }
    else if (userOption === 'r'){
        console.log(`The current items are :`)
        for(let i = 0; i< items.length; i++) {
            console.log(`${i + 1}. ${items[i]}`)
        }
    }
    else if (userOption === 'u') {
        const indexUpdateItem = Number(prompt('Enter the position you want to update'));
        
        if (updateItem < items.length) {
        const newNameItem = prompt('Enter the new name');
        items[indexUpdateItem - 1] = newNameItem;
        alert(`Done`);
        } else alert(`Index not exist`);
        
    }
    else if (userOption === 'd') {
        const indexDeleteItem = Number(prompt('Enter the position you want to delete'));
      
        if (indexDeleteItem < items.length) {
        items.splice(indexDeleteItem -1, 1);
        alert(`Done`);
        } else alert(`Index not exist`);
        
    }
    else  alert(`This command is not supported`);

//  excercise 5.	Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, calculate the sum of the numbers and show it to users
 const inputNum = prompt('enter a squence of number, separated by commas: ,');
 let inputArr = inputNum.split(",");
 let sum = 0;
 for(let i = 0; i < inputArr.length; i++){
 sum = sum + Number(inputArr[i]);
 }
 alert(`The sum of them is ${sum}`);

// excercise 6.	Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, find the smallest number and log it out to users

const squeNumber = prompt('enter a squence of number, separated by ","');
let toArray = squeNumber.split(",");
let min = toArray[0];
for(let i = 0; i<toArray.length; i++){
if(toArray[i] < min  ){
min = toArray[i];
}
}
alert(` The smallest number is ${min}`);

// excercise 7.	Create an array containing at least 5 numbers, then ask users enter a number, perform a search to look for the number in the array, if the number is found, tell user that with the index of it in the array, if not, also tell them so

const arr = [3, 4, 6, -9, 10, -88, 2 ];
let  addNum = Number(prompt('enter a number'));
let found ;
for(let i = 0; i < arr.length; i++){
if(addNum=== arr[i]){
found= true;
alert(`${addNum} is found in my array at index ${i} `);
break;
}
}
if(!found){
alert(`${addNum} i not found in my array`);
}

// excercise 8.	You are a shepherd who owns a flock of sheep
//  8.1
const sizeOfFlock = [5,7,300,90,24,50,75];
console.log('hello, my name is Q and here is my sheep sizes:');
console.log(...sizeOfFlock);
// 8.2
const biggestSheep = Math.max(...sizeOfFlock);
console.log(`Now my biggest sheep has size ${biggestSheep}, let's shave it.`)
// 8.3

sizeOfFlock[sizeOfFlock.indexOf(biggestSheep)] = 8;
console.log(`After shearing, here is my flock`);
console.log(...sizeOfFlock);

const colors = ["red", "gray", "blue", "purple", "cyan"];

for (let i = 0; i < colors.length; i++) {
  color(colors[i]);
  for (let j = 1; j <= 4; j++) {
    fd(50 * i);
    rt(90);
  }
}