/** Array Function **/
/** an array called colors with three colors print second color **/
// let colors=["red", "green", "blue"];
// console.log(colors[1]);

/** afunction getfirstItem(arr) that returns the first element **/
// function getfirstItem(arr){
//     return arr[0];
// }
// console.log(getfirstItem(["apple", "Banana", "Mango"]));

/** array length (arr) that return how many items are in the array **/
// function arrayLength(arr){
//     return arr.length;
// }
// console.log(arrayLength(["red", "blue", "green"]));

/** a function double Numbers that returns a new array where every number is doubled **/
// let numbers=[1,2,3,4,5];
// let doublenumbers= numbers.map(function(num){
//     return num*2;
// });
// console.log(doublenumbers);

/** a function getEvenNumber that returns only the even numbers form an array **/
function getEvenNumber(numbers) {
    let evenNumbers = [];

    for (let num of numbers) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }

    return evenNumbers;
}

console.log(getEvenNumber([1, 2, 3, 4, 5, 6, 7, 8]));