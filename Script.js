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
  console.log(splitstr);

  let max = "";
  for (let i = 0; i < splitstr.length; i++) {
    if (splitstr[i].length > max.length) {
      max = splitstr[i];
    }
  }
  return max.length; // jumped if we remove.length
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
