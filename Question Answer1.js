/** loop Function **/
/** For loop print a number  **/
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

/** While loop that print even numbers **/
// let i=2;
// while(i<=20){
//     console.log(i);
//     i+=2;
// }

/** A function call greet that returns **/
// function great (name){
//     return "Hello,"+name+"!";
// }
// console.log(great("Debabrata"));

// /** A function(a,b) that returns the sum of two number **/
// function add(a,b){
//     return a+b;
// }
// console.log(add(5,2));

/** A function print a number(n) that uses to loop to print no 1to n **/
// function printNumber(n){
//     for(let i=1; i<=n; i++){
//         console.log(i);
//     }
// }
// printNumber(5);

/** A function sum number(n) that return the sum of no 1 to n **/
// function SumNumbers(n){
//     let sum=0;
//     for(let i=1; i<=n; i++){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(SumNumbers(5));

/** A for--of loop that prints every item in this Array **/
// let fruits=["Apple", "Banana", "Orange"];
// for(let fruit of fruits){
//     console.log(fruit);
// }

/** Find even (numbers) that takes an array and return only the even numbers **/
// function findEven(Numbers){
//     let evenNumbers=[];
//     for(let num of Numbers){
//         if(num%2===0){
//             evenNumbers.push(num);
//         }
//     }
//     return evenNumbers;
// }
// console.log(findEven([1, 2, 3, 4, 5, 6, 7, 8,10]));

/** Factorial number(n) that returns the factorial of a number **/
// function factorial(n){
//     let result=1;
//     for(let i=1; i<=n; i++){
//         result *=i;
//     }
//     return  result;
// }
// console.log(factorial(5));

/** count vowles that counts how many vowels(a,e,i,o,u) are in a word **/
// function countvowels(word){
//     let count=0;
//     let vowels="aeiou";

//     for(let char of word.toLowercase()){
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countvowels("JavaScripts"));

