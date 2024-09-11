// const text = document.getElementsByClassName("id");
// text[0].innerText = "Hello, World!";

// console.log("hello");

// -------------------

// let a, b, c;
// a = 5;
// b = 4;
// c = a + b;
// console.log(c);

// -----------------------

//! check the number between range 1 to 5 and 5 to 7

function checkNum(num) {
  const range = [1, 5];
  const range2 = [5, 7];
  if (
    (num > range[0] && num < range[1]) ||
    (num > range2[0] && num < range2[1])
  )
    return `the number ${num} is in between the range`;
  else {
    return null;
  }
}

// console.log(checkNum(2)); //output: the number 2 is in between the range

//! -----------------------
//! Get the value between two number
//! -----------------------

function getValue(start, end) {
  const ans = [];
  for (let i = start + 1; i < end; i++) {
    ans.push(i);
  }
  return ans;
}
// console.log(getValue(2, 5)); //output:  [ 3, 4 ]

//! -----------------------
//! Reverse The string
//! -----------------------

const revStr = "eh boon ut";

const funforRev = (revStr) => {
  let a = revStr.split("").reverse().join("");
  return a;
};

// console.log(funforRev(revStr)); // tu noob he

//? Explanation:
//* revStr.split("") splits the string into an array of characters.
//* .reverse() reverses the array in place.
//* .join("") joins the array back into a string

//! -----------------------
//! Reverse the string without the method
//! -----------------------

const originalString = "Hello, world!";

function nws(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

// console.log(nws(originalString)); // !dlrow ,olleH

//! -----------------------
//! Check Palindrome OR not without method
//! -----------------------

const strq = "man, naM,!";

function Pali(str) {
  // Normalize the string: remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false; // Characters don't match, not a palindrome
    }
    left++;
    right--;
  }
  return true; // All characters matched, it's a palindrome
}

// console.log(Pali(strq)); // true

//! -----------------------
//! Check Palindrome OR not with method
//! -----------------------

const strq1 = "Man , / ? , nam";

function checkPali(str) {
  const clean = str.replace(/[^[a-zA-Z0-9]/g, "").toLowerCase();
  const reverse = clean.split("").reverse().join("");
  const Check = clean === reverse;
  return Check;
}

// console.log(checkPali(strq1)); //true

//! -----------------------
//! Factorial Number
//! -----------------------
// n!=n×(n−1)!

function num1(num) {
  if (num === 0 || num === 1) {
    return 1; // Base case: factorial(0) or factorial(1) is 1
  } else {
    return num * num1(num - 1); // Recursive call
  }
}
// console.log(num1(5)); // 120

//! -----------------------
//! Sum of Array Elements
//! -----------------------

const A100 = [10, 10];

function arsum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
// console.log(arsum(A100)); // 20
// console.log(A100.length); //2

//! second method

function arsum2(arr) {
  return arr.reduce((accumulator, currentValue) => {
    accumulator = accumulator + currentValue;
    return accumulator;
  }, 0);
}
// console.log(arsum2(A100)); // 20

//! -----------------------
//! FIND THE MAXIMUM AND SECOND MAXIMUM FROM ARRAY
//! -----------------------

//! -----------------------
//! Count the Occurrence of Each Character in a String
//! -----------------------

function charCount1(str) {
  let charCount = {};
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
}
// console.log(charCount1("hello"));// { h: 1, e: 1, l: 2, o: 1 }

//! -----------------------
//! Find Longest Word in a String
//! -----------------------

function findLongestWord(str) {
  const splitstr = str.split(" ");
  // console.log(splitstr);

  let max = 0; // Use max to track the length of the longest word
  let longestWord = ""; // Store the longest word itself
  for (let i = 0; i < splitstr.length; i++) {
    if (splitstr[i].length > max) {
      max = splitstr[i].length;
      longestWord = splitstr[i]; // Optional : Store the word with the maximum length
    }
  }
  // console.log("Longest Word:", longestWord);
  return max; // Return the length of the longest word
}

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 6

//! -----------------------
//! HOW TO FIND DUPLICATE ELEMENTS IN ARRAY
//! -----------------------
const arr = [1, 1, 2, 2, 3, 4, 5, 67, 7, 6, 6];
function duplicate(arr) {
  elementCount = {};
  duplicateArray = [];

  for (let el of arr) {
    if (elementCount[el]) {
      elementCount[el]++;
    } else {
      elementCount[el] = 1;
    }
  }

  for (let keys in elementCount) {
    if (elementCount[keys] > 1) {
      duplicateArray.push(keys);
    }
  }
  return duplicateArray;
}
// console.log(duplicate(arr)); // [ '1', '2', '6' ]

// ----------------method 2 --------------

// arr.indexOf(item):

// indexOf returns the first occurrence (the earliest index) of the item in the array. If item appears multiple times, indexOf(item) will always return the first index where the item is found.

const arr2 = [1, 2, 3, 4, 5, 5, 3, 2];
function dupli(arr) {
  let duplication = arr2.filter((item, index) => {
    return arr.indexOf(item) !== index;
  });
  return duplication;
}

// console.log(dupli(arr2)); // [ 5, 3, 2 ]

//! -----------------------
//! Remove Duplicate from array
//! -----------------------

const ar1 = [
  1, 1, 2, 3, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 56, 6, 6, 6, 6, 6, 66,
];

function arr11(arr) {
  let duplicate = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
  return duplicate;
}
// console.log(arr11(ar1)); //! output : [ 1,  2, 3,  4, 5, 56, 6, 66]

//? ----------------method 2 --------------

const ar2 = [1, 2, 3, 4, 4];
function arr22(arr) {
  let array = new Set(arr);
  let newArray = [...array];
  return newArray;
}
// console.log(arr22(ar2)); // [ 1, 2, 3, 4 ]

//! -----------------------
//! How to find max and min value in a given array in js
//! -----------------------

const arrsec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 33, 3, 22, 33, 44, 44, 4];

const maxvalue = Math.max(...arrsec); //  Spread the array into individual elements
const minvalue = Math.min(...arrsec);

// console.log(maxvalue);
// console.log(minvalue);

//? ----------------method 2 --------------

const arrsec2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 33, 3, 22, 33, 44, 44, 4];

function meth2max(arr) {
  let maxvalue = arr.reduce((max, current) => {
    // return current > max ? current : max; // Proper return statement

    if (current > max) {
      return current;
    } else {
      return max;
    }
  }, arr[0]);
  return maxvalue;
}
// console.log("Max Value:", meth2max(arrsec2)); //Max Value: 44

function meth2min(arr) {
  let minvalue = arr.reduce((min, current) => {
    return current < min ? current : min;
  });
  return minvalue;
}

// console.log("Min Value:", meth2min(arrsec2)); // Min Value: 1

//? ----------------method 3 --------------

const arr123 = [1, 1, 2, 3, 4, 5, 5, 67, 77, 0, -10];

function mnf(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { min, max }; // Returning both as an object
}

// console.log(mnf(arr123)); // Logs { min: -10, max: 77 }

//? ----------------method 4 --------------

const arr111 = [5, 1, 9, 3, 7, 2];

// Sort the array in ascending order
arr111.sort((a, b) => a - b);

const minVal = arr[0];
const maxVal = arr[arr.length - 1];

// console.log("Max Value:", maxVal); // Output: Max Value: 9
// console.log("Min Value:", minVal); // Output: Min Value: 1

//! -----------------------
//! find the second largest value from array
//! -----------------------

const ap = [1, 2, 4, 5, 7, 3, 2, 6];

function secondLarger(arr) {
  let sortedArray = [...new Set(arr)].sort((a, b) => b - a);
  return sortedArray[1];
}
// console.log(`second largest number from array is:`, secondLarger(ap)); //second largest number from array is: 6

//? ----------------method 2 --------------

const a212 = [1, 2, 4, 5, 7, 3, 2, 6];

const largestArray2 = (arr) => {
  firstLargestValue = Math.max(...arr);
  index = arr.indexOf(firstLargestValue);
  arr.splice(index, 1);
  secondLargestValue = Math.max(...arr);
  return secondLargestValue;
};

// console.log(largestArray2(a212)); // 6

//! -----------------------
//! Different Between '==' and '==='
//! -----------------------

var x = 7;
var y = "7";
// console.log(x == y); // true
// console.log(x === y); //  false

//! -----------------------
//! Difference Between Filter And Find Method
//! -----------------------

//? Purpose: filter is used to find all elements in an array that meet a specified condition.
//? filter Result Length	Can return an array of any length, including an empty  array

//* Purpose: find is used to find the first element in an array that meets a specified condition.
//* find Returns a single element (or undefined )

const obj123 = [
  {
    name: "jone",
    age: 20,
  },
  {
    name: "jio",
    age: 21,
  },
  {
    name: "abe",
    age: 28,
  },
  {
    name: "tuee",
    age: 30,
  },
];

//! --------------Filter----------------

function fil(obj) {
  const fil = obj.filter((item) => {
    if (item.age > 25) {
      return item;
    }
  });
  return fil;
}
// console.log(fil(obj123)); // [ { name: 'abe', age: 28 }, { name: 'tuee', age:

//! --------------Find----------------

function find(obj) {
  let find = obj.find((item) => {
    return item.age > 25;
  });
  return find;
}
// console.log(find(obj123)); { name: 'abe', age: 28 }

//! -----------------------
//! How to find a missing elements in given array 1 to 10
//! -----------------------

const arrnum = [1, 2, 3, 4, 5, 6, 8, 9, 10];

function missing(arr) {
  const missingValue = [];
  let minVal = Math.min(...arr);
  let maxVal = Math.max(...arr);
  for (let i = minVal; i <= maxVal; i++) {
    if (arr.indexOf(i) < 0) {
      missingValue.push(i);
    }
    // else {
    //   missingValue.push(i);
    // }
  }
  return missingValue;
}
// console.log(missing(arrnum)); // [ 7 ]

//! -----------------------
//! How to find a even or odd number
//! -----------------------

const ar505 = [1, 2, 42, 3, 34, 32, 435, 345, 345];

const findoddeven = (arr) => {
  const even = arr.filter((item) => {
    return item % 2 == 0;
  });
  const odd = arr.filter((item) => {
    return item % 2 !== 0;
  });
  return `even number: ${even} , odd number: ${odd} `;
};

// console.log(findoddeven(ar505)); // even number: 2,42,34,32 , odd number: 1,3,435,345,345

//! -----------------------
//! Prime Number or Not
//! -----------------------

// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. In other words, a prime number is only divisible by 1 and itself.

function isPrime(num) {
  if (num <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }

  // Check divisibility by all numbers from 2 up to num - 1
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // If divisible by any number, it's not prime
    }
  }

  return true; // If no divisors were found, the number is prime
}

// // Example usage:
// console.log(isPrime(2)); // Output: true (2 is a prime number)
// console.log(isPrime(15)); // Output: false (15 is not a prime number)

//! -----------------------
//! Output Qun.
//! -----------------------

// console.log(+true);
// The unary plus (+) operator attempts to convert its operand to a number. true is a boolean, and when converted to a number, it becomes 1. Output: 1
//! -----------------------
// console.log(!"xyz");
// The logical NOT operator (!) negates a value. Non-empty strings are truthy, so "xyz" is truthy. The negation of a truthy value is false.
// Output: false
//! -----------------------
let a = 10;
let b = new Number(10);
let c = 10;
// console.log(a === b);
// a is a primitive number, b is a Number object (created using new Number(10)), and c is a primitive number. The strict equality operator (===) checks both type and value. a === b returns false because a is a primitive number, and b is an object of type Number. Output: false
//! -----------------------
// console.log("1" == 1);
// console.log("1" == 1); The == operator checks for equality but allows type coercion. The string "1" is coerced to the number 1, so the comparison becomes 1 == 1, which is true. Output: true
//! -----------------------
// console.log("1" === 1);
// The === operator checks for strict equality (no type coercion).
// Since "1" is a string and 1 is a number, the result is false.
// Output: false
//! -----------------------
// console.log(true === "");
// true is a boolean, and "" is an empty string.
// Since their types differ (boolean and string), the comparison is false.
// Output: false
//! -----------------------
// console.log(NaN == NaN);
// NaN is a special value in JavaScript that stands for "Not a Number".
// NaN is not equal to anything, including itself.
// Output: false
//! -----------------------
// console.log(NaN === NaN);
// Same as above but with strict equality (===). NaN is not equal to NaN even with strict equality.
// Output: false
//! -----------------------
// console.log("4" + 2 + 6);
// The + operator concatenates when one of the operands is a string.
// "4" + 2 results in "42", then "42" + 6 results in "426".
// Output: "426"
//! -----------------------
// console.log("4" + 2 * 6);
// The multiplication (*) has higher precedence than addition.
// 2 * 6 is evaluated first, resulting in 12, and then "4" + 12 results in "412" (string concatenation).
// Output: "412"
//! -----------------------
// console.log("5" - 2 + 6);
// The - operator attempts to convert both operands to numbers.
// "5" - 2 results in 5 - 2, which is 3. Then, 3 + 6 results in 9.
// Output: 9
//! -----------------------
// console.log("5" - "2" + 6);
// Similar to the previous case. "5" - "2" is 5 - 2, which is 3. Then, 3 + 6 results in 9.
// Output: 9
//! -----------------------
// console.log("4" * 2 + 6);
// The * operator attempts to convert the operands to numbers.
// "4" * 2 results in 8. Then, 8 + 6 results in 14.
// Output: 14
//! -----------------------
// console.log(typeof NaN);
// The typeof operator returns the type of the operand.
// NaN is of type number in JavaScript, even though it stands for "Not a Number".
// Output: "number"
//! -----------------------
const arr1a = ["one", "two"];
const str = "hello";

const ress = arr.includes("one");
const onthervar = arr.includes("onetwo");
const newvar = str.includes("ll");

// console.log(ress);      // Output: true
// console.log(onthervar); // Output: false
// console.log(newvar);    // Output: true

// arr1a.includes("one"):

// Checks if the string "one" exists in the array arr1a.
// Since "one" is present, it returns true.
// Output: true
// arr1a.includes("onetwo"):

// Checks if the string "onetwo" exists in the array arr1a.
// "onetwo" is not present in the array, so it returns false.
// Output: false
// str.includes("ll"):

// Checks if the string "ll" exists in the string str.
// "ll" is present in "hello", so it returns true.
// Output: true
//! -----------------------

//! -----------------------
//! Flat the array
//! -----------------------

//? ----------Method -1 -------------

const arrrr = [
  [1, 2, 8],
  [4, 3],
  [5, 6],
];

const flatarr = arrrr.flat();
// console.log(flatarr);  // output: [1, 2, 8, 4,3, 5, 6]

//? ----------Method -2  -------------

const arrrr2 = [
  [1, 2, 8],
  [4, 3],
  [5, 6],
];
let flatarr2 = [];
for (let i = 0; i < arrrr2.length; i++) {
  for (let j = 0; j < arrrr2[i].length; j++) {
    flatarr2.push(arrrr2[i][j]);
  }
}
// console.log(flatarr2);  // output: [1, 2, 8, 4,3, 5, 6]

//! -----------------------
//! ascendingArr and descendingArr
//! -----------------------

//? ----------ascending--------------------

const arr1111 = [5, 1, 9, 3, 7, 2];

const ascendingArr = arr1111.slice().sort((a, b) => a - b); // `slice()` creates a copy of the array

// console.log(ascendingArr);// Output: [1, 2, 3, 5, 7, 9]

//? ----------Descending--------------------

const arr223 = [5, 1, 9, 3, 7, 2];

const descendingArr = arr223.slice().sort((a, b) => b - a); // `slice()` creates a copy of the array

// console.log(descendingArr); // Output: [9, 7, 5, 3, 2, 1]

//? ------------sort array string in ascending ALPHABETIC------------------

const strArr = ["Banana", "apple", "cherry"];

const sortedStrArr = strArr.sort((a, b) => {
  return a.slice().toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
});

// console.log(sortedStrArr); // [ 'apple', 'Banana', 'cherry' ]

//? -----------sort array string in DESCENDING ALPHABETIC -------------------

const strArr2 = ["Banana", "apple", "cherry"];

const sortedStrArr2 = strArr2.sort((a, b) => {
  return b.slice().toLocaleLowerCase().localeCompare(a.toLocaleLowerCase());
});

// console.log(sortedStrArr2); // [ 'cherry', 'Banana', 'apple' ]

//? ---------------Sort Age in Array of object--------------

const person2 = [
  {
    name: "abc",
    age: 30,
  },
  {
    name: "xyz",
    age: 16,
  },
  {
    name: "def",
    age: 32,
  },
];

const sortedAge = person2.sort((a, b) => {
  return a.age - b.age;
});

/* console.log(sortedAge); //
   output : [
  { name: 'xyz', age: 16 },
  { name: 'abc', age: 30 },
  { name: 'def', age: 32 }
 ] */
//! -----------------------
//? ---------------Sort WITHOUT INBUILT METHOD Array --------------
//! -----------------------
//! -----------------------
//? ---------------bubbleSort --------------
//! -----------------------
// for theory
// https://youtu.be/p5Hacf4MeBY?si=BqErH3XPeqDNTSfn

let ary = [1, 2, 4, 66, 63, 20, 90, 33];

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap if the element is greater than the next element
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// console.log(bubbleSort(ary)); // [1,  2,  4, 20, 33 , 63, 66, 90]

//! -----------------------
//? ---------------bubbleSort Descending --------------
//! -----------------------

function bubbleSortDescending(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        // Change condition for descending
        // Swap if the current element is less than the next element
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// console.log(bubbleSortDescending(ary)); // [90, 66, 63, 33, 20, 4, 2, 1]

//! -----------------------
//? ---------------bubbleSort Ascending string --------------
//! -----------------------

let strArr23 = ["abc", "cde", "wd"];
function bubbleSortStringsAscending(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      // Compare strings using localeCompare
      if (arr[j].localeCompare(arr[j + 1]) > 0) {
        // for ascending
        // Swap if the current string is greater than the next string
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// console.log(bubbleSortStringsAscending(strArr23)); // ["abc", "cde", "wd"]

//! -----------------------
//? ---------------bubbleSort Descending string --------------
//! -----------------------

let strArr232 = ["abc", "cde", "wd"];

function bubbleSortStringsDescending(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      // Compare strings using localeCompare
      if (arr[j].localeCompare(arr[j + 1]) < 0) {
        // for descending
        // Swap if the current string is less than the next string
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// console.log(bubbleSortStringsDescending(strArr232)); // ["wd", "cde", "abc"]

//! -----------------------
//? ---------------Selection Ascending --------------
//! -----------------------

function ssa(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    // console.log(arr[i]);
    let minIndex = i; // Assume the first element of the unsorted part is the smallest

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

let ary1222 = [1, 2, 4, 66, 63, 20, 90, 33];
// console.log(ssa(ary1222));

//! -----------------------
//? ---------------merge Ascending --------------
//! -----------------------

let mergeSortArr = [2, 3, 55, 32, 44, 1, 4, 200];

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: a single element array is already sorted
  }

  // Split the array into two halves
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  // Merge the sorted halves
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  // Merge two sorted arrays
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      // Use <= to handle equal values
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Append remaining elements from both arrays
  result = result.concat(left.slice(i)).concat(right.slice(j));

  return result;
}

// console.log(mergeSort(mergeSortArr)); // [1,  2,  3,   4,32, 44, 55, 200]
