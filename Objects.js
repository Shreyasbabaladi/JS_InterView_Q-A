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
// What's the Output of the following code? //! import
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

