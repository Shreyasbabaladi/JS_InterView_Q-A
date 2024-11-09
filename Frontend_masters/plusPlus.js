/**
 * JavaScript Fundamentals Notes
 * ---------------------------
 * This file covers important JavaScript concepts including:
 * 1. Increment Operator Behavior
 * 2. Primitive Types
 * 3. Negative Zero Behavior
 * 4. Object.is() Polyfill
 * 
 */

// SECTION 1: Increment Operator (++x) Behavior
// ------------------------------------------
/**
 * The increment operator (++x) follows these steps:
 * 1. Converts the value to a number if it's not already
 * 2. Increments the value by 1
 * 3. Returns the OLD value (for post-increment) or NEW value (for pre-increment)
 */
const demonstrateIncrement = () => {
    var x = '5';  // String '5'
    
    const plusPlus = (oldVal) => {
        let newVal = Number(oldVal);  // Convert to number
        x = newVal + 1;               // Increment
        return oldVal;                // Return original value
    }
    
    console.log(plusPlus(x));  // Output: 5 (original value)
    console.log(x);            // Output: 6 (incremented value)
}

// SECTION 2: Primitive Types in JavaScript
// --------------------------------------
/**
 * JavaScript has 6 primitive types:
 * 1. undefined
 * 2. String
 * 3. Number
 * 4. Boolean
 * 5. Object (including Functions and Arrays as subtypes)
 * 6. Symbol
 * 
 * Special Cases:
 * - typeof null returns 'object' (known JavaScript quirk)
 * - typeof function(){} returns 'function'
 * - typeof [1,2,4] returns 'object'
 */

// SECTION 3: Negative Zero in JavaScript
// -----------------------------------
/**
 * JavaScript has a special negative zero (-0) value that behaves uniquely:
 * - It's equal to regular zero in normal comparisons
 * - Only detectable through Object.is() or 1/x operations
 */
const demonstrateNegativeZero = () => {
    const x = -0;
    console.log(x === -0);         // true
    console.log(x.toString());     // '0'
    console.log(x === 0);          // true
    console.log(x < 0);            // false
    console.log(x > 0);            // false
    console.log(Object.is(x, -0)); // true
    console.log(Object.is(x, 0));  // false
}

// SECTION 4: Object.is() Polyfill
// -----------------------------
/**
 * Polyfill implementation of Object.is()
 * Handles special cases like negative zero and NaN comparisons
 */
const implementObjectIs = () => {
    if (!Object.is) {
        Object.is = function ObjectIs(x, y) {
            // Helper functions
            const isNegativeZero = (v) => v === 0 && (1/v) === -Infinity;
            const isNaN = (v) => v !== v;

            // Handle negative zero case
            if (isNegativeZero(x) || isNegativeZero(y)) {
                return isNegativeZero(x) && isNegativeZero(y);
            }
            // Handle NaN case
            if (isNaN(x) && isNaN(y)) {
                return true;
            }
            // Handle all other cases
            return x === y;
        };
    }
}

// SECTION 5: Abstract Operations (ToString)
// ======================================
/**
 * ToString Abstract Operation
 * -------------------------
 * Rules for converting values to strings:
 * 
 * Arrays:
 * - Empty array → ""
 * - Single element → element.toString()
 * - Multiple elements → comma-separated string
 * 
 * Examples:
 */
const demonstrateToString = () => {
    console.log([].toString());              // ""
    console.log([1,2,3].toString());         // "1,2,3"
    console.log([null,undefined].toString()); // ","
    console.log([[[],[],[]],[]].toString()); // ",,,"
    console.log([,,,].toString());           // ",,,"
    
    // Object toString() behavior
    console.log({}.toString());              // "[object Object]"
    console.log(Object.prototype.toString.call([]));  // "[object Array]"
}

/**
 * Additional Notes:
 * ---------------
 * - toString() is called implicitly in many operations
 * - It's part of the ToPrimitive abstract operation
 * - Different types have different toString() implementations
 * - When call the toString() method on the object it will call the toPrimitive() that 
 * end up calling toString() and ValueOf() methods on the object.
 */
