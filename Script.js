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
console.log(duplicate(arr)); // [ '1', '2', '6' ]

//! -----------------------
//! -----------------------

//! -----------------------
//! -----------------------

//! -----------------------
//! -----------------------

//! -----------------------
//! -----------------------

//! -----------------------
//! -----------------------

//! -----------------------
//! -----------------------
