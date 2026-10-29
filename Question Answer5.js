/***String Function****/
/** a function reverse words that revers the words of words but keeps each word unchanged **/
// function reverseWords(Sentence) {
//     return Sentence.split("").reverse().join("");
// }
// console.log(reverseWords("Javascript is fun"));

/** a function is palindrome that return true if a string reads the same forword and backword. **/
// function isPalindrome(str) {
//     let cleaned = str.toLowerCase().replace(/\s/g, "");

//     let reversed = cleaned.split("").reverse().join("");

//     return cleaned === reversed;
// }

// console.log(isPalindrome("Never odd or even"));
// console.log(isPalindrome("Hello world"));

/** a function countCharacter that returns how many times char appers in str **/
// function countCharacter(str, char) {
//     let count = 0;

//     for (let letter of str) {
//         if (letter === char) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countCharacter("javascript", "a"));

// /** a function capitalizeWords that capitalize the first letter of every word **/
// function capitalizeWords(Sentence) {
//     return Sentence
//         .split("")
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ");
// }
// console.log(capitalizeWords("hello world"));

/** a function longest word thar returns longest word **/
// function longestWord(sentence) {
//     let words = sentence.split(/\s+/);
//     let longest = "";
//     for (let word of words) {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     }
//     return longest;
// }
// console.log(longestWord("Javascript is very interesting"));

/** a function compress string that compareses repeated characters **/
function compressString(str) {
    if (str.length === 0) {
        return str;
    }
    let compressed = "";
    let count = 1;
    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            compressed += str[i - 1] + count;
            count = 1;
        }
    }
    return compressed.length < str.length ? compressed : str;
}
console.log(compressString("aaabc"));
console.log(compressString("abc"));