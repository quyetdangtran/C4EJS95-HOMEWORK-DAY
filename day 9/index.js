
//  ex 1
 let myPromise = new Promise (function(resolve, reject){
     resolve();
});
function wait (ms) {
    return new Promise (r=> setTimeout(r, ms))
}
myPromise.then(
    async function success(){
        await wait (5000);
        console.log("Promise is da best.");
    }
   
)
//  ex  4.	Write a function with no parameters / arguments, return a random number from 0 to 10, then take it to the test as follows:
function random (){
    let yourNumber= Math.floor(Math.random() * 11)
    console.log(yourNumber)
}
const x = random ();
    if(x < 0 ){
        console.log("Failed: the number is smaller than 0");
    }
    else if(x >10){
        console.log("Failed: the number is bigger than 10");
    }
    else{
        console.log("Passed, bravo");
    }
// ex 5.	Write a function with 2 parameters / arguments: a and b, return a random number from a to b, take it to the test as follows

function random (a,b){
    let yourNumber= Math.floor(Math.random() * 11)
    console.log(yourNumber)
}
const y = random (4,16);
    if(x < 4 ){
        console.log("Failed: the number is smaller than 4");
    }
    else if(x >16){
        console.log("Failed: the number is bigger than 16");
    }
    else{
        console.log("Passed, bravo");
    }
// ex 6 6.	Write a function to calculate the distance between 2 points (x1, y1) and (x2, y2), the formula is 
function calDistance (x1, x2, y1, y2) {
    let distance = Math.floor(Math.sqrt ((x1 - x2)**2 +(y1 - y2)**2));
    console.log(distance)
}
calDistance();
const d = calDistance (3, 10, 0, 6);
if ( d !== 5) {
  console.log('Failed: the calculation is wrong');
} else {
  console.log('Passed, bravo');
}
