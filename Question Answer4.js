/**Array Question Hard **/
1 - /** a function secondLargest number that return the secondLargest number in an array with string **/
    // function secondLargest(numbers) {
    //     let largest = -Infinity;
    //     let second = -Infinity;
    //     for (let num of numbers) {
    //         if (num > largest) {
    //             second = largest;
    //             largest = num;
    //         } else if (num > second && num < largest) {
    //             second = num;
    //         }
    //     }
    //     return second === -Infinity ? undefined : second;
    // }
    // console.log(secondLargest([10, 5, 20, 8, 15]));

    2 - /** a function removeDuplicates that returns a new array with duplicate cvalue removed  **/
    // function removeDuplicate(arr) {
    //     return [...new Set(arr)];
    // }
    // console.log(removeDuplicate([1, 2, 3, 4, 4, 5, 5]));

    3 - /** a function rotateArray that rotates the array to the right K positons **/
    // function rotateArray(arr, k) {
    //     if (arr.length === 0) return [];

    //     k = ((k % arr.length) + arr.length) % arr.length;

    //     return arr.slice(-k).concat(arr.slice(0, arr.length - k));
    // }

    // console.log(rotateArray([1, 2, 3, 4, 5], 2));


    4 - /** a function mergeArray that message two array into one,removes duplicates and return the result **/

    // function mergeArrays(arr1, arr2) {
    //     return [...new Set([...arr1, ...arr2])];
    // }

    // console.log(mergeArrays([1, 2, 3], [3, 4, 5]));

    5 - /** a function chunkArray that splits an array into small says **/
    // function chunkArray(arr, size) {
    //     if (size <= 0) {
    //         throw new Error("size must be greater than 0");
    //     }
    //     let result = [];
    //     for (let i = 0; i < Array.length; i++) {
    //         result.push(arr.slice(i, i + size));
    //     }
    //     return result;
    // }
    // console.log(chunkArray([1, 2, 3, 4, 5], 2));

    6 - /** a function findmissing that finds the missing number in array contating no 1 to n with one number missing **/
    //     function findMissingNumber(arr) {
    //         let n = arr.length + 1;
    //         let expectedsum = n * (n + 1) / 2;
    //         let actualsum = 0;
    //         for (let num of arr) {
    //             actualsum += num;
    //         }
    //         return expectedsum - actualsum;
    //     }
    // console.log(findMissingNumber([1, 2, 3, 4, 5, 6]));

    7 - /** a function groupByType that gropus array items by their type and return object **/
    function groupByType(arr) {
        let result = {};

        for (let item of arr) {
            let type = typeof item;

            if (!result[type]) {
                result[type] = [];
            }

            result[type].push(item);
        }

        return result;
    }

console.log(groupByType([1, "hello", true, 2, "world", false]));