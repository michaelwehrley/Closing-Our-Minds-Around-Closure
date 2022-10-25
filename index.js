'use strict';

function log (arg) {
  document.writeln(arg)
}

/*
  You will be defining functions below.
  The first function `identify` is defined for you
  but the implementation is not there.
  The goal is to write the function that will return itself 
  and then log it using the `log` function defined above.
  When done successfully, you will see the
  value x (i.e., 3) on the screen
*/

// 3 binary functions

function add(first, second) {
  return first + second;
}

console.log(add(3, 4)) // 7

function sub(first, second) {
  return first - second;
}

console.log(sub(3, 4)) // -1

function mul(first, second) {
  return first * second;
}

console.log(mul(3, 4)) // 12
