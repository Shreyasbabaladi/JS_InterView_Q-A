const user = {
  name: "Shreyas Babaladi",
  age: 34,
};

//* we can delete
delete user.age;

0 && console.log(user);
////////////////////////////////////////////
//Q2
const func = (function (a) {
  delete a;
  return a;
})(5);

0 && console.log(func); //5

////////////////////////////////////////////
// To add dynamic property

let property = "lastName";
let value = "Babaladi";

const user2 = {
  name: "Shreyas Babaladi",
  [property]: value,
  age: 34,
};
////////////////////////////////////////////
// Q3
// output
const obj3 = {
  a: "one",
  b: "two",
  a: "three",
};

0 && console.log(obj3);
////////////////////////////////////////////


// Q4
//Create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2.
let num = {
  a: 100,
  b: 200,
  title: "My nums",
};
multiplyByTwo(num);

function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
  0 && console.log(obj);
}
////////////////////////////////////////////

// Q4
// What's the Output of the following code? //! imp
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

0 && console.log(a[b]);
////////////////////////////////////////////

// Q5
// What's JSON.strigify and JSON.parse ?
const user3 = {
  name: "shreyas",
  age: 24,
  fn: function () {
    0 && console.log("Hey there");
  },
};
// JSON will not take functions stringifyed
0 && console.log(JSON.parse(JSON.stringify(user3)));
////////////////////////////////////////////

//Q6
// What's the Output of the following code? //! import
const settings = {
  username: "Piyush",
  level: 20,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);

0 && console.log(data);
////////////////////////////////////////////

//Q7
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => Math.PI * this.radius,
};
0 && console.log(shape.diameter()); //20
0 && console.log(shape.perimeter()); //NaN

// *Q8 create an object that is not mutable but allows adding new key-value pairs
// By default, properties added using Object.defineProperty() are not writable, not enumerable, and not configurable.
// The method Object.getOwnPropertyDescriptor allows to query the full information about a property.
// Math.PI is non-writable, non-enumerable and non-configurable:
// refer: https://javascript.info/property-descriptors
0 && (() => {
  const obj = { a: 1 };
  Object.freeze(obj);
  obj.a = 2; // Throws an error in strict mode
  obj.b = 2; // Throws an error in strict mode

  Object.defineProperty(obj, 'b', {
    value: 2,
    writable: false,
    enumerable: true,
    configurable: false
  });

  console.log(obj);// {a: 1, b: 2}

})()



// *Q9: shallow copy vs deep copy

0 && (() => {
  //-------------- Shallow copy
  const obj1 = { a: 1, b: { c: 2 } };
  const obj2 = { ...obj1 };
  // or 
  const obj5 = Object.assign(obj1)
  obj2.b.c = 3;
  console.log(obj1); // {a: 1, b: {c: 3}}
  console.log(obj2); // {a: 1, b: {c: 3}}

  //--------------- Deep copy
  const deepCopy = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }

    const newObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
      newObj[key] = deepCopy(obj[key]);
    }

    return newObj;
  };

  // or

  const deepCopy2 = (obj) => {
    return JSON.parse(JSON.stringify(obj));
  };

  // or

  const deepCopy3 = (obj) => {
    return structuredClone(obj);
  };
  // It is used internally when invoking structuredClone(), to transfer data between Workers via postMessage(), storing objects with IndexedDB, or copying objects for other APIs.

  const obj3 = { a: 1, b: { c: 2 } };
  const obj4 = deepCopy(obj3);
  obj4.b.c = 3;
  console.log(obj3); // {a: 1, b: {c: 2}}
  console.log(obj4); // {a: 1, b: {c: 3}}

})()



