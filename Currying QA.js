// Currying in Javascript
// Question - Why should we use currying?

// -Currying is a function that takes one argument at a time and returns a new function expecting the next argument. It is a conversion of functions from callable as f(a,b,c)into callable as f(a)(b)(c).

// -It makes a function pure which makes it expose to less errors and side effects.
// -It helps in avoiding the same variable again and again.
// -It is a checking method that checks if you have all the things before you proceed.
// -It divides one function into multiple functions so that one handles one set of responsibility.

function sum(a, b, c) {
  return a + b + c;
}

// In Currying
function sumCurrying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// result 
console.log(sumCurrying(1)(2)(3));
// ------------------------------------------------------------------------

// Q2
function evaluate(operate) {
  return function (a) {
    return function (b) {
      switch (operate) {
        case "sum":
          return a + b;
        case "multi":
          return a * b;
        case "div":
          return a / b;
        case "sub":
          return a - b;
        default:
          return 'Please use right operate'
      }
    };
  };
}

// result 
0 && console.log(evaluate('asdsub')(2)(4));
// ------------------------------------------------------------------------

// Q3 
// Infinite Currying => sum(I)(2)(3)....(n)
function sumInfinite(a) {
  return function (b) {
    if (b) return sumInfinite(a + b);
    return a;
  };
}

// in Arro function  sumInfinite(a) => (b) => b ? a: sumInfinite(a+b);

// result 
0 && console.log(sumInfinite(1)(2)(3)(4)());
// ------------------------------------------------------------------------

// Q4
// Currying vs Partial Application
// EXP Partial Application
function sumPartial(a) {
  return function (b, c) {
    return a + b + c;
  };
}

const a = sumPartial(3);
0 && console.log(a(1, 3));
// ------------------------------------------------------------------------

// Q5 
// Manipulating DOM 
function updateElementText(id) {
  return function (content) {
    document.querySelector(`#${id}`).innerText = content;
  }
}

const updateHeader = updateElementText('someID');

// Result
0 && updateHeader('updateContent');
// ------------------------------------------------------------------------


// Q6
// curry() implementation => Converts f(a, b, c) into f(a)(b)(c)


