let isPalindrome = function(x) {
    var s = x.toString();
    var t = s.split("").reverse().join("");
    return s === t;
};

// console.log(isPalindrome(900));

var isPali = function(x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false;
    }
    var half = 0;
    while (x > half) {
        half = half * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return x === half || x === Math.floor(half / 10);
};

// console.log(isPali(99));

var isPalome = function(x) {
    var reverse = 0;
    var copy = x;

    //The loop break when the copy of original number becomes zero
    //Also negative number cannot be a palindrome
    while (copy > 0) {
      const digit = copy % 10;
      reverse = reverse * 10 + digit;
      copy = ~~(copy / 10);
    }

    return reverse == x;
};

function palindromeOrNah(x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
      return false;
    }
  
    let reversed = 0;
    while (x > reversed) {
      const lastDigit = x % 10;
      console.log("last dig", lastDigit);
      reversed = reversed * 10 + lastDigit;
      console.log("rev", reversed);
      x = Math.floor(x / 10);
      console.log(x);
    }
  
    return x === reversed || x === Math.floor(reversed / 10);
  }
  
 console.log(palindromeOrNah(102));
  