//!  New operator implemented

//Implemention
function myNew(Constr, ...args) {
  //The prototype of a new instance of a constructor Constr is Constr.prototype.
  const constext = Object.create(Constr.prototype);
  const result = constructor.apply(constext, args);
  if (typeof result === "object" && result !== null) {
    // The implementor of a constructor can override that the new operators returns this, by returning an object.
    return result;
  }
  return constext;
}

// Testing

/*
 * Simple inheritance hierarchy
 */
function Entity() {
  this.name = function () {
    return this.firstName + " " + this.lastName;
  };
}

function Customer(firstName, lastName) {
  this.Id = Date.now(); //number
  this.firstName = firstName || "";
  this.lastName = lastName || "";
}

/*
 * Establish inheritance for this customer function.
 * ALL INSTANCES OF CUSTOMER WILL DELEGATE TO THIS
 * ENTITY INSTANCE, SHARING ITS STATE AND METHODS. IF THE
 * PROTOTYPE'S STATE IS CHANGED FOR ONE CUSTOMER, IT
 * IS CHANGED FOR ALL CUSTOMERS.
 */
Customer.prototype = new Entity();

// creating an Object with newish()
var c1 = myNew(Customer, "William", "Shatner");
console.log(c1.name());
console.log(c1);
console.log("instanceof Customer:", c1 instanceof Customer); // true

// creating an Object with `new`
var c2 = new Customer("Patrick", "Stewart");
console.log(c2.name());
console.log(c2);
console.log("instanceof Customer:", c2 instanceof Customer); // true

// both objects share the same prototype and constructor
console.log("same prototypes:", Object.getPrototypeOf(c1).isPrototypeOf(c2));
console.log("same constructor:", c1.constructor === c2.constructor);
