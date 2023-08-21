28;
31;
36;

/*
 * Symbol ref (Qno:30) in https://github.com/sudheerj/javascript-interview-questions
 *
 * Every symbol value returned from Symbol() is unique irrespective of the optional string.
 *
 * Symbol.for() function creates a symbol in a global symbol registry list. But it doesn't necessarily create a new symbol on every call, it checks first if a symbol with the given key is already present in the registry and returns the symbol if it is found. Otherwise a new symbol created in the registry.
 *
 * In JSON.stringify() All Symbol-keyed properties will be completely ignored. Hence it returns an empty object({}).
 * In Array null will be return;
 *
 *Unlike function declarations, class declarations are not hoisted
 *
 *IIFE(Immediately Invoked Function Expression) is just like any other function expression which won't be hoisted.(Qno:66)
 *
 */

/*
 * Promises
 * Then() block only be run when promises as resolve,
 * After catch() if then() is present it will get executed
 *
 *
 *
 */
