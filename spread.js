/**In JavaScript, primitive types (such as numbers, strings, and booleans) are immutable, meaning that their values cannot be changed after they are created. This means that when a primitive type is copied or assigned to a new variable, a new copy of the value is created.

On the other hand, reference types (such as objects and arrays) are mutable, meaning that their properties or elements can be changed after they are created. When a reference type is copied or assigned to a new variable, a new reference to the same object or array is created, but the underlying object or array is not duplicated.

In the code you provided, primitiveArray is an example of a primitive type array, and newPrimitiveArray is a new copy of that array. Because primitive types are immutable, changing an element in newPrimitiveArray does not affect primitiveArray.

objectArray is an example of a reference type array, and newObjectArray is a new copy of that array. However, because objects are mutable, both objectArray and newObjectArray reference the same object. Changing a property of the object in newObjectArray also changes the object in objectArray.

This behavior can be important to consider when working with JavaScript objects and arrays, as it can affect how changes made to variables are propagated throughout a program.

Share Prompt




 */

let primitiveArray = [1, 2, 3];
let newPrimitiveArray = [...primitiveArray];
console.log({ primitiveArray, newPrimitiveArray });

newPrimitiveArray[0] = 9;
console.log({ primitiveArray, newPrimitiveArray });

let objectArray = [
    {
        name: "Amit",
        age: 25
    }
]

let newObjectArray = [
    ...objectArray
]

console.log({ objectArray, newObjectArray });

newObjectArray[0].name = "Shreyas";
console.log({ objectArray, newObjectArray });


//other example
let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
let b = [...a];
b[0][0] = 11
console.log(a, b);




