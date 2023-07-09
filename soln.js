/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
  // first convert it to a string
  let str = x.toString();

  //   create an empty array to hold the reversed string
  let reverse = [];

  //   use a while loop to capture the last character
  let i = str.length - 1;
  while (i >= 0) {
    reverse.push(str[i]);
    i--;
  }

//   compare the input and reversed element
  if (reverse.join("") === str) return true;

  return false;
};

console.log(isPalindrome(24));
