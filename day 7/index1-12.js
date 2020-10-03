// excercise 1;
// const container = document.getElementById("list");
// for (let i = 0; i < 3; i++) {
//   container.insertAdjacentHTML("beforebegin", `<li>${i}</li>`);
//   container.insertAdjacentHTML("afterbegin", `<li>${i}</li>`);
//   container.insertAdjacentHTML("beforeend", `<li>${i}</li>`);
//   container.insertAdjacentHTML("afterend", `<li>${i}</li>`);
// }
//  1-d; 2-a; 3-c;4-b
// excercise 2: set time out
// function sayHi() {
//   console.log("hello world");
// }

// setInterval(sayHi, 3000);
// excercise 3

// ex4
const x = document.getElementsByTagName("LI");
for (let i = 0; i < x.length; i++) {
  console.log(x[i].textContent);
}

console.log(x[1].textContent);

// ex5
let y = document.getElementsByClassName("singer");
for (let i = 0; i < y.length; i++) {
  console.log(y[i].innerHTML);
}
// ex 6
let re = document.getElementsByClassName("singer");
re[1].remove;
console.log(re);
// ex8
function wish() {
  alert("My name is Q. and I wish I could be a web developer.");
}
wish();
//ex9
function wish1(name, wish) {
  alert(` My name is ${name} .\n I wish ${wish}. `);
}
wish1("Q", "I were a policeman ");

//ex10
function myWish(name, wish) {
  if (wish === undefined) {
    alert(`My name is ${name}`);
  } else {
    alert(`My name is ${name} .\n I wish ${wish}.`);
  }
}
myWish("John");

// 11.2
console.log("bai 11.2");
const read = document.getElementById("upper_btn");
console.log(read);
// 11.3
console.log("bai 11.3");
const h = document.getElementById("upper_btn");
h.addEventListener("click", () => {
  console.log("Let's click");
});
// 11.4
console.log("bai 11.4");
const e = document.getElementById("name_input");
console.log(e);
// 11.5
console.log("bai 11.5 & 11.6");
const upBtn = document.getElementById("upper_btn");
upBtn.addEventListener("click", () => {
  const nameIn = name_input.value;
  console.log(`user name: ${nameIn}.`);
  console.log(`user name uppercase: ${nameIn.toUpperCase()}.`);
});
// 11.7
console.log("bai 11.7");
const a = document.getElementById("result");
console.log(a);
// 11.8
// console.log("bai 11.8");
// const b = document.getElementById("result");
// const up = result.value;
// console.log(`${up.toUpperCase()}`);
// ex12.1
const items = ["Blackpack","MiBand watch","Ring"];
console.log(items);
// ex12.2

// ex12.3
const ul=document.getElementById("list_ul");
console.log(ul);