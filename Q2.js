// Flatten the Array

const arr = [[1, 2], [3, 4, 5], 6, [7, [8, 9], 0]];

const flatten = [].concat(...arr); // 1 level
const deapFlatten = arr.flat(2); // 2 level

//custom flat
function customFlat(arr, depth = 1) {
  let result = [];
  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlat(ar, depth - 1));
    } else result.push(ar);
  });
  return result;
}

// console.log(customFlat(arr,2));

// Guess the output
function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, i * 1000);
  }
}
// a();

// result
//3
//3
//3

function b() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, i * 1000);
  }
}

// Infinite Currying In javascript

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

false && console.log(add(0)(3)(4)());

// Composition Polyfill

const a1 = (val) => val + 3;
const b1 = (val) => val - 3;
const c1 = (val) => val * 3;

const compose = (...fns) => {
  return function (val) {
    let fnResult = val;
    fns.reverse().forEach((fn) => {
      fnResult = fn(val);
    });
    return fnResult;
  };
};

//2nd way is useing reduce function

const compose2 = (...functions) => {
    return  (arg) => {
        return functions.reduceRight((arg, fn) => fn(arg),arg)
    }
  };


false && console.log(compose2(c1, b1, a1)(10));




const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'efddd6d3edmsh67897e30a01fd8ep1a8f42jsn6515bea9846a',
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
    }
  };
  
  fetch('https://hotels4.p.rapidapi.com/v2/get-meta-data', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));





//copying object Done
//map vs filter Done
//prototype 
//in which case we use bind
//rest and spred 

//react 
//element vs compoment
//pure compoment
//refs
//forworkRefes
// what is intercepter
// react fiber
//HOF
//lazy loading
// how to router admin and use
//Error Handling 


// copying object
// shallow copy spred oprater Object.assign({},object)