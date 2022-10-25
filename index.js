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

function sub(first, second) {
  return first - second;
}

function mul(first, second) {
  return first * second;
}

// first fun problem of the day...

var three = identityf(3);

function identityf(x) {
  return function() {
    return x;
  }
}

// function addf(first) {
//   return function(second) {
//     return add(first, second)
//   }
// }

var addf = liftf(add);
addf(3)(4) // 7
liftf(mul)(5)(6) // 30

log(liftf(mul)(5)(6)) // 30