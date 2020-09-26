// //-------- excercise 1
// // *question 1:1.	What are var and const in JavaScript?
// // var và const là từ khóa để  khai báo tên biến.
// // *question 2.	What are the differences between let and var?
// // var sẽ có scope là global scoped khi ra khỏi block thì biến vẫn tồn tại.
// // let có scope là block scoped nghĩa là mọi thay đổi của biến chỉ tồn tại trong scoped nếu ra khỏi scope thì sẽ không sử dụng được.
// // *question 3. What are the differences between let and const?
// // let can be resigned and const can't be resign.
// //  *4.	What to use in what cases?

// // -------excercise 2
// // *question 1.	What is Boolean?
// //  Boolean là một kiểu dữ liệu trong javascript.
// // *question 2.	What results in Boolean?
// // kết quả của kiểu dữ liệu boolean là 2 giá trị 'true' và 'false'.
// -------excercise 3
// part a.	7 numbers, starting from 0 (no user input)
for (i = 0; i < 7; i++) {
    console.log(i);
  }
  // // part Bb.	n numbers, starting from 0, n entered by user
  const  number = prompt("Enter a number");
  for (i = 0; i < number; i++) {
    console.log(i);
  }
  //part cc.	A sequence of numbers, starting from 3, ending before n, n entered by user
  const  n_number = prompt("Enter a number");
  for (i = 3; i < n_number; i++) {
    console.log(i);
  }
  // part Dd.	A sequence of numbers, starting from c, ending before n, c and n entered by user
  
  const stratFrom = (c = prompt("enter c"));
  const endBefore = (n = prompt("enter n "));
  for (i = c; i < n; i++) {
    console.log(i);
  }
  // part ee.	A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user
  const a = prompt("enter a");
  const b = prompt("enter b ");
  for (i = a; i < b; i + 3) {
    console.log(i);
  }
  // part f.	A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user
  const numberC = prompt(" enter c");
  const numberN = prompt("enter n");
  const numberS = prompt("enter s");
  for (i = numberC; i < numberN; i = i + numberS) {
    console.log(i);
  }
  // ------excercise 4.	Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
  const factorialOfN = prompt("enter a number");
  const fact = 1;
  for (i = 1; i <= factorialOfN; i++) {
    fact = fact * i;
    console.log(fact);
  }
  alert("the factorial of 5 is " + fact);
  // ------excecise 5.	Write a program asking users their age, and then decide if they are old enough to view a 14+ content
  const age = prompt("How old are you ?");
  if (age < 14) {
    alert("you are not old enough to view this content.");
  } else  {
    alert("enioy!");
  }
  // ------excercisr 6.	Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
   const numberX = prompt('enter a number')
   if(numberX < 4.5){
       alert ('Lower half of 9')
   }else {
       alert('Highter half of 9')
   }
  // ------excercise 7.	Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
  const number1 = Number(prompt("enter x"));
  const number2 = Number(prompt("enter n"));
  if (number1 < number2 / 2) {
    alert(number1 + " is in lower half of " +' ' +  number2);
  } else {
    alert(number1 + " is in higher half of  " + ' ' + number2);
  }
  // -------excercise 8.	Write a script to check if a number is even (divisible by 2) or odd number
  const  y = prompt(" y =");
  for (i = 1; i <= y; i++) {
    if (y % 2 === 0) {
      alert(y + "is a even  number  ");
    } else 
      alert(y + "is an odd number");
    }
  }
  // --------excercise 9.	Write a program to print out
  // part a.	6 L’s and H’s, half L’s, half H’s (L means low, H means high)
  for( i = 0; i < 3; i ++ ){
  console.log('L')
  }
  for( i = 0; i < 3; i ++ ){
  console.log('H')
  }
  // part  b.	n L’s and H’s in total, n entered by user
   const numberInput = prompt("Enter the total number of L's and H's" )
   const mid1 = numberInput /2
   for (i = 0; i < mid1; i++){
  console.log("L")
   }
   for (i = mid1; i <numberInput; i++){
  console.log('H')
   }
  // part c.	8 1’s and 0’s in total, consecutively
  for (let i = 0; i < 4; i++) {
      console.log("0");
      console.log("1");
  // part d.	n 1’s and 0’s in total, consecutively, n entered by user
  const numInput = prompt("Enter the total number of L's and H's" )
  const mid2 = numInput /2
  for(i= 0; i < mid2; i ++){
  console.log('0')
  }
  for(i = mid2; i < numInput;i ++){
  console.log('1')
  }
  // -------excercise 10
  const mass = prompt("your weight in kg?");
  const height = prompt("your height in cm?");
  const BMI = mass / (height * 0.01 * (height * 0.01));
  alert("Your BMI is " + BMI);
  if (BMI < 16) {
    alert("you are severely underweight");
  } else if (16 < BMI && BMI < 18.5) {
    alert("you are underweight");
  } else if (BMI > 18.5 && BMI < 25) {
    alert("you are normal weight");
  } else if (BMI > 25 && BMI < 30) {
    alert("you are overweight");
  } else 
    alert("you are obese");
  }
  