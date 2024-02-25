//! map () polyfill
Array.prototype.myMap = function (fn) {
  if (!Array.isArray(this)) {
    throw new TypeError("this is not a array");
  }

  if (typeof fn !== "function") {
    throw new TypeError("fn is not function");
  }

  const temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(fn(this[i], i, this));
  }
  return temp;
};

//! filter() polyfill
Array.prototype.myFilter = function (fn) {
  if (!Array.isArray(this)) throw new TypeError("this is not Array");
  if (typeof fn !== "function") throw new TypeError("fn is not function");

  const temp = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      temp.push(this[i]);
    }
  }

  return temp;
};

//! reduce() polyfill
Array.prototype.myRuduce = function (fn, inti) {
  if (!Array.isArray(this)) throw new TypeError("this is not array");
  if (typeof fn !== "function")
    throw new TypeError("callback function not a funtion");

  let acc;
  let startIndex = 0;
  if (inti !== undefined) {
    acc = inti;
  } else {
    if (this.length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    acc = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    acc = fn(acc, this[i], i, this);
  }
  return acc;
};

//! Call()
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") new Error(this, "is not callable");

  let id = Symbol();

  context[id] = this;
  const result = context[id](...args);
  delete context[id];
  return result;
};

let obj = {
  name: "Shreyas",
  job: "FrontEnd",
  company: "Infsys",
};

function printDetails(city) {
  console.log(`${this.name} ${this.job} ${city}`);
}

printDetails.myCall(obj, "jkd");

//! Apply()
Function.prototype.myApply = function (context = {}, arr) {
  if (typeof this !== "function") throw new Error(this, "is not callable");

  if (!Array.isArray(arr)) throw new Error(arr, "this not an array");

  let id = Symbol();

  context[id] = this;
  const result = context[id](...arr);
  delete context[id];

  return result;
};

//! Bind()
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") throw new Error(this, "is not callable");
  let id = Symbol();

  context[id] = this;
  return function (...innerArgs) {
    const result = context[id](...args, ...innerArgs);
    delete context[id];
    return result;
  };
};
