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
    return true;
  else {
    return null;
  }
}

console.log(checkNum(9));

//! Get the value between two number

function getValue(start, end) {
  const ans = [];
  for (let i = start + 1; i < end; i++) {
    ans.push(i);
  }
  return ans;
}
console.log(getValue(2, 5));

//! --------------------------

const a = [1, 2, 3];
const b = [2, 3, 5];
console.log(a + b);

// REVERSE

let stt = " ulta karo hame ";
function rev(st) {
  return st.trim().split("").reverse().join("");
}
console.log(`Reverse String:`, rev(stt));

let names = ["John", "Anna", "bob", "jane"];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

// --------------------

let arr = [1, 2, 3];
let allLessThanFive = arr.every((x) => x < 2);
console.log(allLessThanFive); // Output: true
