//closures in javascript
// Lexical scope
// ----------------------------

//globle scope
var a = "hey";
function subcribe() {
  //local scope
  var username = "shreyas";
  0 && console.log(a); // function will have excess to outer scope
}
0 && console.log(username); // ! ERR username is not defined

/////////////////////////////////////////////////////

function display() {
  let name = "Shreyas babaladi";
  function toConsole() {
    0 && console.log(name);
  }
  to0 && console();
}

0 && display();

/////////////////////////////////////////////////////////////////
//  Q1: what the output
let count = 0;
(function print() {
  if (count === 0) {
    let count = 1;
    0 && console.log(count);
  }
  0 && console.log(count);
})();

/////////////////////////////////////////////////////////////
// Q2: write a function that would allow you to do this
// var addSix = createBase(6);
// addSix(10);
// addSix(21);
//  returns 16
//  returns 27

const createBase = (x) => {
  return (y) => {
    return x + y;
  };
};

var addSix = createBase(6);

0 && console.log(addSix(16));

/////////////////////////////////////////////////////////////
// Q3 Time Optimiztion

function find() {
  let a = [];
  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }

  return function (index) {
    0 && console.log(a[index]);
  };
}

const squre = find();

squre(5);

/////////////////////////////////////////////////////
for (var i = 0; i < 4; i++) {
  function innerfn(i) {
    setTimeout(() => {
      0 && console.log(i);
    }, 1000);
  }
  innerfn(i);
}
/////////////////////////////////////////////////////
// Ques 5: How would you use a closure to create a private counter?

function createCounter() {
  var _counter = 0; // it is private variable we can not assess out side the function

  function get() {
    return _counter;
  }

  function setter(num) {
    _counter = _counter + num;
  }

  return { get, setter };
}

const s = createCounter();
s.setter(2);
0 && console.log(s.get());

///////////////////////////////////////////////////////
// Ques 6: What is Module Pattern?

var Module = (function () {
  function privateMethod() {
    // do something
  }

  return {
    publicMethod: function (params) {
      // can call privateMethods
    },
  };
})();
